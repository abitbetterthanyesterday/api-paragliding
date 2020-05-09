const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  avatar: { type: String },
  ads: {
    wings: { type: Schema.Types.ObjectId, ref: 'Wing' },
    harness: { type: Schema.Types.ObjectId, ref: 'Harness' },
    rescues: { type: Schema.Types.ObjectId, ref: 'Rescue' },
    instruments: { type: Schema.Types.ObjectId, ref: 'Instrument' },
    misc: { type: Schema.Types.ObjectId, ref: 'Misc' }
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('User', UserSchema)
