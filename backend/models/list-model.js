const {DAO} = require ('./dao');

const dao = new DAO('listes');

dao.findAll = async () => {
    const rows =  await dao.query('SELECT * FROM vue_listes');
    return rows[0];
};

module.exports = dao;