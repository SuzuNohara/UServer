#!/usr/bin/env node

var fs = require("fs");
var https = require("https");
var http = require("http");
var config = require("./config.js");
var log = require("./logger.js");

var date = new Date();

log.info("Iniciando UServer...");

config.pathnode = process.argv[0];
config.pathserv = process.argv[1];
