import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/home";
import PodcastPage from "pages/PodcastPage/PodcastPage";

const AppRoutes = () => {
  return (
    <div className="app-routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:id/*" element={<PodcastPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
