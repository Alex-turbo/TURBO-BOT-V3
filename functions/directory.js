const fs = require('fs');
let direc = JSON.parse(fs.readFileSync('./database/directory.json'));

/**
 * agregue el nombre del archivo de imagen almacenado en la base de datos
 * @param { string } value
*/
const addImage = (value) => {
  text = value;
  direc.image.push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

/**
 * agregue el nombre del archivo de video almacenado en la base de datos
 * @param { string } value
*/
const addVideo = (value) => {
  text = value;
  direc.video.push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

/**
 * agregue el nombre del archivo de audio almacenado en la base de datos
 * @param { string } value
*/
const addAudio = (value) => {
  text = value;
  direc.audio.push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

/**
 * agregue el nombre del archivo de sticker almacenado en la base de datos
 * @param { string } value
*/
const addStiker = (value) => {
  text = value;
  direc.sticker .push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

const addReport = (id, value) => {
  text = value;
  obj = {
    id: id,
    report: value
  };
  direc.report.push(obj);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

module.exports = {
  direc,
  addImage,
  addVideo,
  addStiker,
  addAudio, 
  addReport, 
  addReport
};
