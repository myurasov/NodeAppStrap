/**
 * Update revision, write to relevant files
 */

'use strict';

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');
var execSync = require('sync-exec');

gulp.task('update-revision', function () {

  // current revision
  var revision;

  try {
    // get rev from the git
    revision = execSync('git rev-parse HEAD').stdout.toString().trim();
  } catch (e) {
    // create rev from the current date
    revision = (new Date()).toISOString().replace(/\..+$/, '').replace(/\D/g, '');
  }

  fs.writeFileSync(config.paths.root + '/revision', revision); // global
});
