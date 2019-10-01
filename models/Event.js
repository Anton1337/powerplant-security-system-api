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
  hazmat: [
    {
      isOn: {
        type: Boolean,
      },
      date: {
        type: Date,
        default: Date.now,
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
        default: Date.now,
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
        default: Date.now,
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
