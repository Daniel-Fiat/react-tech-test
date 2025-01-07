import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import EpisodeDetail from "./EpisodeDetail/EpisodeDetail";
import PodcastDetail from "./PodcastDetail/PodcastDetail";
import "./PodcastPage.css";
import { Col, Row } from "react-bootstrap";
import PodCastService from "../../services/podcast/podcastService";
import { t } from "i18next";

const PodcastPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [podcast, setPodcast] = useState(null);

  const getPodCast = async () => {
    try {
      const response = await PodCastService.getPodCastDetailById(id);
      setPodcast(response);
      console.log("Podcast details:", response);
    } catch (error) {
      console.error("Error fetching podcast details:", error);
    }
  };

  useEffect(() => {
    getPodCast();
  }, [id]);

  if (!podcast) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    navigate(`/podcast/${podcast.id.attributes["im:id"]}`);
  };
  return (
    <div className="podcast-page">
      <Row>
        <Col xs={12} lg={4}>
          <div className="podcast-container p-3 pl-5">
            <Row className="d-flex justify-content-center my-1 podcast-image">
              <img
                src={podcast["im:image"][2].label}
                alt="img-podcast"
                className="pointer p-3"
                onClick={handleClick}
              />
            </Row>
            <Row className="podcast-title-container p-1">
              <div className="podcast-title">{podcast.title.label}</div>
              <div className="podcast-description">
                {podcast["im:artist"].label}
              </div>
            </Row>
            <Row>
              <h5 className="podcast-summary-title">
                {t("PODCAST_PAGE.DESCRIPTION")}
              </h5>
              <p className="podcast-summary">{podcast.summary.label}</p>
            </Row>
          </div>
        </Col>
        <Col xs={12} lg={8}>
          <Routes>
            <Route
              path="episode/:episodeId"
              element={<EpisodeDetail podcastId={id} />}
            />
            <Route path="" element={<PodcastDetail podcastId={id} />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default PodcastPage;
