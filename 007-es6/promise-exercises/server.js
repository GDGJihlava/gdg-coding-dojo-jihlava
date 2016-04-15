var express = require('express');
var pp = require('preprocess');
var path = require('path');
var courseware = require('courseware');

module.exports = function(config) {

  console.log("Js-exercises - www.angular.cz");

  var options = {
    ES6_ENABLE: config.es6Enable,
    TITLE_PREFIX: config.es6Enable ? 'ES6' : ''
  };

  var apiHandler = (req, res, next) => {
    var staticHandler = express.static('./api');
    req.url += '.json';

    setTimeout(function() {
      staticHandler(req, res, next)
    }, 500);  // delay simulation

  };

  function preprocessHtml(req, res, next) {

    var allowedUrl = /\d\d.*\/(.+\.html?)?(\?.*)?$/;
    if (!allowedUrl.test(req.url)) {
      next();
      return;
    }

    var oldWrite = res.write,
        oldEnd = res.end;

    var chunks = [];

    res.write = function(chunk) {
      chunks.push(new Buffer(chunk));
    };

    res.end = function(chunk) {
      if (chunk) {
        chunks.push(new Buffer(chunk));
      }

      var body = Buffer.concat(chunks);
      var processedBody = pp.preprocess(body, options, {type: 'html'});
      res.setHeader('Content-Length', Buffer.byteLength(processedBody));

      oldWrite.call(res, processedBody);
      oldEnd.call(res, processedBody);
    };

    next();
  }

  var app = express();
  app.get('/', function(req, res) {
    res.redirect(301, '/index.html');
  });

  app.use('/api', apiHandler);
  app.use(preprocessHtml);
  app.use(express.static('./'));

  var server = require('http').Server(app);

  var courseWareInstance = courseware.socketServer(server);
  server.listen(config.httpServer.port);

  console.log("Http-server running on http://localhost:%s", config.httpServer.port);

  return courseWareInstance;

};

