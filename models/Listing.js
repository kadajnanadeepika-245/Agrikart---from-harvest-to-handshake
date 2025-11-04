const mongoose = require('mongoose')

const ListingSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cropName: String,
  variety: String,
  images: [String],
  pricePerUnit: Number,
  quantity: Number,
  availableFrom: Date,
  status: { type: String, default: 'Available' },
  qualityTags: [String],
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Listing', ListingSchema)
