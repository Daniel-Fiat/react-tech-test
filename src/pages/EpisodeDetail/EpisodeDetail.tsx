import "./EpisodeDetail.css";
import { Container } from "react-bootstrap";
import React from "react";

const EpisodeDetailPage: React.FC = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1>EpisodeDetailPage</h1>
      <a href="/">Go to home </a>
      <a href="/podcast/2">Go to podcast </a>
    </Container>
  );
};

export default EpisodeDetailPage;
