const mongoose = require('mongoose')

const ProposalSchema = new mongoose.Schema({
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  proposedPrice: Number,
  proposedQuantity: Number,
  status: { type: String, default: 'pending' },
  history: [String],
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Proposal', ProposalSchema)
