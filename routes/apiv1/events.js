const express = require('express');
const router = express.Router();

const Event = require('../../models/Event');

// @route  GET /api/v1/clocks/clockins
// @desc   Get all clock-ins
// @access Public
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(clockins);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

module.exports = router;
