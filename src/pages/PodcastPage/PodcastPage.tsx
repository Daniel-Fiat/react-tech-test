import React from "react";
import { Routes, Route } from "react-router-dom";
import EpisodeDetail from "./EpisodeDetail/EpisodeDetail";
import PodcastDetail from "./PodcastDetail/PodcastDetail";
import "./PodcastPage.css";

const PodcastPage = () => {
  return (
    <div className="podcast-page">
      <h1>PodcastPage</h1>
      <a href="/">Go to Home</a>
      <a href="/podcast/1">Go to Podcast</a>
      <a href="/podcast/2/episode/1">Go to Episode</a>
      <Routes>
        <Route path="episode/:episodeId" element={<EpisodeDetail />} />
        <Route path="" element={<PodcastDetail />} />
      </Routes>
    </div>
  );
};

export default PodcastPage;
