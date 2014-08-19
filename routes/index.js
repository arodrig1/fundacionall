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
  var language = req.cookies.language;
  if (language == 'es') res.render('calendar', { lang_file: 'es-MX.js' });
  else res.render('calendar', { lang_file: null });
}

var _sponsor = function(req, res) {
  res.render('sponsor');
}

var _contact = function(req, res) {
  res.render('contact');
}

var _language = function(req, res) {
  res.cookie('language', req.params.lang, { maxAge: 900000, httpOnly: true });
  res.redirect('back');
}

module.exports = {
  home: _home,
  about: _about,
  activities: _activities,
  signup: _signup,
  calendar: _calendar,
  sponsor: _sponsor,
  contact: _contact,
  language: _language
}