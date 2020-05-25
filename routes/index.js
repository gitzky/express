var router = require("express").Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "接口" });
});

module.exports = router;
