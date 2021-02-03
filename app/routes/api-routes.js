var User = require("../models/user.js");
//var Sequelize = require("sequelize");
// Routes
// =============================================================
module.exports = function (app) {
  //Get all data
  app.get("/api/all", function (req, res) {
    console.log(req.body);
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
        if (result != null) {
          console.log("Gotcha!!!.....Email exist", result.dataValues);
        }
        return res.json(result);
      });
    }
  });

  app.post("/api/new", async function (req, res) {
    console.log("User Data:");
    console.log(req.body);
    try {
      const user = await User.create({ email: req.body.email });
      console.log("success", user.toJSON());
    } catch (err) {
      console.log(err + " = " + req.body.email);

      return res.json(req.body.email);
    }
  });
};
