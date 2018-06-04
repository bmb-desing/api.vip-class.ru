const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/roomsController')
router.get('/', roomsController.getAll);
router.get('/:room', roomsController.getRoom);
module.exports = router;