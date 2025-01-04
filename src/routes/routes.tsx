import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/home";
import PodcastDetail from "pages/PodcastDetail/PodcastDetail";
import EpisodeDetail from "pages/EpisodeDetail/EpisodeDetail";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<EpisodeDetail />}
      />
    </Routes>
  );
};

export default AppRoutes;
