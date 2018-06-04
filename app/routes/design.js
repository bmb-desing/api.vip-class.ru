const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController');

router.get('/', designController.get)

module.exports = router
