/**
 * Cleanup build files
 **/

'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('cleanup', function () {
  return del.sync(config.paths.server_build);
});
