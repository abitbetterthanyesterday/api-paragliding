const express = require('express')
const router = express.Router()
const passport = require('passport')

const mainController = require('../controllers/mainController')

router.post('/login', mainController.login)

router.get('/profile', passport.authenticate('jwt', { session: false }), mainController.profile)

module.exports = router
