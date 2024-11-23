const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  agentId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Store only the agent ID
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },  // Store only the user ID
  description: { type: String },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', propertySchema);
