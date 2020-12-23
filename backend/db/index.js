const mysql = require("mysql2/promise");

const host = 'localhost';
const user = 'root';
const password = '08388231462';
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