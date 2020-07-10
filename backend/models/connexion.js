// Importation
const mysql = require('mysql2/promise');

// configuration
exports.db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'courses'
});