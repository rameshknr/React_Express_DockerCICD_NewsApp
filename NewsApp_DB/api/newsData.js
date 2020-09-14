const newsModel = require('../model/newsData')
const {v4} = require('uuid')

const addNews = ((req,res)=>{
    let news = new newsModel();
    news.newsId = v4()
    news.newsheading = req.body.title
    news.newsImage = req.body.urlToImage
    news.newsdescription = req.body.description
    news.newsAuther = req.body.author
    news.newsSource = req.body.source.name
    news.newsContent = req.body.content

    news.save((err,doc)=>{
        if(err){
            res.status(500).send({error: err});
        }else{
            res.send({message : 'News inserted successfully...'})
        }
    })
})

const getNews = ((req,res)=>{
    newsModel.find((err,doc)=>{
        if(err){
            res.status(404).send({error: err});
        }else{
            res.send(doc)
        }
    });
})


module.exports ={
    addNews,
    getNews
}