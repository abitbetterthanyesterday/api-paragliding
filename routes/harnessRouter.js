const express = require('express')
const router = express.Router()

// ///// RESCUES ///// //

// ##PUBLIC## //

// GET Diplay all rescues ads
router.get('/', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display rescues ad detail
router.get('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ##PRIVATE## //

// POST Create rescues ad
router.post('/', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update rescues ad
router.put('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete rescues ad
router.delete('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

module.exports = router
