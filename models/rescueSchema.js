const mongoose = require('mongoose')

const Schema = mongoose.Schema

const conditions = ['New', 'Used']

const RescueSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: Schema.Types.ObjectId, ref: 'Rescue_type', required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
  condition: { type: String, enum: conditions },
  category: 'rescue',
  country: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sold: { type: Boolean, default: false }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('Rescue', RescueSchema)
