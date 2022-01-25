import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: String,
    date: String,
    author: String,
    content: String,
    imagePath: String,
    imageAlt: String,
    type: String
});

const Article = mongoose.model('Article', articleSchema);


export default Article;