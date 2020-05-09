const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

UserSchema.pre('save', async function(next){
  //'this' refers to the current document about to be saved
  const user = this;
  //Hash the password with a salt round of 10, the higher the rounds the more secure, but the slower
  //your application becomes.
  const hash = await bcrypt.hash(this.password, 10);
  //Replace the plain text password with the hash and then store it
  this.password = hash;
  //Indicates we're done and moves on to the next middleware
  next();
});

//We'll use this later on to make sure that the user trying to log in has the correct credentials
UserSchema.methods.isValidPassword = async function(password){
  const user = this;
  //Hashes the password sent by the user for login and checks if the hashed password stored in the
  //database matches the one sent. Returns true if it does else false.
  const compare = await bcrypt.compare(password, user.password);
  return compare;
}

module.exports = mongoose.model('User', UserSchema)
