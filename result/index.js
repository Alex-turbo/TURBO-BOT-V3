const fs = require('fs');

// nueva funcion
function readfile(file) {
  return JSON.parse(fs.readFileSync(file));
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
} 

// -- resultados de descarga
const { pinterest } = require('./download/pinterest_img');
const { igDl } = require('./download/instagramPost_dl.js');
const { Ttdl } = require('./download/tiktokPost_dl.js');
const { joox } = require('./download/jooxDl.js');
const { yta, ytv } = require('./download/yt_download');

// -- resultados de búsqueda
const { playstore } = require('./search/playstore');

// -- resultados de información 
const {namaninja, blackpill, typewriter, sans, castle} = require('./informasi/text_generator');

// -- archivo de resultados json
const _verdad = readfile('./result/random/verdad.json');
const _reto = readfile('./result/random/reto.json');

// -- get resultados
const verdad = () => {
 return pickRandom(_verdad);
};

const reto = () => {
 return pickRandom(_reto);
};




module.exports = {
	verdad, 
	reto, 
  namaninja,
  blackpill,
  typewriter,
  sans, 
  castle,
  pinterest,
  playstore,
  igDl,
  Ttdl, 
   joox,
  yta,
  ytv
};
