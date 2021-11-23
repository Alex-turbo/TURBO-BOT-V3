const fs = require('fs');

const st = JSON.parse(fs.readFileSync('./database/setting-bot.json'));

/**
 * Agregar un nuevo nombre de bot 
 * @param { Object } value
*/
const addName = (value) => {
st.nama = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * agregar un nuevo autor del bot a la base de datos 
 * @param { Object } value
*/
const addAuthor = (value) => {
st.author = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * agregar nuevo  packname de bot
 * @param { Object } value
*/
const addPackname = (value) => {
st.packname = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * agregar nuevo  wm de bot 
 * @param { Object } value
*/
const addWm = (value) => {
st.wm = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * agregar nivel  Poin game de  bot
 * @param { Number } value
*/
const addPoingame = (value) => {
st.poinGame = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * agregar nuevo  game time de bot 
 * @param { Number } value
*/
const addGametime = (value) => {
st.gameWaktu = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * agregar bot público de estado a la base de datos
 * @param {Boolean } true
*/
const addCmd = () => {
st.totalcommand += 1;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};


module.exports = {
  st,
  addName,
  addAuthor,
  addPackname,
  addWm,
  addGametime,
  addPoingame,
  addCmd
};
