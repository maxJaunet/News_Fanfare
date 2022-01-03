import Article from '../models/articles.js';

export const getArticles = async (req, res) => {
    try {
        const allArticles = await Article.find();
        res.status(200).json(allArticles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createArticle = async (req, res) => {
    const articles = req.body;
    const newArticle = new Article (articles);  
    try {
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};