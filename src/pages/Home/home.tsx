import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

//Components import

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="home-container">
      <h1>{t("HOME.TITLE")}</h1>
      <a href="/podcast/1">Go to Podcast</a>
      <a href="/podcast/2/episode/1">Go to Episode</a>
      <div className="mt-3">
        <Button variant="primary" onClick={() => changeLanguage("en")}>
          English
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeLanguage("es")}
          className="ml-2"
        >
          Español
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
