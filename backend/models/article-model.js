const {DAO} = require ('./dao');

const dao = new DAO('articles');

dao.findAll = async () => {
    const rows =  await dao.query('SELECT * FROM vue_articles WHERE id_liste IS NULL');
    return rows[0];
};

dao.findAllByListId = async (listId) => {
    const rows =  await dao.query('SELECT * FROM vue_articles WHERE id_liste =?',[listId]);
    return rows[0];
};

module.exports = dao;