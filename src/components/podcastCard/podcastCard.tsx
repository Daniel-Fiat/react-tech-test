import React from "react";
import { useNavigate } from "react-router-dom";
import "./podcastCard.css";
import { Podcast } from "src/interfaces/podtast";

const PodcastCard: React.FC<Podcast> = (podcast) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/podcast/${podcast.id.attributes["im:id"]}`);
  };

  return (
    <div className="podcast-card-container" onClick={handleClick}>
      <img src={podcast["im:image"][2].label} alt="img-podcast" />
      <div className="podcast-card-info">
        <div className="podcast-card-title">{podcast["im:name"].label}</div>
        <div className="podcast-card-description">
          {podcast["im:artist"].label}
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
