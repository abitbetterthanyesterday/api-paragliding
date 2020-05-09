const express = require('express')
const router = express.Router()

// ///// HARNESS ///// //

// ##PUBLIC## //

// GET Diplay all harness ads
router.get('/', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display harness ad detail
router.get('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ##PRIVATE## //

// POST Create harness ad
router.post('/', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update harness ad
router.put('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete harness ad
router.delete('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

module.exports = router
