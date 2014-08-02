module.exports = function(app) {
  
  var index = require('./routes/index');
  app.get('/', index.home);
  app.get('/about', index.about);
  app.get('/activities', index.activities);
  app.get('/signup', index.signup);
  app.get('/calendar', index.calendar);
  app.get('/sponsor', index.sponsor);
  app.get('/contact', index.contact);

}