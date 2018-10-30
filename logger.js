let config = require('./config.js');
let fs = require('fs');

var error = function error(message){
  let line = "ERROR: " + getLineDate() + "> " + message;
  if(config.screenlogs){console.error(line);}
  if(config.logs){writeLog(line);}
};

var info = function info(message){
  let line = "INFO: " + getLineDate() + "> " + message;
  if(config.screenlogs){console.log(line);}
  if(config.logs){writeLog(line);}
};

var warning = function warning(message){
  let line = "WARNING: " + getLineDate() + "> " + message;
  if(config.screenlogs){console.warn(line);}
  if(config.logs){writeLog(line);}
};

function writeLog(line){
  let date = new Date();

  if(config.synclogs){
    // Modo sincrono (recomendado)
    try{
      let cont = fs.readFileSync(config.logsroute + 'LOG-' + getFileDate() + '.log');
      fs.writeFileSync(config.logsroute + 'LOG-' + getFileDate() + '.log', cont + '\n' + line);
    }catch(error){
      fs.writeFileSync(config.logsroute + 'LOG-' + getFileDate() + '.log', line);
    }
  }else{
    // Modo asincrono (produce sobreescritura de lineas)
    fs.readFile(config.logsroute + 'LOG-' + getFileDate() + '.log', (error,datos) => {
      if (error){
        fs.writeFile(config.logsroute + 'LOG-' + getFileDate() + '.log',line, error => {
          if (error){
            console.log("ERROR - Error desconocido en la escritura de archivo de log: " + error);
          }
        });
      }else{
        fs.writeFile(config.logsroute + 'LOG-' + getFileDate() + '.log', datos + '\n' + line, error => {
          if (error){
            console.log("ERROR - Error desconocido en la escritura de archivo de log: " + error);
          }
        });
      }
    });
  }
}

function getLineDate(){
  let date = new Date();
  return '' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + "/" + (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()) + "/" + date.getFullYear() + " - " + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
}

function getFileDate(){
  let date = new Date();
  return '' + date.getFullYear() + '-' + (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
}

module.exports = {info, error, warning};
