import React from "react";
import "./PodcastDetail.css";
import { t } from "i18next";
import PodCastService from "../../../services/podcast/podcastService";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface PodcastDetailProps {
  podcastId: string;
}

const PodcastDetail: React.FC<PodcastDetailProps> = ({ podcastId }) => {
  const [episodes, setEpisodes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const getPodcast = async () => {
    const response = await PodCastService.getPodCast(podcastId);
    console.log(response);
    setEpisodes(response.results);

    setLoading(false);
  };

  React.useEffect(() => {
    getPodcast();
  }, [podcastId]);

  const handleRowClick = (episode) => {
    navigate(`/podcast/${podcastId}/episode/${episode.trackId}`, {
      state: { episode },
    });
  };

  return loading && episodes.length ? (
    <div>Loading...</div>
  ) : (
    <div className="podcast-detail-container p-1 pl-3">
      <div className="podcast-episodes">
        <p className="title">
          {t("PODCAST_DATAIL.EPISODES")}
          {episodes.length}
        </p>
      </div>
      <div className="podcast-episodes-list">
        <Table striped>
          <thead>
            <tr>
              <th>{t("PODCAST_DATAIL.TITLE")}</th>
              <th>{t("PODCAST_DATAIL.DATE")}</th>
              <th>{t("PODCAST_DATAIL.DURATION")}</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(episode)}
                className="pointer"
              >
                <td>{episode.trackName}</td>
                <td>
                  {episode.releaseDate
                    ? new Date(episode.releaseDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  {episode.trackTimeMillis
                    ? new Date(episode.trackTimeMillis)
                        .toISOString()
                        .slice(11, 19)
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PodcastDetail;
