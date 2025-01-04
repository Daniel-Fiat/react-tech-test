import React from "react";
import "./EpisodeDetail.css";
import { Container } from "react-bootstrap";

const EpisodeDetailPage = (): JSX.Element => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1>EpisodeDetailPage</h1>
      <a href="/">Go to home </a>
      <a href="/podcast/2">Go to podcast </a>
    </Container>
  );
};

export default EpisodeDetailPage;
