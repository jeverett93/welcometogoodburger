// requiring express dependency
const express = require("express");

// establishing router
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// route to add new burgers
router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], (result) => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// route to update status of burger
router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// route to delete burger
router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  
  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;