// requiring dependencies 
const mysql = require("mysql");

// establishing and confirming mysql connection
const connection = mysql.createConnection( 
  process.env.JAWSDB_URL ||
    {
    	host: process.env.HOST,
    	port: 3306,
    	user: process.env.USER,
    	password: process.env.USER_PWD,
    	database: process.env.DB
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