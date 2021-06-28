const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productType: {
    type: String,
    require: true,
  },
  productName: {
    type: String,
    require: true,
  },
  productDescription: {
    type: String,
    require: true,
  },
  created: { type: Date, default: Date.now },
})

// Choose what attributes will be returned with the product object
// ** These attributes should be matched in the front end model **
productSchema.methods.redacted = function () {
  const redacted = this.toObject()
  delete redacted.profile.password
  return redacted
}

// Ensure virtual fields are serialised.
productSchema.set('toJSON', {
  getters: true,
  virtuals: true,
})
productSchema.set('toObject', {
  getters: true,
  virtuals: true,
})

module.exports = mongoose.model('Product', productSchema)
