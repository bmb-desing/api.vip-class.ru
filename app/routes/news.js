const express = require('express');
const router = express.Router();

router.get('/');
router.get('/:news');

module.exports = router;