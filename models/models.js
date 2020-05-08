const mongoose = require('mongoose')

const Schema = mongoose.Schema

const conditions = ['New', 'As New', 'Very good', 'Good', 'Average']

const WingSchema = new Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  hours: { type: Number },
  condition: { type: String, enum: conditions },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  localistation: { type: Schema.Types.ObjectId, ref: 'localistation', required: true },
  price: { type: Number, required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Wing', WingSchema)
