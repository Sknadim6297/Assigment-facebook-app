const express = require('express');
const { getUserPages, getPageInsights } = require('../controller/pageController');

const router = express.Router();

router.get('/pages', getUserPages);
router.get('/page/insights', getPageInsights);

module.exports = router;
