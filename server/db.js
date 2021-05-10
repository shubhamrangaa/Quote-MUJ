const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "shubhama",
  host: "localhost",
  port: "5432",
  database: "blogtrial",
});

module.exports = pool;
