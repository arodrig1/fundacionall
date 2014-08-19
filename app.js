var express = require('express');

var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.set('port', process.env.PORT || 3000);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('./public'));
app.use(session({
  secret: process.env.SECUREKEY_CRIMSON_KEY || 'keyboard dog',
  resave: true,
  saveUninitialized: false
}));

require('./config/flash')(app);
require('./config/passport')(app);
require('./config/i18n')(app);
require('./config/mongoose');
require('./config/error_handlers')(app);

var routes = require('./routes')(app);

app.set('views', './views');
app.set('view engine', 'jade');

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;