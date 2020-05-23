var express = require("express");
var router = express.Router();
var Table = require("../controller");

// 实例化user表
var user = new Table("user");

/* GET home page. */
router.get("/", function(req, res, next) {
  user.get(data => {
    res.render("index", { title: JSON.stringify(data) });
  }, 123);
});

module.exports = router;
