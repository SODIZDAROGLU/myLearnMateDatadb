// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const { ValidationError } = require("sequelize");
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    unique: true,
  
  },
});

// Syncs with DB
User.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = User;
