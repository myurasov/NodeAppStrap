/**
 * Configuration
 */

'use strict';

module.exports = function (app) {
  // paths
  app.set('paths.root', __dirname + '/../../..');
  app.set('paths.server', app.get('paths.root') + '/src/server');

  // network settings
  app.set('port', 12345);
};
