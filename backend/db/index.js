const mysql = require("mysql2/promise");

const host = 'localhost';
const user = 'root';
const password = 'root';
const db = 'ecommerce';



const getConnection = () => {
    return mysql.createConnection({
        host,
        user,
        database: db,
        password
    });
}

module.exports = getConnection;