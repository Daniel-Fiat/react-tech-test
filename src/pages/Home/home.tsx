import React, { useEffect } from "react";
import "./home.css";
import { Col, Form, Row } from "react-bootstrap";
import PodCastService from "../../services/podcast/podcastService";
import PodcastCard from "../../components/podcastCard/podcastCard";
import { Podcast } from "src/interfaces/podtast";
import { t } from "i18next";

const HomePage: React.FC = () => {
  const [podcasts, setPodcasts] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredPodcasts, setFilteredPodcasts] = React.useState([]);

  const getPodCasts = async () => {
    const response = await PodCastService.getPodCasts();
    setPodcasts(response);
    setFilteredPodcasts(response);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    const regex = new RegExp(search, "i");
    const filteredResult = podcasts.filter((podcast: Podcast) => {
      return (
        regex.test(podcast["im:name"].label) ||
        regex.test(podcast["im:artist"].label)
      );
    });
    setFilteredPodcasts(filteredResult);
  };

  useEffect(() => {
    getPodCasts();
  }, []);

  return (
    <div className="home-container">
      <Row>
        <div className="d-flex justify-content-end align-items-center al py-3 mb-5">
          <div className="potcast-length mx-3">{filteredPodcasts.length}</div>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder={t("HOME.SEARCH_PLACEHOLDER")}
              value={search} // Vincula el valor al estado
              onChange={handleSearchChange} // Ejecuta la función al escribir
            />
          </Form.Group>
        </div>
      </Row>
      <Row>
        {filteredPodcasts.map((podcast, index) => (
          <Col key={index} xs={6} md={4} lg={3} className="mb-3">
            <PodcastCard {...podcast} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
