const express = require('express')
const router = express.Router()

// ///// MISCELLANEOUS ///// //

// ##PUBLIC## //

// GET Diplay all misc ads
router.get('/', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display misc ad detail
router.get('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ##PRIVATE## //

// POST Create misc ad
router.post('/', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update misc ad
router.put('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete misc ad
router.delete('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

module.exports = router
