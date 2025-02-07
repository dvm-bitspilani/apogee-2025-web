import React, { useState, useEffect } from "react";
import styles from "./about.module.scss";
import heading from "../../src/assets/About/heading.svg";
import videoframeBackground from "../../src/assets/About/videoframeBackground.svg";
import back from "../../src/assets/About/back.png";

export default function About() {
  return (
    <>
      <div className={styles.aboutUs} style={{background: `url(${back})`}}>
        <div className={styles.heading}>
          <img src={heading} alt="heading" />
        </div>

        <div className={styles.mainBody}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoBackground}>
              <img src={videoframeBackground} alt="videoframeBackground"></img>
              <div className={styles.video}>
                <iframe
                  src="https://www.youtube.com/embed/TY7h1Wnqb_A"
                  title="YouTube video player"
                  // title={videoTitle}
                  preload="metadata"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>BITS Pilani, India is back with the 43rd edition of APOGEE (A Professions Oriented Gathering over Educational Experiences) the institute's annual technical extravaganza, from 28th March to 31st March 2025, this time as A Celestial Epiphany! APOGEE, a unique blend of technology, innovation, and inspiration, gathers the brightest minds worldwide. This premier technical conference features groundbreaking papers, innovative projects, and exhibitions showcasing mankind's best creations. With guest lectures sharing unheard stories, APOGEE challenges the intellect of the participants and piques the minds of the audience.</p>
          </div>
        </div>
      </div>
    </>
  );
}
