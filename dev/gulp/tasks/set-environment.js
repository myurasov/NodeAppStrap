/**
 * Set environment (and write it to relevant files)
 **/

'use strict';

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');

function setEnvironment(environment) {
  // save environment
  fs.writeFileSync(config.paths.root + '/environment', environment);

  // set NODE_ENV
  process.env.NODE_ENV = environment;
}

// set environment to 'development'
gulp.task('set-environment:development', function () {
  setEnvironment('development');
});

// set environment to 'production'
gulp.task('set-environment:production', function () {
  setEnvironment('production');
});
