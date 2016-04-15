var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var courseware = require('courseware');

var fs = require('fs');
var path = require('path');

var config = {
  httpServer: {
    host: 'localhost',
    port: 8000
  },
  es6Enable: false
};

var courseWareTestResultsSocket;

gulp.task('server', ['initialize-tests'], () => {
  var server = require('./server.js');
  courseWareTestResultsSocket = server(config);
});

var transpileES6 = (filePath, exerciseDir) => {

  exerciseDir = exerciseDir || filePath.split(path.sep)[0];

  var processErrorToFile = (error) => {
    var file = error.fileName.substr(0, error.fileName.length - 4) + '-transpiled.js';

    var content = '__processError(' + JSON.stringify(error) + ');';
    fs.writeFile(file, content);

    console.error(error.name, error.message);
    console.log(error.codeFrame);
  };

  return gulp.src(filePath)
      .pipe(babel({
        sourceMaps: 'inline',
        presets: ['es2015', 'react'],
        plugins: ['transform-es2015-modules-umd']
      })
          .on('error', processErrorToFile))
      .pipe(rename({
        suffix: "-transpiled",
        extname: ".js"
      }))
      .pipe(gulp.dest('./' + exerciseDir));
};

gulp.task('default', ['server'], function() {

  if (config.es6Enable) {
    gulp.watch(['[0-9][0-9]*/**/*.es6', '[0-9][0-9]*/**/*.jsx'], (event) => {
      var relativePath = path.relative(__dirname, event.path);
      console.log('File changed:', relativePath);

      transpileES6(relativePath);
    });
  }

  gulp.watch(['[0-9][0-9]*/**/*.html', '[0-9][0-9]*/**/*.js'], (event) => {
    var relativePath = path.relative(__dirname, event.path);
    courseWareTestResultsSocket.notify('reload', {file: relativePath});
    console.log('Livereload: ', relativePath);
  });
});

gulp.task('es6-init', function(done) {
  function getExercisesFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
          return fs.statSync(path.join(dir, file)).isDirectory();
        }).filter(function(file) {
          return /[0-9][0-9].*/.test(file);
        })
  }

  var partDone = function(file) {
    return function() {
      if (--remainingCount < 1) {
        done();
      }
    }
  };

  console.log("Js-exercises - ES6 initial transpilation...");

  var folders = getExercisesFolders('./');
  var remainingCount = folders.length;

  folders.map(function(file) {
    var exerciseDir = file.split(path.sep)[0];
    var src = [exerciseDir + '/*.es6', exerciseDir + '/*.jsx'];

    transpileES6(src, exerciseDir)
        .on('end', partDone(file));
  });

});

gulp.task('es6', ['es6-init'], function() {
  config.es6Enable = true;

  gulp.run('default');
});

gulp.task('initialize-tests', function(cb) {
  var currentKarmaServer = require("karma").Server;
  courseware.initializeTestResults(currentKarmaServer, cb);
});
