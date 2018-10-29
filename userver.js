#!/usr/bin/env node

var fs = require("fs");
var https = require("https");
var http = require("http");
var config = require("./config.js");
var log = require("./logger.js");

var date = new Date();

config.pathnode = process.argv[0];
config.pathserv = process.argv[1];

//explorePaths();

function explorePaths(){
  if(fs.isDirectory(config.pathnode)){
    log.info("Usando ruta de node" + config.pathnode);
  }else{
    log.error("La ruta especificada no es correcta" + config.pathnode);
  }
}

log.info("Procedimiento de informacion");
log.error("Procedimiento de error");
log.warning("Procedimiento de precaucion");
