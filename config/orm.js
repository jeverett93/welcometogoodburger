const connection = require("./connection.js");

let orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(table, valOfCol) {
      const queryString = "INSERT INTO ?? VALUES ??";
      console.log(queryString);
      connection.query(queryString, [table, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableOne, colToSearch, valOfColOne, colToSearchTwo, valOfColTwo) {
      const queryString =
        "UPDATE ??, SET ?? = ?? WHERE ?? = ??";
  
      connection.query(
        queryString,
        [tableOne, colToSearch, valOfColOne, colToSearchTwo, valOfColTwo],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;