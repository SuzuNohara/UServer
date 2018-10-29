let config = {
  pathnode: '',
  pathserv: '',
  port: 666,
  cors: false,
  http: true,
  https: false,
  // file upload
  fileUpload: false,
  // logs
  screenlogs: true,
  logs: true,
  logsroute: './logs/',
  synclogs: true, // Mantener en true recomendado
  // apps
  appsroute: './apps/',
  apps: [],
  // cron
  cronroute: './cron/',
  cron: [],
  // ws
  wsroute: './ws/',
  ws: [],
  // lang
  lang: 'es'
}

module.exports = config;
