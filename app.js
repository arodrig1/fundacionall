var express = require('express');
var app = express();

var errorHandlers = require('./config/error_handlers')(app);

var routes = require('./routes')(app);

module.exports = app;