/**
 * Serve the server with live restarts
 **/

'use strict';

var gulp = require('gulp');
var config = require('../config');
var plugins = require('gulp-load-plugins')();

gulp.task('serve-server', ['build:development'], function () {
  // start node http server
  plugins.nodemon({
    script: 'src/server/app.js',
    watch: [
      config.paths.server
    ]
  });
});
