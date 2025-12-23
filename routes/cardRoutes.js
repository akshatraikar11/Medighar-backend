const express = require('express');
const router = express.Router();
const { getServiceCards, getConcerns, getCategories } = require('../controllers/cardController');

router.get('/services', getServiceCards);
router.get('/concerns', getConcerns);
router.get('/categories', getCategories);

module.exports = router;
