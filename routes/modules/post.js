var Table = require("../../controller");
// 实例化user表
var posts = new Table("posts");
function postRouter(router) {
  router.post("/selPostList", function (req, res, next) {
    posts.get((data) => {
      console.log("req", req.body);
      res.json(data);
    });
  });

  router.post("/selPostById", function (req, res, next) {
    const id = req.body.id;
    posts.getById((data) => {
      console.log("req", req.body);
      res.json(data);
    }, id);
  });
}

module.exports = postRouter;
