var fs = require("fs");
var router = require("express").Router();

//读取文件目录
fs.readdir("routes/modules", function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(function (file) {
    var routerModules = require("./modules/" + file);
    routerModules && routerModules(router);
  });
});

module.exports = router;
