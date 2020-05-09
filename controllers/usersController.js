const User = require('../models/userSchema')

// GET display all users
exports.displayUsers = function (req, res) {
  User
    .find()
    .sort([['name', 'ascending']])
    .exec(function (err, list) {
      if (err) { console.log(err) }
      res.json(list)
    })
}

// Get display one user
exports.displayUser = function (req, res) {
  User
    .findById(req.params.id)
    .sort([['name', 'ascending']])
    .exec(function (err, list) {
      if (err) { console.log(err) }
      res.json(list)
    })
}

// POST Create user - NEEDS VALIDATING ECT.
exports.createUser = function (req, res) {
  const newUser = new User({ ...req.body })

  newUser.save((err) => {
    if (err) {
      console.log(err)
      res.send('error')
    } else {
      console.log('saved')
      res.send('saved')
    }
  })
}

exports.test = function (req,res) {
    User
    .findOne({ "email": req.body.email })
    .exec(function(err, user){
      if (err) console.log(err);
      else res.send(user);
    })}
