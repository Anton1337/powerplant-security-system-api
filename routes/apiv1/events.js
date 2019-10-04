const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Event = require('../../models/Event');

// @route  GET /api/v1/event
// @desc   Get all events
// @access Public
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

// @route  GET /api/v1/event/:id
// @desc   Get event by ID
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ msg: 'Event not found' });

    res.json(event);
  } catch (err) {
    if (err.kind == 'ObjectId')
      return res.status(404).json({ msg: 'Event not found' });

    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

// @route  POST /api/v1/event/start
// @desc   Start event on clockin.
// @access Public
router.post('/start', async (req, res) => {
  try {
    const newEvent = new Event({
      //hazmat: [{ isOn }],
      //k: [{ value }],
      //room: [{ currentRoom }],
    });

    const event = await newEvent.save();

    res.json(event);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

// @route  POST /api/v1/event/hazmat
// @desc   Post new hazmat change.
// @access Public
router.post(
  '/hazmat',
  [
    check('isOn', 'IsOn is required')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { isOn } = req.body;
      const event = await Event.findOne().sort('-date');

      if (!event) return res.status(404).json({ msg: 'Event not found' });

      if (event.hazmat.length <= 0) {
        event.hazmat.unshift({ isOn });
      } else {
        if (event.hazmat[0].isOn !== isOn) {
          event.hazmat.unshift({ isOn });
        }
      }

      await event.save();

      res.json(event);
    } catch (err) {
      if (err.kind == 'ObjectId')
        return res.status(404).json({ msg: 'Event not found' });

      console.error(err.message);
      return res.status(500).json({
        msg: 'Server Error',
      });
    }
  },
);

// @route  POST /api/v1/event/k
// @desc   Post new k change.
// @access Public
router.post(
  '/k',
  [
    check('value', 'Value is required')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { value } = req.body;
      const event = await Event.findOne().sort('-date');

      if (!event) return res.status(404).json({ msg: 'Event not found' });

      if (event.k.length <= 0) {
        event.k.unshift({ value });
      } else {
        // If the value actually has changed.
        if (event.k[0].value !== value) {
          event.k.unshift({ value });
        }
      }

      await event.save();

      res.json(event);
    } catch (err) {
      if (err.kind == 'ObjectId')
        return res.status(404).json({ msg: 'Event not found' });

      console.error(err.message);
      return res.status(500).json({
        msg: 'Server Error',
      });
    }
  },
);

// @route  POST /api/v1/event/room
// @desc   Post new room change.
// @access Public
router.post(
  '/room',
  [
    check('currentRoom', 'CurrentRoom is required')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { currentRoom } = req.body;
      const event = await Event.findOne().sort('-date');

      if (!event) return res.status(404).json({ msg: 'Event not found' });

      if (event.room.length <= 0) {
        event.room.unshift({ currentRoom });
      } else {
        if (event.room[0].currentRoom !== currentRoom) {
          event.room.unshift({ currentRoom });
        }
      }

      await event.save();

      res.json(event);
    } catch (err) {
      if (err.kind == 'ObjectId')
        return res.status(404).json({ msg: 'Event not found' });

      console.error(err.message);
      return res.status(500).json({
        msg: 'Server Error',
        kind: err.kind,
        err,
      });
    }
  },
);

// @route  POST /api/v1/event/end
// @desc   End event with a clockout.
// @access Public
router.post(
  '/end',
  [
    check('radiation', 'Radiation is required')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { radiation } = req.body;
      const event = await Event.findOne().sort('-date');

      if (!event) return res.status(404).json({ msg: 'Event not found' });

      event.radiation = radiation;
      event.clockout = new Date().toISOString();

      await event.save();

      res.json(event);
    } catch (err) {
      if (err.kind == 'ObjectId')
        return res.status(404).json({ msg: 'Event not found' });

      console.error(err.message);
      return res.status(500).json({
        msg: 'Server Error',
      });
    }
  },
);

module.exports = router;
