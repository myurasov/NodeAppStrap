/**
 * / route
 */

'use strict';

var express = require('express');
var router = express.Router();

/**
 * GET /
 */
router.get('/', function (req, res, next) {
  var packageJson = require(req.app.get('paths.root') + '/package.json');
  res.send(packageJson.name + '/' + packageJson.version + '@' + req.app.get('rev'));
});

module.exports = router;
