// Dependencies
// =============================================================

// Sequelize (capital) references the standard library

var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,

    validate: {
      isEmail: true,
    },
  },
});

User.sync();

module.exports = User;
