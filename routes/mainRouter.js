const express = require('express')
const router = express.Router()
const passport = require('passport')
require('dotenv').config()

const mainController = require('../controllers/mainController')

router.post('/login', mainController.login)

// Let's say the route below is very sensitive and we want only authorized users to have access

// Displays information tailored according to the logged in user
router.get('/profile', passport.authenticate('jwt', { session: false }), mainController.profile)

module.exports = router
