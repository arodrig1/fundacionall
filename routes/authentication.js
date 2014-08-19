var _login = function(req, res) {
  res.render('login');
}

var _verifyCredentials =  function(req, res, next) {
  console.log("Authentication route...");
  var passport = require('passport');
  passport.authenticate('local-login',
                        { successRedirect: '/manage',
                          failureRedirect: '/login',
                          failureFlash: true })(req, res, next);
}

var _logout = function(req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = {
  login: _login,
  verifyCredentials: _verifyCredentials,
  logout: _logout
}