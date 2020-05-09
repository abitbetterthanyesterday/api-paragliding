const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MiscSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sold: { type: Boolean, default: false },
  imagesURL: { type: [String], required: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('Misc', MiscSchema)
