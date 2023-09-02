import React, { useState } from "react";
import videosData from "../exampleresponse.json";
//import Card from "./Card";
import Form from "./Form";

function AllButtons() {
  const [videos, setVideos] = useState(videosData);

  const handleVote = (id, type) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) => {
        if (video.id === id) {
          return {
            ...video,
            rating: type === "up" ? video.rating + 1 : video.rating - 1,
          };
        }
        return video;
      })
    );
  };

  const handleDelete = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  const handleAdd = (newVideo) => {
    setVideos((prevVideos) => [
      ...prevVideos,
      { ...newVideo, id: Date.now(), rating: 0 },
    ]);
  };
  return (
    <div>
      <Form onAdd={handleAdd} />
    
    </div>
  );
}

export default AllButtons;
