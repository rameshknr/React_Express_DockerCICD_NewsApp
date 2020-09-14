const fetch = require('node-fetch');

const getTrendingBasedOnCountry = ((req,res)=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=${req.params.country}&apikey=166d16dcc1a741b99692f315fa254960&page=1`)
        .then(res => res.json())
        .then(data => { 
             res.send(data);
    });
})

const getTrendingBasedOnCategory = ((req,res)=>{
    fetch(`https://newsapi.org/v2/top-headlines?category=${req.params.category}&apikey=166d16dcc1a741b99692f315fa254960&page=1`)
        .then(res => res.json())
        .then(data => { 
            res.send(data);
    });
})

const getNewsBasedOnsearchText = ((req,res)=>{
    fetch(`https://newsapi.org/v2/everything?q=${req.params.searchText}&apikey=166d16dcc1a741b99692f315fa254960&page=1`)
        .then(res => res.json())
        .then(data => { 
            res.send(data);
    });
})

module.exports = {
    getTrendingBasedOnCountry,
    getTrendingBasedOnCategory,
    getNewsBasedOnsearchText
}