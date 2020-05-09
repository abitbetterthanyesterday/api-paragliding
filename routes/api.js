const express = require('express')
const router = express.Router()
var multer = require('multer')

const wingController = require('../controllers/wingsController')
const userController = require('../controllers/usersController')

// ///// WINGS ///// //
// GET Diplay all wings ads
router.get('/wings', wingController.wingsList)

// GET Display wing ad detail
router.get('/wings/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// POST Create wings ad
router.post('/wings',
  // function (req, res) { console.log('here!') })
  wingController.saveWings
)

// PUT Update wings ad
router.put('/wings/:id', function (req, res) {
  console.log(req.params)
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete wing ad
router.delete('/wings/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ///// HARNESS ///// //

// GET Diplay all harness ads
router.get('/harness', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display harness ad detail
router.get('/harness/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// POST Create harness ad
router.post('/harness', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update harness ad
router.put('/harness/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete harness ad
router.delete('/harness/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ///// RESCUES ///// //

// GET Diplay all rescues ads
router.get('/rescues', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display rescues ad detail
router.get('/rescues/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// POST Create rescues ad
router.post('/rescues', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update rescues ad
router.put('/rescues/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete rescues ad
router.delete('/rescues/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ///// RESCUES ///// //

// GET Diplay all rescues ads
router.get('/rescues', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display rescues ad detail
router.get('/rescues/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// POST Create rescues ad
router.post('/rescues', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update rescues ad
router.put('/rescues/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete rescues ad
router.delete('/rescues/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ///// INSTRUMENTS ///// //

// GET Diplay all instruments ads
router.get('/instruments', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display instruments ad detail
router.get('/instruments/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

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

// ///// MISCELLANEOUS ///// //

// GET Diplay all misc ads
router.get('/misc', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// GET Display misc ad detail
router.get('/misc/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// POST Create misc ad
router.post('/misc', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// PUT Update misc ad
router.put('/misc/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete misc ad
router.delete('/misc/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// ///// USERS ///// //

// GET Diplay all users
router.get('/users', userController.displayUsers)

// GET Display users detail
router.get('/users/:id', userController.displayUser)

// POST Create users
router.post('/users', userController.createUser)

// PUT Update users
router.put('/users/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete users
router.delete('/users/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

module.exports = router
