const router = require('Express').Router();
const controller = require('./controllers');

router.get('/article', controller.getAllArticles);
router.get('/article-list/:listId([0-9]+)', controller.getAllArticlesByList);
router.delete('/article/:articleId([0-9]+)', controller.deleteArticle);
router.post('/article', controller.insertArticle);

router.get('/category', controller.getAllCategories);

router.get('/list', controller.getAllLists);
router.post('/list', controller.insertList);


module.exports = router;