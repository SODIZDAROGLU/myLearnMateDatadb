// Dependencies
// =============================================================

// Sequelize (capital) references the standard library

var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    unique: {
      args: true,
      msg: 'Email address already in use!'
    }
  
  },
});

// Syncs with DB
// User.sync({
//   force:true,
//   logging: console.log
// }).then(function(results){
//   console.log(results);
// }).catch(function(err){
//   console.log(err);
// })
User.sync();


module.exports = User;
