const dbMongo = require('mongoose')
const schema = dbMongo.Schema

const newsDataSchema = new schema({
    newsId: {
        type: String,
        required: true,
        unique:true
    },
    newsheading: String,
    newsImage: String,
    newsdescription: String,
    newsAuther: String,
    newsSource: String,
    newsContent: String
});

module.exports = dbMongo.model('newsData',newsDataSchema);