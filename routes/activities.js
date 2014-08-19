var Activity = require('../models/activity.js');

var _manager = function(req, res) {
  res.render('manage/activityManager');
}

var _index = function(req, res) {
  console.log("Looking up all activities...");
  Activity.findAll(function(err, activities) {
    if (err) res.send(err);
    res.json(activities);
  });
}

/*var _new = function(req, res) {
  res.render('login');
}*/

var _create = function(req, res) {
  console.log("Activity create controller...");
  Activity.create({
    name: req.body.name,
    photoURL: req.body.photoURL
  }, function(err, activity) {
    if (err) res.send(err);
    res.redirect('/api/activities');
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
  Activity.removeById(req.params.id, function(err) {
    if (err) res.send(err);
    Activity.findAll(function(err, activities) {
      if (err) res.send(err);
      res.json(activities);
    });
  });
}

module.exports = {
  manager: _manager,
  index: _index,
  create: _create,
  destroy: _destroy
}