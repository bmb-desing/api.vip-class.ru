const express = require('express');
const router = express.Router();
const constructionController = require('../controllers/constructionController');

router.get('/', constructionController.getFirst);
router.get('/objects', constructionController.getNewObjects);
router.get('/images', constructionController.getImagesForObject);
module.exports = router