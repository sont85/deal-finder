'use strict';

var passport = require('passport');
require('./googleStrategy')();
require('./twitterStrategy')();
require('./FacebookStrategy')();

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

};
