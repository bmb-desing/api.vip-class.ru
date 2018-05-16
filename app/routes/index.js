const express = require('express');
const router = express.Router();
const events = require('./events');
const objects = require('./object');
const construction = require('./construction');
const news = require('./news');
/* GET home page. */

router.use('/events', events);
router.use('/objects', objects);
router.use('/news', news);
router.use('/construction', construction);
module.exports = router;
