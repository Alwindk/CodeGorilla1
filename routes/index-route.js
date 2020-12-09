const express = require('express');
const router = express.Router();
// This controller has all the functions for the front-end pages of the site
const indexController = require('../controllers/index-controller');

router.get('/', indexController.home);

module.exports = router;