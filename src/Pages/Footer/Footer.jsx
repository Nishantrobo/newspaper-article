import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footerContainer"]}>
        <div className={styles["footerContent"]}>
          <h3 className={styles["gym"]}>GYM</h3>
          <p>
            Welcome to our website! We are dedicated to give you real articles.
          </p>
          <div className={styles["social-media-icons"]}>
            <a
              href="https://www.facebook.com"
              target=""
              rel=""
            
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target=""
              rel=""
             
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target=""
              rel=""
           
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className={styles["footerContent1"]}>
          <h3 className={styles["healthy"]}>Healthy living</h3>
          <ul>
            <li>Regular news</li>
            <li>Proper articles</li>
            <li>Professional opinion</li>
            <li>Clean and curated articles</li>
          </ul>
        </div>
        <div className={styles["footerSomething"]}>
          <h3 className={styles["sty"]}>Services</h3>
          <ul>
            <li>many areas </li>
            <li>Personal opinion</li>
            <li>Clean and curated articles</li>
            <li>Clean and curated articles</li>
          </ul>
        </div>
        <div className={styles["footeProgram"]}>
          <h3 className={styles["last"]}>Programs</h3>
          <ul>
            <li>nsihant</li>
            <li>nishant</li>
            <li>nishant</li>
            <li>nishant</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;