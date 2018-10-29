let fs = require('fs');
let date = new Date();
if(true){
  try{
    let cont = fs.readFileSync('./archivo.txt').toString();
    fs.writeFileSync('./archivo.txt', cont + '\n' + 'linea nueva');
  }catch(error){
    fs.writeFileSync('./archivo.txt', 'contenido');
  }
}
