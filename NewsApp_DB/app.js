const express = require('express')
const app = express();
const cors = require('cors')
const logger = require('morgan')
const db = require('mongoose')

const DB_URL = require('./config').appConfig.DB_URL;
const router = require('./route');
const newsData = require('./route/newsData');

 db.connect(DB_URL,{ useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database connected successfully....");
    }
});
app.use(logger('tiny'));
app.use(express.json());
app.use(cors());
app.use('/api/auth',router);
app.use('/api/v1/news',newsData);

module.exports = app;