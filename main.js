const { WAConnection: _WAConnection, ReconnectMode, MessageType, MessageOptions } = require('@adiwajshing/baileys');
const simple = require("./whatsapp/connecting.js");
const WAConnection = simple.WAConnection(_WAConnection);
const Turbo = new WAConnection();
const qrcode = require("qrcode-terminal");
const {
  cekWelcome,
  cekAntilink,
  cekBadword,
  cekAntidelete,
  cekDetect
} = require('./functions/group');
const {
  getCustomWelcome,
  getCustomBye
} = require('./functions/welcome')
const fs = require("fs");
const thumb = fs.readFileSync('./temp/turbo.jpg')
const { getBuffer } = require('./library/fetcher')
const { week, time, tanggal} = require("./library/functions");
const { color } = require("./library/color");
async function starts() {
	Turbo.autoReconnect = ReconnectMode.onConnectionLost;
	Turbo.version = [2, 2140, 6];
	Turbo.logger.level = 'warn';
	Turbo.on('qr', () => {
	console.log(color('[QR]','white'), color('Escanee el codigo QR para conectarse'));
	});

	fs.existsSync('./whatsapp/sessions.json') && Turbo.loadAuthInfo('./whatsapp/sessions.json');
	
	await Turbo.connect({timeoutMs: 30*1000});
  fs.writeFileSync('./whatsapp/sessions.json', JSON.stringify(Turbo.base64EncodedAuthInfo(), null, '\t'));
  link = 'https://chat.whatsapp.com/G5sXrkhJ0pb0'
  Turbo.query({ json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]})
    // llamada por wha
    // ¡esto puede tardar unos minutos si tiene miles de conversaciones!!Turbo.on('chats-received', async ({ hasNewChats }) => {
    	Turbo.on('chats-received', async ({ hasNewChats }) => {
        console.log(`‣ Tú tienes ${Turbo.chats.length} chats, new chats available: ${hasNewChats}`);

        const unread = await Turbo.loadAllUnreadMessages ();
        console.log ("‣ Tú tienes " + unread.length + " mensajes no leídos");
    });
    // called when WA sends chats
    // ¡esto puede tardar unos minutos si tiene miles de contactos!
    Turbo.on('contacts-received', () => {
        console.log('‣ Tú tienes ' + Object.keys(Turbo.contacts).length + ' contactos');
    });
    
    //--- Bienvenida y Despedida 
  Turbo.on('group-participants-update', async (anu) => {
      isWelcome = cekWelcome(anu.jid);
      if(isWelcome === true) {
      	
      try {
	      ppimg = await Turbo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
	    } catch {
	      ppimg = 'https://i.ibb.co/Jr6JBJQ/Profile-TURBO.jpg';
	    } 
	
      mdata = await Turbo.groupMetadata(anu.jid);
      if (anu.action == 'add') {
        num = anu.participants[0];
          
	    let username = Turbo.getName(num)
        let about = (await Turbo.getStatus(num).catch(console.error) || {}).status || ''
        let member = mdata.participants.length
        let tag = '@'+num.split('@')[0]
	    let buff = await getBuffer(ppimg);
	    let descrip = mdata.desc
	    let welc = await getCustomWelcome(mdata.id)
	    capt = welc.replace('@user', tag).replace('@name', username).replace('@bio', about).replace('@date', tanggal).replace('@desc', descrip).replace('@group', mdata.subject);
	      Turbo.send2ButtonLoc(mdata.id, buff, capt, 'Suscríbete en YouTube\nhttps://youtube.com/c/turbontr1?sub_confirmatión=1', '⦙☰ MENU', '/menu', '⏍ INFO GP', '/infogp', false, {
	      contextInfo: {  
            mentionedJid: Turbo.parseMention(capt)
	      } 
	    });
        } else if (anu.action == 'remove') {
        num = anu.participants[0];
        let username = Turbo.getName(num)
        let about = (await Turbo.getStatus(num).catch(console.error) || {}).status || ''
        let member = mdata.participants.length
        let tag = '@'+num.split('@')[0]
        let buff = await getBuffer(ppimg);
        let bye = await getCustomBye(mdata.id);
        capt = bye.replace('@user', tag).replace('@name', username).replace('@bio', about).replace('@date', tanggal).replace('@group', mdata.subject);
        Turbo.sendButtonLoc(mdata.id, buff, capt, 'Suscríbete en YouTube\nhttps://youtube.com/c/turbontr1?sub_confirmatión=1', '👋🏻', 'unde', false, {
	      contextInfo: { 
            mentionedJid: Turbo.parseMention(capt)
	      } 
	    });
	//--
      }
  }
});

//--antidelete 
Turbo.on('message-delete', async (m) => {
    if (m.key.fromMe) return;
    let isAntidelete = cekAntidelete(m.key.remoteJid);
    if (isAntidelete === false) return;
    m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message;
    const Type = Object.keys(m.message)[0];
    await Turbo.reply(m.key.remoteJid, `
━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

*▢ Nombre :* @${m.participant.split`@`[0]} 
*▢ Hora :* ${time}

━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    });
    Turbo.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m));
  });
    
//---llamada auto block
Turbo.on("CB:Call", json => {
  let call;
  calling = JSON.parse(JSON.stringify(json));
  call = calling[1].from;
  Turbo.sendMessage(call, `*${Turbo.user.name}* No hagas llamadas al bot, tu número se bloqueará automáticamente`, MessageType.text).then(() => Turbo.blockUser(call, "add"));
}); 


}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
  console.log("‣ Modulo", `'${module}'`, "se está revisando si hay cambios");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
    });
    }


/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
      } catch (e) {
        reject(e);
        }
        });
        }

require('./index.js');
nocache('./index.js', module => console.log(color(`Index.js Se actualizó!`)));


Turbo.on('chat-update', async (message) => {
require('./index.js')(Turbo, message);
});

starts();
