const express = require('express');
const router = express.Router();
const events = require('./events');
const objects = require('./object');
const construction = require('./construction');
const news = require('./news');
const projects = require('./projects')
/* GET home page. */

router.use('/events', events);
router.use('/objects', objects);
router.use('/news', news);
router.use('/projects', projects)
router.use('/construction', construction);
module.exports = router;
