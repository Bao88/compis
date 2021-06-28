const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  created: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  profile: {
    username: { type: String, default: '' },
    password: { type: String },
    fullName: { type: String, default: '' },
    email: { type: String },
  },
  orderHistory: [],  // Add a type
})

// Choose what attributes will be returned with the user object
// ** These attributes should be matched in the front end model **
userSchema.methods.redacted = function () {
  const redacted = this.toObject()
  delete redacted.profile.password
  return redacted
}

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
})
userSchema.set('toObject', {
  getters: true,
  virtuals: true,
})

module.exports = mongoose.model('User', userSchema)
