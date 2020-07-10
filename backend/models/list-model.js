const {DAO} = require ('./dao');
const articleDAO = require ('./article-model')

const dao = new DAO('listes');

dao.findAll = async () => {
    const rows =  await dao.query('SELECT * FROM vue_listes');
    return rows[0];
};

dao.createList = async (listName, articlesIdList) => {
    const newList = await dao.insertOne({ nom: listName });
    const listId = newList.insertId;
    console.log(listId);

    const articlesIdArray = articlesIdList.split(',')
    for (id of articlesIdArray) {
        await articleDAO.addToList(id, listId);
    }

    return await dao.findAll();

}

module.exports = dao;