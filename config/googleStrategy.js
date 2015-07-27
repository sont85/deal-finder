'use strict';
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport');
module.exports = function() {
  // passport.serializeUser(function(user, done) {
  //   done(null, user);
  // });
  // passport.deserializeUser(function(obj, done) {
  //   done(null, obj);
  // });
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        console.log(profile);
        var user = {};
        user.image = profile._json.image.url;
        user.displayName = profile.displayName;

        user.google = {};
        user.google.id = profile.id;
        user.google.token = accessToken;

        // To keep the example simple, the user's Google profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Google account with a user record in your database,
        // and return that user instead.
        return done(null, user);
      });
    }
  ));
};
