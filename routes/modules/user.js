var Table = require("../../controller");
// 实例化user表
var user = new Table("user");
function userRouter(router) {
  router.post("/selUserList", function (req, res, next) {
    user.get((data) => {
      console.log("req", req.body);
      res.json(data);
    });
  });

  router.post("/selUserById", function (req, res, next) {
    const id = req.body.id;
    user.getById((data) => {
      console.log("req", req.body);
      res.json(data);
    }, id);
  });
}

module.exports = userRouter;
