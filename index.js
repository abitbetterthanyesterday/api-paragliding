'use strict'
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const APIRouter = require('./routes/api')
const cloudinary = require('cloudinary').v2

const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

const morgan = require('morgan')

//  Set up mongoose connection
const { DB_HOST, DB_PORT, DB_LOGIN, DB_PWD, DB_NAME } = process.env
mongoose.connect(`mongodb://${DB_LOGIN}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)
const db = mongoose.connection

app.use(morgan('tiny'))

// Error connection to DB
db.on('error', (err) => {
    console.log('DB not connected ', err)
})

// Success connection to DB.
db.once('open', () => {
    console.log('🎊 Hoora! You are connected to the database')
})

app.listen(3000, () => {
    console.log('🚀 Server running on port 3000')
})

// Set up cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

// test cloudinary
const test = false

if (test) {
  cloudinary.uploader.upload('./blasonBugey.jpg', function(error, result) { console.log(result, error) })
}

// CLOUDINARY_URL=cloudinary://CLOUDINARY_API_KEY:CLOUDINARY_SECRET_KEY@CLOUDINARY_CLOUD_NAME

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Set up authentification
const User = require('./models/userSchema')

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy({
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

    if (!validate){
      // return done(null, false, { message : 'Wrong Password'});
      console.log('wrong password')
    }
    // Send the user information to the next middleware
    // return done(null, user, { message : 'Logged in Successfully'});
    console.log('logged in')
  } catch (error) {
    console.log('error')
    console.log('An error has occured')
  }
}
))

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize()); app.use(passport.session());

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.send('helloworld')
  })

app.get('/login',
  function(req, res) {
    res.send('login')
  })

app.use('/', APIRouter)

// app.use(function (req, res, next) {
//   next(createError (404))
// })
