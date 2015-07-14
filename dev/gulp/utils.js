/**
 * Utils for Gulp
 */

'use strict';

var fs = require('fs');
var config = require('./config');

exports.getRev = function () {
  return fs.readFileSync(config.paths.root + '/revision').toString().trim();
};

exports.getEnv = function () {
  return fs.readFileSync(config.paths.root + '/environment').toString().trim();
};

exports.escapeShellArg = function (cmd) {
  return '\'' + cmd.replace(/\'/g, "'\\''") + '\'';
};
