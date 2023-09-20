import React from "react";

const MainCard = ({ video, onVote, onDelete }) => {
  const videoId = video.url.split("v=")[1];

  return (
    <div className="video">
      <h2>{video.title}</h2>
      <iframe
        width="400"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Vote Score: {video.rating}</p>
      <div className="button-container">
        <button><i class ="fa fa-thumbs-up" onClick={() => onVote(video.id, "up")}></i></button>
        <button ><i class ="fa fa-thumbs-down" onClick={() => onVote(video.id, "down")}></i></button>
        <button onClick={() => onDelete(video.id)}>Delete</button>
      </div>
    </div>
  );
};

export default MainCard;
