const router = require('Express').Router();
const controller = require('./controllers');

router.get('/article', controller.getAllArticles);
router.get('/article-list/:listId([0-9]+)', controller.getAllArticlesByList);
router.get('/category', controller.getAllCategories);

module.exports = router;