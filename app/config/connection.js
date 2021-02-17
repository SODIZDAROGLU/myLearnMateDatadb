// Dependencies
var Sequelize = require("sequelize");


// var sequelize = new Sequelize("datadb", "root", "a12345678", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

var sequelize = new Sequelize("datadb", "root", "aca53adaa", {
  host: "ca53adaa@us-cdbr-east-03.cleardb.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;

