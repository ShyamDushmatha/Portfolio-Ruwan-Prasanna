import React from "react";
import Card from "react-bootstrap/Card";
import "./ProjectCards.css";

function ProjectCards({ media, onClick }) {
  const isVideo = media.endsWith(".mp4");

  return (
    <Card className="project-card" onClick={onClick}>
      <div className="card-img-container">
        {isVideo ? (
          <video
            className="card-media"
            src={media}
            muted
            autoPlay
            loop
            preload="metadata"
            playsInline
          />
        ) : (
          <Card.Img variant="top" src={media} alt="card-img" className="card-media" />
        )}
      </div>
    </Card>
  );
}

export default ProjectCards;
