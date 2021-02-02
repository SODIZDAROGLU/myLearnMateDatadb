// Dependencies
// =============================================================

var User = require("../models/user.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all data
  app.get("/api/all", function (req, res) {
    console.log(req.body)
    User.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/:users?", function (req, res) {
    if (req.params.users) {
      User.findOne({
        where: {
          email: req.params.users,
        },
      }).then(function (result) {
        console.log(result);
     
        return res.json(result);
      });
    } else {
      User.findAll().then(function (result) {
        console.log( result);
        return res.json(result);
      });
    }
  });

  // Add a data
  app.post("/api/new", function (req, res) {
  
    console.log("User Data:");
    console.log(req.body);
    User.create({
      email: req.body.email
    }).then(function (results) {
   
      res.json(results);
    });
  
  });
  // app.post("/api/new", async function (req, res) {
  //   console.log("User Data:");
  //   //console.log(req.body);
  //   try {
  //    const user=  await  User.create({ email: req.body.email })
     
  //      console.log('success', user.toJSON());
  //     } catch (err) {
  //       console.log(err.message);
  //     }   
        
  //   });




}; //export
