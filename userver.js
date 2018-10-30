#!/usr/bin/env node

var fs = require("fs");
var http = require("http");
var config = require("./config.js");
var log = require("./logger.js");

log.info("Iniciando UServer...");

// Paths de recursos
config.pathnode = process.argv[0];
config.pathserv = process.argv[1];

log.info("Node desde ruta " + config.pathnode);
log.info("Servidor desde " + config.pathserv);

// delcaracion de servidor
let server;

if(config.http && !config.https){
    log.info("Iniciando servidor...");
    server = http.createServer(peticiones);
    serverStart();
}else{
    log.error("Configuración de HTTP y HTTPS incorrecta, no pueden ser ambos true");
    serverExit();
}

function peticiones(req, res) {

    log.info("Petición recibida - " + req.toString());

    // configuracion CORS
    if (config.cors.allow) {
        if(config.cors.external){
            res.setHeader("Access-Control-Allow-Origin", "*");
        }else if(config.cors.internal){
            res.setHeader("Access-Control-Allow-Origin", "/*");
        }else{
            log.error("CORS Allow permitido... No se ha seleccionado local o externo como metodo");
            serverExit();
        }
        res.setHeader("Access-Control-Request-Method", config.cors.requestMethods.join(","));
        res.setHeader("Access-Control-Allow-Methods", config.cors.allowMethods.join(","));
        res.setHeader("Access-Control-Allow-Headers", config.cors.headers.join(","));
        
        // retorno solo para conocer opciones
        if (req.method === "OPTIONS") {
            log.info("Solicuud de informacion OPTIONS\n" + res.toString());
            res.writeHead(200);
            res.end();
            return;
        }
    }
    /*
    // Deteccion de aplicaciones
    var url = req.url.split("?")[0];
    // Attaches path prefix with --path option
    var possibleFilename = resolveUrl(url.slice(1)) || "dummy";

    var safeFullFileName = safeFileName(possibleFilename);

    fs.stat(safeFullFileName, function(err, stats) {
        var fileBuffer;
        if (!err && stats.isFile()) {
            fileBuffer = fs.readFileSync(safeFullFileName);
            let ct = mime.lookup(safeFullFileName);
            log(`Sending ${safeFullFileName} with Content-Type ${ct}`);
            res.writeHead(200, { "Content-Type": ct });
        } else {
            log("Route %s, replacing with index.html", safeFullFileName);
            fileBuffer = returnDistFile();
            res.writeHead(200, { "Content-Type": "text/html" });
        }

        res.write(fileBuffer);
        res.end();
    });*/
}

function serverStart() {
    server.listen( config.port, function() {
        log.info("Servidor escuchando en puerto " + config.port);
        //opn("http" + "://localhost:" + config.port); Apertura automatica de servidor
    });
}

function serverStop(){
    // not suported
}

function serverExit(){
    log.info("Cerrando procesos del servidor...");
    process.exit();
}