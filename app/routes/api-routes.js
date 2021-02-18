var User = require("../models/user.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all data
  // app.get("/api/all", function (req, res) {
  //   console.log(req.body);
  //   User.findAll({}).then(function (results) {
  //     res.json(results);
  //   });
  // });

  app.get("https://mylearnmatedatadb.herokuapp.com//api/:users?", function (req, res) {
    if (req.params.users) {
      User.findOne({
        where: {
          email: req.params.users,
        },
      }).then(function (result) {
        return res.json(result);
      });
    }
  });

  app.post("https://mylearnmatedatadb.herokuapp.com/api/new", async function (req, res) {
    try {
      const user1 = await User.findOne({ where: { email: req.body.email } });

      if (!user1) {
        const user = await User.create({ email: req.body.email });
        console.log(`SUCCESS!!...${req.body.email} saved`);

        return res.json(user);
      } else {
        console.log(`Gotcha!!!.....${req.body.email} exist`);

        res.send(user1);
      }
    } catch (err) {
      console.log(err.message);

      return res.json(err.message);
    }
  });
};
