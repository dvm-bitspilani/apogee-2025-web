import React from "react";
import styles from "./mediapatners.module.scss";
import background from "../../src/assets/MediaPatners/background.png";
import heading from "../../src/assets/MediaPatners/heading.png";
// import BackButton from "./BackButton/BackButton";

const MediaPatners = () => {
  return (
    <div className={styles.Wrapper}>
      {/* <div className={styles.buttonWrapper}>
        <BackButton />
      </div> */}
      <div className={styles.backgroundImage}>
        <img src={background} alt="background image" />
      </div>
      <div className={styles.heading}>
        <img src={heading} alt="heading" />
      </div>
      <div className={styles.MediaPatners}>
        <div className={styles.otherMediaPatners}>
          {mediaPatners.map((mediaPatner, index) => (
            <a href={sponsor.link} target="_blank" rel="noreferrer">
              <div key={index} className={styles.MediaPatner}>
                {sponsor.head != "" && (
                  <div className={styles.head}>{mediaPatner.head}</div>
                )}
                <div className={styles.patnersImage}>
                  <img src={sponsor.img} alt={mediaPatner.name} />
                </div>
                <div className={styles.patnersName}>{mediaPatner.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPatners;
