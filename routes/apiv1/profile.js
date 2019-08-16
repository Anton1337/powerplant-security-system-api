const express = require('express');
const router = express.Router();

// @route  GET /api/v1/profile
// @desc   Get a profile
// @access Public
router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
