const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // username: { type: String, required: true, unique: true },
  name: String,
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  refreshToken: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);