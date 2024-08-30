const express = require('express');
const { facebookAuth, facebookCallback, getUserInfo } = require('../controller/authController');

const router = express.Router();

router.get('/auth/facebook', facebookAuth);
router.get('/auth/facebook/callback', facebookCallback);
router.get('/user', getUserInfo);

module.exports = router;
