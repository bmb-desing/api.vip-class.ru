const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAll);
router.get('/get-first', eventController.getForIndex);
router.get('/get-for-news', eventController.getTwoEvents);
router.get('/get-for-events/:event', eventController.getTwoEventsForEvent);
router.get('/:event', eventController.getForAlias);
module.exports = router;