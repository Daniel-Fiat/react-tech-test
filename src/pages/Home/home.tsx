import React from "react";
import "./home.css";
import { Container } from "react-bootstrap";

const HomePage = (): JSX.Element => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1>HomePage</h1>
      <a href="/podcast/1">Go to Podcast </a>
      <a href="/podcast/2/episode/1">Go to episode </a>
    </Container>
  );
};

export default HomePage;
