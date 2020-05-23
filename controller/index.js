var get = require("./select").get;
var getById = require("./select").getById;

// 构造一个查询函数 并赋予查询方法 get
function Table(table) {
  this.table = table; // 表名字
  // 查全集
  this.get = function(res) {
    get(table, res);
  };
  // 根据id查
  this.getById = function(res, id) {
    getById(table, res, id);
  };
  // 根据where 条件查
}

module.exports = Table;
