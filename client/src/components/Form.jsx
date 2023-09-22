import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && url) {
      onAdd({ title, url });
      setTitle("");
      setUrl("");
    }
  };

  return (
    <form  className="form" onSubmit={handleSubmit}>
      <p className="add">Add your videos </p>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="url"
          placeholder="YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button type="submit">Add </button>
    </form>
  );
};

export default Form;
