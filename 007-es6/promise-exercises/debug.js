var config = {
  httpServer: {
    host: 'localhost',
    port: 8000
  },
  es6Enable: true
};

var server = require('./server.js');
server(config);
