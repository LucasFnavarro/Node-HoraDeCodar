const mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

module.exports = pool;
