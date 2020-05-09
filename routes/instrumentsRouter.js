const express = require('express')
const router = express.Router()

// ///// INSTRUMENTS ///// //

// ##PUBLIC## //
// GET Diplay all instruments ads
router.get('/instruments', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display instruments ad detail
router.get('/instruments/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ##PRIVATE## //

// POST Create instruments ad
router.post('/instruments', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update instruments ad
router.put('/instruments/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete instruments ad
router.delete('/instruments/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

module.exports = router
