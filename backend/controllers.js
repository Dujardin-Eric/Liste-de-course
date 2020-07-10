const articleDAO = require('./models/article-model');
const listeDAO = require('./models/list-model');
const categoryDAO = require('./models/category-model');

exports.getAllArticles = async (req, res) => {
    const result = await articleDAO.findAll();
    await res.status(200).json(result);
};