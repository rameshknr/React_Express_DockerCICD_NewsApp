const express = require('express')
const router = express.Router();
const api = require('../api');

router.get('/trending/:country',api.getTrendingBasedOnCountry)

router.get('/category/:category',api.getTrendingBasedOnCategory)

router.get('/search/:searchText',api.getNewsBasedOnsearchText)

module.exports = router;