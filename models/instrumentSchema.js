const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InstrumentConditon = Object.freeze({
  new: 'new',
  used: 'used'
})

const InstrumentCategory = Object.freeze({
  vario: 'vario',
  GPS: 'gps',
  radio: 'radio',
  safety: 'safety'
})

const HarnessSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  condition: { type: String, enum: InstrumentConditon },
  category: { type: String, enum: InstrumentCategory },
  country: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sold: { type: Boolean, default: false }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('Harness', HarnessSchema)
