const express = require('express');
const router = express.Router();

const Clockin = require('../../models/Clockin');
const Clockout = require('../../models/Clockout');

/*
 *
 * CLOCKIN STUFF
 *
 */

// @route  GET /api/v1/clocks/clockins
// @desc   Get all clock-ins
// @access Public
router.get('/clockins', async (req, res) => {
  try {
    const clockins = await Clockin.find().sort({ date: -1 });
    res.json(clockins);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

// @route  GET /api/v1/clocks/clockins/:id
// @desc   Get clock-in by ID
// @access Public
router.get('/clockins/:id', async (req, res) => {
  try {
    const clockin = await Clockin.findById(req.params.id);

    if (!clockin) return res.status(404).json({ msg: 'Clock-in not found' });

    res.json(clockin);
  } catch (err) {
    if (err.kind == 'ObjectId')
      return res.status(404).json({ msg: 'Clock-in not found' });

    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

// @route  POST /api/v1/clocks/clockins
// @desc   Post a new clock-in
// @access Public
router.post('/clockins', async (req, res) => {
  try {
    const newClockin = new Clockin({}); // no fields needed at the moment.
    const clockin = await newClockin.save();

    res.json(clockin);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

/*
 *
 * CLOCKOUT STUFF
 *
 */

// @route  GET /api/v1/clocks/clockouts
// @desc   Get all clock-outs
// @access Public
router.get('/clockouts', async (req, res) => {
  try {
    const clockouts = await Clockout.find().sort({ date: -1 });
    res.json(clockouts);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

// @route  GET /api/v1/clocks/clockouts/:id
// @desc   Get clock-out by ID
// @access Public
router.get('/clockouts/:id', async (req, res) => {
  try {
    const clockout = await Clockout.findById(req.params.id);

    if (!clockout) return res.status(404).json({ msg: 'Clock-out not found' });

    res.json(clockout);
  } catch (err) {
    if (err.kind == 'ObjectId')
      return res.status(404).json({ msg: 'Clock-out not found' });

    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

// @route  POST /api/v1/clocks/clockouts
// @desc   Post a new clock-out
// @access Public
router.post('/clockouts', async (req, res) => {
  try {
    const newClockout = new Clockout({}); // no fields needed at the moment.
    const clockout = await newClockout.save();

    res.json(clockout);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: 'Server Error',
    });
  }
});

module.exports = router;
