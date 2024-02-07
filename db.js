const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: " 192.168.0.108",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
