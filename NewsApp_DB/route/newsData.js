const express = require('express');
const router = express.Router();
const controller = require('../api/newsData');
const verifyToken = require('../middlewares/verifyToken')

router.post('/',verifyToken, controller.addNews);
router.get('/', controller.getNews);

module.exports = router;