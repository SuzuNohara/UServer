let config = require('./config.js');
let fs = require('fs');

function error(message){
  let date = new Date();
  console.log("ERROR: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "> " + message);
}

function info(message){
  let date = new Date();
  console.log("INFO: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "> " + message);
}

function warning(message){
  let date = new Date();
  console.log("WARNING: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "> " + message);
}

function checkDay(){
  let date = new Date();
  if(config.logs){
    fs.readFile(config.logsroute + 'LOG_' + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + '.log', (error,datos) => {
      if (error)
        console.log(error);
      else
        console.log(datos.toString());
    });
    fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
      if (error)
        console.log(error);
      else
        console.log('El archivo fue creado');
    });
  }
}
