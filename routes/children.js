var Child = require('../models/child.js');

var _manager = function(req, res) {
  res.render('manage/childManager');
}

var _index = function(req, res) {
  Child.findAll(function(err, children) {
    if (err) res.send(err);
    res.json(children);
  });
}

/*var _new = function(req, res) {
  res.render('login');
}*/

var _create = function(req, res) {
  Child.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    idNum: req.body.idNum,
    photoURL: req.body.photoURL
  }, function(err, child) {
    if (err) res.send(err);
    Child.findAll(function(err, children) {
      if (err) res.send(err);
      res.json(children);
    });
  });
}
/*
var _show = function(req, res) {
  res.render('login');
}

var _edit = function(req, res) {
  res.render('login');
}

var _update = function(req, res) {
  res.render('login');
}*/

var _destroy = function(req, res) {
  Child.removeById(req.params.id, function(err) {
    if (err) res.send(err);
    Child.findAll(function(err, children) {
      if (err) res.send(err);
      res.json(children);
    });
  });
}

module.exports = {
  manager: _manager,
  index: _index,
  create: _create,
  destroy: _destroy
}