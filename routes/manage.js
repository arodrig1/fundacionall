var _login = function(req, res) {
  res.render('login');
}

var _logout = function(req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = {
  login: _login,
  logout: _logout
}