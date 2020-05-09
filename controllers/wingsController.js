const Wing = require('../models/wingSchema')

// GET display all wings
exports.wingsList = function (req, res) {
  Wing
    .find()
    .sort([['name', 'ascending']])
    .populate('seller')
    .exec(function (err, listWing) {
      if (err) { console.log(err) }
      res.json(listWing)
    })
}

// POST Save wing
exports.saveWings = function (req, res) {
  const newWing = new Wing({ ...req.body })

  newWing.save((err) => {
    if (err) {
      console.log(err)
      res.send('error')
    } else {
      console.log('saved')
      res.send('saved')
    }
  })
}
