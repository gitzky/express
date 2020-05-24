var express = require("express");
var router = express.Router();
var Table = require("../controller");

// 实例化user表
var user = new Table("user");

/* GET api listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/selUserList", function(req, res, next) {
  user.get(data => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
