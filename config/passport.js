module.exports = function(app) {
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var User = require('../models/user.js');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
  });

  passport.use('local-login', new LocalStrategy(
    function(username, password, done) {
      console.log("Passport local strategy");
      return User.validatePassword(username, password, done);
    }));

  /*passport.use('signup', new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
      User.findOne(username, done, function(err, user) {
        if (err) return done(err);
        if (user) return done(null, false, { message: "That username is already taken" });
        else {
          return User.create(username, password, done);
        }
      });
    }));*/

  app.use(passport.initialize());
  app.use(passport.session());

};