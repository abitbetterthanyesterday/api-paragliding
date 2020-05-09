const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

// ///// USERS ///// //

// ##PUBLIC## //

// POST Create users
router.post('/', userController.createUser)

// ##PROTECTED## //

// GET Diplay all users
router.get('/', userController.displayUsers)

// GET Display users detail
router.get('/:id', userController.displayUser)

// PUT Update user
router.put('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

// DELETE Delete users
router.delete('/:id', function (req, res) {
  res.send(req.method + req.originalUrl + ' not implemented yet.')
})

module.exports = router
