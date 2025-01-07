import React from "react";
import { useLocation } from "react-router-dom";
import "./EpisodeDetail.css";
import { t } from "i18next";

const EpisodeDetail: React.FC = () => {
  const location = useLocation();
  const episode = location.state?.episode;

  if (!episode) {
    return <div>{t("PODCAST_DATAIL.NO_EPISODE_FOUND")}</div>;
  }

  // Procesar la URL del episodio
  console.log(episode.episodeUrl);

  return (
    <div className="podcast-episodes-player">
      <p className="title">{episode.trackName}</p>
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
      {episode.episodeUrl ? (
        <audio
          className="audio-player"
          controls
          aria-label="Podcast audio player"
        >
          <source src={episode.episodeUrl} type="audio/mp3" />
          <p>{t("PODCAST_DATAIL.AUDIO_NOT_AVAILABLE")}</p>
        </audio>
      ) : (
        <p>{t("PODCAST_DATAIL.AUDIO_NOT_AVAILABLE")}</p>
      )}
    </div>
  );
};

export default EpisodeDetail;
