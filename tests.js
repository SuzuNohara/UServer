let fs = require('fs');
let date = new Date();
if(true){
  console.log('try - ./logs/' + 'LOG_' + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + '.log');
  fs.writeFile('./logs/' + 'LOG_' + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + '.log', '\ncontenido', error => {
    if (error){
      console.log('Error en read file - ' + error);
      fs.writeFile('./logs/' + 'LOG_' + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + '.log', 'contenido', error => {
        if (error){
          console.log("Error en - " + error);
        }else{
          console.log("Escritora segunda exitosa");
        }
      });
    }else{
      console.log("Escritora inicial exitosa");
    }
  });
}
