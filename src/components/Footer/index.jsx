import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import "./styles.css";

export default function Footer() {
  return (
    <section className="footer">
      <div>
        <a href="https://www.linkedin.com/in/victorradael" target="_blank">
          <AiFillLinkedin size={24} color="orangered" />
        </a>
        <a
          href="https://github.com/victorradael/Fashionista_AceleraDevReact"
          target="_blank"
        >
          <AiOutlineGithub size={24} color="orangered" />
        </a>
        <a href="https://www.instagram.com/victorradael/" target="_blank">
          <AiFillInstagram size={24} color="orangered" />
        </a>
        <a href="https://twitter.com/VictorRadael" target="_blank">
          <AiOutlineTwitter size={24} color="orangered" />
        </a>
      </div>
      <h5 className="footer__text">
        victorradael® - 2020 - AceleraDev React Online
      </h5>
    </section>
  );
}
