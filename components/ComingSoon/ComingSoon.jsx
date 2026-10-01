import React, { useEffect } from "react";
import styles from "./comingsoon.module.scss";
import BackButton from "../Overlay/OverlayBackBtn/OverlayBackBtn";
import clouds from "../../src/assets/ComingSoon/background.webp";
import logo from "../../src/assets/ComingSoon/apogeelogo.webp";
import text from "../../src/assets/ComingSoon/text.webp";
import { useLocation } from "react-router";
import { Link } from "react-router";

const ComingSoon = () => {
  const { pathname } = useLocation();



  return (
    <div className={styles.Wrapper}>
      <Link to="/">
        <BackButton />
      </Link>
      <div className={styles.backgroundImage}>
        <img src={clouds} alt="background image" />
      </div>
      <div>
        <img src={logo} className={styles.logo} alt="apogee logo" />
      </div>
      <div className={styles.content}>
        <img src={text} className={styles.text} alt="coming soon text" />
      </div>
    </div>
  );
};

export default ComingSoon;
