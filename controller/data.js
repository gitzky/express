var mackData = function(n) {
  var res = null;
  switch (n) {
    case 0:
      res = {
        code: "0",
        data: null,

        msg: "请求成功"
      };

      break;
    case 1:
      res = {
        code: "500",
        msg: "请求参数错误"
      };

    default:
      break;
  }
  return res;
};

module.exports = mackData;
