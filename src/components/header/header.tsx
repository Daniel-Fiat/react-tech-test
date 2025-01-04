import React from "react";
import "./headaer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="header-container">
      <Link to={{ pathname: "/" }} className="title">
        {t("HEADER.TITLE")}
      </Link>
    </div>
  );
};

export default HeaderComponent;
