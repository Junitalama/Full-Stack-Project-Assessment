const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
const { Pool } = require("pg");
app.use(bodyParser.urlencoded({ extended: false }));
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.query("select * from videos")
    .then((result) => res.json(result.rows))
    .catch((err) => res.send(err));
});

app.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  db.query('select * from videos where id = $1', [id])
  .then(result => res.status(200).json(result.rows))
  .catch(err => res.send(err));
});