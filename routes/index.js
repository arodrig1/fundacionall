var _home = function(req, res) {
  res.render('home', { title: 'Fundación Ana Lucía López' });
}

var _about = function(req, res) {
  res.render('about');
}

var _activities = function(req, res) {
  res.render('activities');
}

var _signup = function(req, res) {
  res.render('signup');
}

var _calendar = function(req, res) {
  res.render('calendar');
}

var _sponsor = function(req, res) {
  res.render('sponsor');
}

var _contact = function(req, res) {
  res.render('contact');
}

module.exports = {
  home: _home,
  about: _about,
  activities: _activities,
  signup: _signup,
  calendar: _calendar,
  sponsor: _sponsor,
  contact: _contact
}