const express = require('express')
const app = express();
const cors = require('cors')
const logger = require('morgan')

const router = require('./route/route');
app.use(logger('tiny'));
app.use(express.json());
app.use(cors());
app.use('/',router);

module.exports = app;