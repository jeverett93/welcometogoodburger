// requiring dependencies 
const mysql = require("mysql");

// establishing and confirming mysql connection
const connection = mysql.createConnection( 
    {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.USER_PWD,
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exporting the connection for orm
module.exports = connection;