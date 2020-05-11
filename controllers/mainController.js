const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')

// loggin

exports.login = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    try {
      if (err) {
        const error = new Error('An Error occurred')
        console.log(err)
        return next(error)
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error)
        const body = { _id: user._id, email: user.email }
        const token = jwt.sign({ user: body }, process.env.JWT_STRING)
        return res.json({ token })
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
}

// profile secure

exports.profile = function(req, res, next) {
  // We'll just send back the user details and the token
  User
    .findById(req.user._id)
    .sort([['name', 'ascending']])
    .exec(function (err, user) {
      if (err) { console.log(err) }
      res.json({
        user: user,
        token: req.query.secret_token
      })
    })
}
