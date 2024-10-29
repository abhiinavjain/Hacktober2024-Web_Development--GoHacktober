const express = require('express');
const { getContributions } = require('../controllers/hacktoberfestController');
const router = express.Router();

router.get('/contributions/:username', getContributions);

module.exports = router;
