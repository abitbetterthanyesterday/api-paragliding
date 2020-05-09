const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HarnessCondition = Object.freeze({
  new: 'new',
  used: 'used'
})

const HarnessType = Object.freeze({
  open: 'open',
  pod: 'pod',
  racing: 'racing',
  acro: 'acro',
  hike_n_fly: 'hike_n_fly',
  reversible: 'reversible'
})

const HarnessSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, enum: Object.values(HarnessType) },
  size: { type: String, required: true },
  repair: { type: Boolean },
  hours: { type: Number },
  description: { type: String, required: true },
  condition: { type: String, enum: Object.values(HarnessCondition) },
  country: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sold: { type: Boolean, default: false }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('Harness', HarnessSchema)
