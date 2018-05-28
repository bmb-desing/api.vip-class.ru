const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');
router.get('/', projectsController.getFirst);
router.get('/add', projectsController.getNewImages);

module.exports = router;