const express = require('express')
const router = express.Router()
const passport = require('passport')

const wingController = require('../controllers/wingsController')

// ///// WINGS ///// //

// ##PUBLIC## //

// GET Diplay all wings ads
router.get('/', wingController.wingsList)

// GET Display wing ad detail
router.get('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ##PROTECTED## //

// POST Create wings ad
router.post('/', passport.authenticate('jwt', { session: false }), wingController.saveWings)

// PUT Update wings ad
router.put('/:id', function (req, res) {
  console.log(req.params)
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete wing ad
router.delete('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

module.exports = router
