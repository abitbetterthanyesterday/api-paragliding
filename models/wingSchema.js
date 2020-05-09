const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WingCondition = Object.freeze({
  new: 'New',
  used: 'Used'
})

const WingSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  weight_range_min: { type: Number, required: true },
  weight_range_max: { type: Number, required: true },
  repair: { type: Boolean },
  hours: { type: Number },
  description: { type: String, required: true },
  condition: { type: String, enum: Object.values(WingCondition) },
  country: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  certified: { type: Boolean, required: true },
  lifespan: { type: Number },
  sold: { type: Boolean, default: false },
  imagesURL: { type: [String] }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('Wing', WingSchema)
