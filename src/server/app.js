/**
 * LeanCI Server
 */

'use strict';

var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

// create app
var app = express();

// read current environment
app.set('env', fs.readFileSync(__dirname + '/../../environment').toString().trim());
process.env.NODE_ENV = app.get('env');

// read revision
app.set('rev', fs.readFileSync(__dirname + '/../../revision').toString().trim());

// configure app
require('./config/config')(app);
require('./config/config.' + app.get('env'))(app);

// middleware setup
app.use(morgan('dev')); // logging
app.use(cors()); // cross origin resource sharing
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routing
require('./routes')(app);

// listen
var server = app.listen(app.get('port'), function () {
  console.log(
    'Listening at http://%s:%s',
    server.address().address,
    server.address().port
  );
});
