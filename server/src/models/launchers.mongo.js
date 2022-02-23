const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
  //schema of 1 field
  flightNumber: {
    type: Number,
    required: true,
    // default: 100,
    // min: 100,
    // max: 999,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  //references planets, will check if the plant is a planet in planet collection which is diffcult
  // target: {
  //   type: mongoose.ObjectId,
  //   ref: 'Planet',
  // },
  target: {
    type: String,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
    default: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// connect launchesSchema with "launches" collection
module.exports = mongoose.model('Launch', launchesSchema);
