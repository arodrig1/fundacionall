var express = require('express');

var app = express();

var errorHandlers = require('./config/error_handlers')(app);

var routes = require('./routes')(app);

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('./public'));

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});