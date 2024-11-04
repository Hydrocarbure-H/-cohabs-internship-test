const express = require('express');
const { getResponse } = require('./controller');

const router = express.Router();

// New message received
router.post('/new', getResponse);

module.exports = router;
