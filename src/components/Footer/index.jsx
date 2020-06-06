import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import "./styles.css";

export default function Footer() {
  return (
    <section className="footer">
      <div>
        <a href="https://www.linkedin.com/in/victorradael" target="_blank">
          <AiFillLinkedin size={24} color="orangered" />
        </a>
        <a
          href="https://github.com/victorradael/FinalProject-Fashionista"
          target="_blank"
        >
          <AiOutlineGithub size={24} color="orangered" />
        </a>
      </div>
      <h5 className="footer__text">
        victorradael® - 2020 - AceleraDev React Online
      </h5>
    </section>
  );
}
