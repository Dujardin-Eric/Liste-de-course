const articleDAO = require('./models/article-model');
const listDAO = require('./models/list-model');
const categoryDAO = require('./models/category-model');

exports.getAllArticles = async (req, res) => {
    const result = await articleDAO.findAll();
    await res.status(200).json(result);
};

exports.getAllArticlesByList = async (req, res) => {
    const listId = req.params.listId;
    const result = await articleDAO.findAllByListId(listId);
    await res.status(200).json(result);
};

exports.getAllCategories = async (req, res) => {
    const result = await categoryDAO.findAll();
    await res.status(200).json(result);
};