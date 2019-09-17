const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClockoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Clockout = mongoose.model('clockout', ClockoutSchema);
