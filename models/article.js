const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    date: {
      type: Date  
    },
    url:{
        type: String
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;