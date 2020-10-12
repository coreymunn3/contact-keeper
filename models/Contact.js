const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  // relationship between contacts and users
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  // standard contact attributes
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: 'personal',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contact', ContactSchema);
