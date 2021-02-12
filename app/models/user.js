// Dependencies
// =============================================================

// Sequelize (capital) references the standard library

var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
  validate: {
      isEmail:{msg:"You have entered an invalid email address!"}
    },
  unique: { msg: 'Email address already in use!' }
  },
});

User.sync();

module.exports = User;
