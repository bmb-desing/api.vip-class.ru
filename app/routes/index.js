const express = require('express');
const router = express.Router();
const events = require('./events');
const objects = require('./object');
const news = require('./news');
/* GET home page. */

router.use('/events', events);
router.use('/objects', objects);
router.use('/news', news);
module.exports = router;
