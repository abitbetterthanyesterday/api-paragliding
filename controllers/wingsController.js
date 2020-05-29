const Wing = require('../models/wingSchema')
const { check, validationResult } = require('express-validator');

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

// GET display a wing
exports.displayUser = function (req, res) {
  Wing
    .findById(req.params.id)
    .sort([['name', 'ascending']])
    .exec(function (err, list) {
      if (err) { console.log(err) }
      res.json(list)
    })
}

// Delete a wing

// POST Create a wing ad
exports.saveWings = [
  check('brand').isAlphanumeric().isLength({min: 1}),
  check('model').isAlphanumeric().isLength({min: 1}),
  check('type').isAlphanumeric().isLength({min: 1}),
  check('weight_range_min').isInt().isLength({min: 1}),
  check('weight_range_max').isInt().isLength({min: 1}),
  check('repair').isBoolean().isLength({min: 1}).optional(),
  check('hours').isInt().isLength({min: 1}).optional(),
  check('description').isAlphanumeric().isLength({min: 10}),
  check('condition').exists(),
  check('country').isISO31661Alpha2(),
  check('postcode').isPostalCode(),
  check('price').isInt().isLength({min:1}),
  check('seller').exists(),
  check('certified').isBoolean(),
  check('lifespan').isInt().optional(),
  check('sold').isBoolean(),
  check('imagesURL').optional(),
, (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {
    const newWing = new Wing({ ...req.body })
    newWing.save((err) => {
      if (err) {
        console.log(err)
        res.send('error: ')
      } else {
        console.log('saved')
        res.send('saved')
      }
    })
  }
}]
