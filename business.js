const mongoose = require('mongoose');
const businessSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  location: String,
  phoneNumber: String,
  website: String,
  isVerfied: {
    type: Boolean,
    default: false
  }
},
{timestamps: true}
);

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;