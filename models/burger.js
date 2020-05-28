// Importing ORM queries to support logic
const orm = require("../config/orm.js");

let burger = {
  // logic to select/see all burgers
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  // logic to insert a burger
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  // logic to update an existing burger
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  // logic to delete burger
  delete: (condition, cb) => {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  }
};

// exporting model
module.exports = burger; 