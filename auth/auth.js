const LocalStrategy = require('passport-local').Strategy
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
      // return done(null, false, { message : 'User not found'});
      console.log('no user found')
    }
    // Validate password and make sure it matches with the corresponding hash stored in the database
    // If the passwords match, it returns a value of true.
    const validate = await user.isValidPassword(password)
    console.log(validate)

    if (!validate) {
      console.log('wrong password')
    }
    console.log('logged in')
  } catch (error) {
    console.log('error')
    console.log('An error has occured')
  }
})

module.exports = localStrategy
