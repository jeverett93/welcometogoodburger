const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection(
    process.env.JAWSDB_URL || 
    {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;