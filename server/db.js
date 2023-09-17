const { Pool } = require("pg");
require("dotenv").config();


const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOSTNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: true,
});

module.exports = pool;
  
  

