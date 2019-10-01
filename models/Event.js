const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  clockin: {
    type: Date,
    default: Date.now,
  },
  clockout: {
    type: Date,
  },
  hazmatsuit: {
    type: Boolean,
  },
  k: {
    type: Number,
  },
  radiation: {
    type: Number,
  },
});

module.exports = Event = mongoose.model('event', EventSchema);
