import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__description">
        <Link to="/">
          <h1 className="banner__title">Fashionista</h1>
        </Link>
        <label className="banner__text">sua hora é agora </label>
      </div>
    </section>
  );
}
