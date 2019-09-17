const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClockinSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Clockin = mongoose.model('clockin', ClockinSchema);
