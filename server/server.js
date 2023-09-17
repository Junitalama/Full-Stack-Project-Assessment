const dotenv =require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
const {Pool}= require("pg");
app.use(bodyParser.urlencoded({ extended: false }));
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

app.use(bodyParser.json());




app.get("/", (req, res) => {
  db
    .query("select * from videos")
    .then((result) => res.json(result.rows))
    .catch((err) => res.send(err));
});

// app.get("/videos/data", async (req, res) => {
//   try {
//     const videos = await pool.query("select * from videos");
//     res.status(200).json(videos.rows);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error.message);
//   }
// });

// GET "/"
// app.get("/", (req, res) => {
//   res.json(videos);
// });

// app.post("/", (req, res) => {
//   const newId = videos.length + 1;
//   const video = {
//     id: newId,
//     title: req.body.title,
//     url: req.body.url,
//     rating:0,
//   };
//   if (req.body.title && req.body.url) {
//     videos.push(video);
//     res.status(200).send(video);
//   } else
//     res.status(400).json({
//       result: "failure",
//       message: "Video could not be saved",
//     });
// });

// app.get("/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const filteredVideos = videos.filter((video) => video.id === id);
//   if (filteredVideos.length > 0) {
//     res.status(200).json(filteredVideos);
//   } else {
//     res.status(404).json({
//       result: "failure",
//       message: "Video could not be found",
//     });
//   }
// });

// app.delete("/:id", function (req, res) {
//   let id = Number(req.params.id);
//   let deleteIndex = videos.findIndex((video) => video.id === id);
//   if (deleteIndex >= 0) {
//     videos.splice(deleteIndex, 1);
//     res.status(200).json({});
//   } else {
//     res.status(404).json({
//       result: "failure",
//       message: "Video could not be deleted",
//     });
//   }
// });

// app.put("/:id", function (req, res) {
//   let id = Number(req.params.id);
//   let videoIndex = videos.findIndex((video) => video.id === id);
//   if (videoIndex >= 0) {
//     videos[videoIndex].rating = Number(req.body.rating);
//     res.status(200).json({});
//   } else {
//     res.status(404).json({
//       result: "failure",
//       message: "Video could not be updated",
//     });
//   }
// });
