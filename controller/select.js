// 获取请求数据库对象
var connection = require("./db");
var mackData = require("./data");

// 建立数据库连接
connection.connect();

// 初始化 get 方法
var get = function(table, cb) {
  var sql = "select * from " + table;
  console.log("sql", sql);
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var data = !!rows ? { list: rows } : { list: [] };
    var r = mackData(0);
    r.data = data;
    cb(r);
  });
};

var getById = function(table, cb, id) {
  var sql = "select * from " + table + " where id = " + id;
  console.log("sql", sql);
  if (id) {
    connection.query(sql, function(err, rows, fields) {
      if (err) throw err;
      var data = (!!rows && rows[0]) || null;
      var r = mackData(0);
      r.data = data;
      cb(r);
    });

    return;
  }
  cb(mackData(1));
};

module.exports = { get, getById };
