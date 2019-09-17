const express = require('express');
const router = express.Router();

// @route  GET /api/v1/test
// @desc   Make sure api works
// @access Public
router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
