const LocalStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
require('dotenv').config()
const User = require('../models/userSchema')

module.exports = function (passport) {
  // LOCAL STRATEGY => Login in
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      // Find the user associated with the email provided by the user
      const user = await User.findOne({ email }).select('+password')
      if (!user) {
        // If the user isn't found in the database, return a message
        done(new Error('Email address not found'))
      }
      // Validate password and make sure it matches with the corresponding hash stored in the database
      // If the passwords match, it returns a value of true.
      const validate = await user.isValidPassword(password)
      if (!validate) {
        done(new Error('Wrong password'))
      }
      return done(null, user, { message: 'Logged in Successfully' })
    } catch (error) {
      return done(error)
    }
  }))

  // JWT STRATEGY => API calls after logged in
  passport.use(new JWTstrategy({
    // secret we used to sign our JWT
    secretOrKey: process.env.JWT_STRING,
    // we expect the user to send the token as a query parameter with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('jwt')
  }, async (token, done) => {
    try {
      // Pass the user details to the next middleware
      return done(null, token.user)
    } catch (error) {
      done(error)
    }
  }))
}