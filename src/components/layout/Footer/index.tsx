import React from "react";
import Links from "../../Links";
import styles from "./footer.styles.module.css";
import Typography from "../../Typography";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <picture className={styles.logoContainer}>
        <img src="/logo.png" alt="company logo" />
      </picture>

      <Links className={styles.links} />

      <Typography className={styles.text}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </Typography>

      <Typography className={styles.copyright}>
        Copyright 2021. All Rights Reserved
      </Typography>

      <ul className={styles.icons}>
        <li>
          <img src="/icons/facebook.svg" alt="facebook link" />
        </li>
        <li>
          <img src="/icons/twitter.svg" alt="twitter link" />
        </li>
        <li>
          <img src="/icons/instagram.svg" alt="instagram link" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
