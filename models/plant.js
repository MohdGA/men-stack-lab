const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  location: String,
  website: String,
  isVerified: {
    type: Boolean,
    default: false
  }
},
{timestamps: true}
);

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;