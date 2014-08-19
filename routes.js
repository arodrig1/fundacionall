module.exports = function(app) {

  var index = require('./routes/index');
  app.get('/', index.home);
  app.get('/about', index.about);
  app.get('/activities', index.activities);
  app.get('/signup', index.signup);
  app.get('/calendar', index.calendar);
  app.get('/sponsor', index.sponsor);
  app.get('/contact', index.contact);
  app.get('/language/:lang', index.language);

  var passport = require('passport');
  var authentication = require('./routes/authentication');
  app.get('/login', authentication.login);
  app.post('/login', authentication.verifyCredentials);
  app.get('/logout', authentication.logout);

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
  }

  //app.all('/manage/*', ensureAuthenticated);

  app.get('/manage', function(req, res) {
    res.redirect('/manage/activities');
  });

/*
  var users = require('./routes/users');
  app.get('/manage/users', users.index);
  app.get('/manage/users/new', users.new);
  app.post('/manage/users', users.create);
*/

  var activities = require('./routes/activities');
  app.get('/manage/activities', activities.manager);
  app.get('/api/activities', activities.index);
  //app.get('/manage/activities/new', activities.new);
  app.post('/api/activities', activities.create);
  //app.get('/manage/activities/:id', activities.show);
  //app.get('/manage/activities/:id/edit', activities.edit);
  //app.put('/manage/activities/:id', activities.update);
  app.delete('/api/activities/:id', activities.destroy);
/*
  subactivities

  series

  var events = require('./routes/events');


  var children = require('./routes/children');

  GET /photos photos#index  display a list of all photos
GET /photos/new photos#new  return an HTML form for creating a new photo
POST  /photos photos#create create a new photo
GET /photos/:id photos#show display a specific photo
GET /photos/:id/edit  photos#edit return an HTML form for editing a photo
PATCH/PUT /photos/:id photos#update update a specific photo
DELETE  /photos/:id photos#destroy  delete a specific photo
*/
}