/**
 * Build
 **/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// build for the development environment
gulp.task('build:development', function (callback) {
  runSequence(
    'cleanup',
    'set-environment:development',
    'update-revision',
    callback
  );
});

// build for production environment
gulp.task('build:production', function (callback) {
  runSequence(
    'cleanup',
    'set-environment:production',
    'update-revision',
    callback
  );
});
