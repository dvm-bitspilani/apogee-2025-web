import React from "react";
import styles from "./comingsoon.module.scss";
import BackButton from "./BackButton/BackButton";

const ComingSoon = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.buttonWrapper}>
        <BackButton />
      </div>
      <div className={styles.backgroundImage}></div>
      <div className={styles.content}>
        <div className={styles.text}>Coming Soon</div>
      </div>
    </div>
  );
};

export default ComingSoon;
