import React from "react";
import styles from "./comingsoon.module.scss";
import BackButton from "./BackButton/BackButton";
import clouds from "../../src/assets/ComingSoon/background.png";
import logo from "../../src/assets/ComingSoon/apogeelogo.png";
import text from "../../src/assets/ComingSoon/text.png";

const ComingSoon = () => {
  return (
    <div className={styles.Wrapper}>
      {/* <div className={styles.buttonWrapper}>
        <BackButton />
      </div> */}
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
