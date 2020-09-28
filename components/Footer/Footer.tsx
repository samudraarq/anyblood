import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <a
          href="https://www.linkedin.com/in/samudra-faris-arqam/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/samudraarq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/Samudra_Arq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          href="https://www.instagram.com/samudra_arq/?hl=en"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram />
        </a>
      </div>
      <span>Samudra@2020</span>
    </footer>
  );
};

export default Footer;
