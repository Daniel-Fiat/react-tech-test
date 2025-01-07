import React from "react";
import "./headaer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const HeaderComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="header-container">
      <Link to={{ pathname: "/" }} className="title">
        {t("HEADER.TITLE")}
      </Link>
    </Container>
  );
};

export default HeaderComponent;
