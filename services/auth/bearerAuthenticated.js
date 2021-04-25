const passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
const {hashToken} = require('../../utils/tokens');

passport.use(
  new Strategy((token, done) => {
    let isToken;
    try {
      isToken = hashToken(token);
    } catch (err) {
      done(err, false);
    }

    if (!isToken) {
      return done(null, false);
    }
    return done(null, isToken);
  })
);
