const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('../models/userSchema')

const localStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    // Find the user associated with the email provided by the user
    const user = await User.findOne({ email })
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
})

module.exports = localStrategy

const JWTstrategy = require('passport-jwt').Strategy
// We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt

// This verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
  // secret we used to sign our JWT
  secretOrKey: 'top_secret',
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
