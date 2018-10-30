let config = {
  pathnode: '',
  pathserv: '',
  port: 666,
  cors: {
    allow: true,
    internal: true,
    external: true,
    requestMethods: ['GET', 'POST'/*, 'OPTIONS', 'PUT', 'PATCH', 'DELETE'*/],
    allowMethods: ['GET', 'POST'/*, 'OPTIONS', 'PUT', 'PATCH', 'DELETE'*/],
    headers: [ 'authorization', 'content-type']
  },
  http: true,
  https: false, // not supported
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
  lang: 'es',
  error: [
    {
      error: 403,
      page: 'errors/403.html'
    },
    {
      error: 404,
      page: 'errors/404.html'
    }
  ]
}

module.exports = config;
