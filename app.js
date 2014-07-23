var express = require('express');
var app = express();

var errorHandlers = require('./config/error_handlers')(app);

var routes = require('./routes')(app);

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});