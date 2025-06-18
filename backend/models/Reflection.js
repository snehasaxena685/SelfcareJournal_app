const mongoose = require('mongoose');

const reflectionSchema = new mongoose.Schema({
  reflection: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reflection', reflectionSchema);
