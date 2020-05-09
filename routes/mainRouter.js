const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const localStrategy = require('../auth/auth')

router.post('/login', async (req, res, next) => {
  passport.authenticate(localStrategy, async (err, user, info) => {
    console.log(err, user, info)
    try {
      console.log(info)
      if (err) {
        const error = new Error('An Error occurred')
        return next(error)
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error)
        // We don't want to store the sensitive information such as the
        // user password in the token so we pick only the email and id
        const body = { _id: user._id, email: user.email }
        // Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user: body }, 'top_secret')
        // Send back the token to the user
        return res.json({ token })
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

// Let's say the route below is very sensitive and we want only authorized users to have access

// Displays information tailored according to the logged in user
router.get('/profile', (req, res, next) => {
  // We'll just send back the user details and the token
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    token: req.query.secret_token
  })
})

module.exports = router
