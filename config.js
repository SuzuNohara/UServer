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
  logs: {
    screen: true,
    files: true,
    fileroute: './logs/',
    synclogs: true, // Mantener en true recomendado
    ws: {
      active: true,
      logformat: 'folder', // enum [folder, appname] folder creara un forlder por cada aplicacion interna que solicite logs y appname solo los nombrará como LOG<appname>-<date>
      port: 777
    }
  },
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
