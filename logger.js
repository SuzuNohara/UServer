let config = require('./config.js');
let fs = require('fs');

function error(message){
  let date = new Date();
  console.log("ERROR: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "> " + message);
  if(config.screenlogs){console.log(line);}
  if(config.logs){writeLog(line);}
}

function info(message){
  let date = new Date();
  console.log("INFO: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "> " + message);
  if(config.screenlogs){console.log(line);}
  if(config.logs){writeLog(line);}
}

function warning(message){
  let date = new Date();
  let line = "WARNING: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "> " + message;
  if(config.screenlogs){console.log(line);}
  if(config.logs){writeLog(line);}
}

function writeLog(line){
  let date = new Date();
  if(config.logs){
    fs.readFile(config.logsroute + 'LOG_' + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + '.log', (error,datos) => {
      if (error){
        fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
          if (error){

          }else{

          }
        });
      }else{

      }
    });
  }
}
