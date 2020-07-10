const articleDAO = require('./models/article-model');
const listDAO = require('./models/list-model');
const categoryDAO = require('./models/category-model');
const { addToList } = require('./models/article-model');

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

exports.getAllLists = async (req, res) => {
    const result = await listDAO.findAll();
    await res.status(200).json(result);
};

exports.deleteArticle = async (req, res) => {
    const articleId = req.params.articleId;
    const listId = req.body.listId || null;

    if(listId) {
        const result = await articleDAO.deleteOneByIdAndList(articleId, listId);
        await res.status(200).json(result);
    } else {
        const result = await articleDAO.deleteOneById(articleId);
        await res.status(200).json(result);
    }
};

exports.insertArticle = async (req, res) => {
    const article = {
        nom: req.body.name,
        id_categorie: req.body.categoryId,
    }
    const articleId = await articleDAO.insertOne(article);

    if(req.body.listId) {
        await articleDAO.addToList(articleId.insertId, req.body.listId);
        const result = await articleDAO.findAllByListId(req.body.listId);
        res.status(200).json(result);
    } else {
        const result = await articleDAO.findAll();
        res.status(200).json(result);
    }
};

exports.insertList = async (req, res) => {
    const list = await listDAO.createList(req.body.listName, req.body.articlesIdList);
    res.status(200).json(list);
}