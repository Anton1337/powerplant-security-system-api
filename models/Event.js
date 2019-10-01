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
  hazmatsuit: [
    {
      on: {
        type: Boolean,
      },
      date: {
        type: Date,
      },
    },
  ],
  k: [
    {
      value: {
        type: Number,
      },
      date: {
        type: Date,
      },
    },
  ],
  room: [
    {
      currentRoom: {
        type: Number,
      },
      date: {
        type: Date,
      },
    },
  ],
  radiation: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Event = mongoose.model('event', EventSchema);
