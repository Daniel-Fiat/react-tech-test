import React from "react";
import "./PodcastDetail.css";
import { Container } from "react-bootstrap";

const PodcastDetailPage = (): JSX.Element => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1>PodcastDetailPage</h1>
      <a href="/">Go to home </a>
      <a href="/podcast/2/episode/1">Go to episode </a>
    </Container>
  );
};

export default PodcastDetailPage;
