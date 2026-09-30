import React, { useState } from "react";
import styles from "./about.module.scss";
import heading from "../../src/assets/About/heading.webp";
import mobileHeading from "../../src/assets/About/mobileHeading.webp";
import videoframeBackground from "../../src/assets/About/videoframeBackground.svg";
import left from "../../src/assets/About/left.webp";
import right from "../../src/assets/About/right.webp";
import mobileLeft from "../../src/assets/About/mobileLeft.svg";
import mobileRight from "../../src/assets/About/mobileRight.svg";

import yticon from "../../src/assets/Landing/yticon.webp";
import igicon from "../../src/assets/Landing/igicon.webp";
import linkedin from "../../src/assets/Landing/linkedin.webp";
import twitter from "../../src/assets/Landing/xicon.webp";

export default function About() {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


  const videoLinks = [
    {
      id: 0,
      videoSrc: "https://www.youtube-nocookie.com/embed/TY7h1Wnqb_A",
      videoTitle: "APOGEE '24 | A Celestial Epiphany",
    },
    {
      id: 1,
      videoSrc: "https://www.youtube-nocookie.com/embed/vEhXhoynQLc?si=azysTYvJ9YcPaFPN",
      videoTitle: "APOGEE '23 | Official Aftermovie",
    },
    {
      id: 2,
      videoSrc:
        "https://www.youtube-nocookie.com/embed/Mdhw5tI7HgE?si=Z2WNrhu5q8iyGREw&amp;controls=0",
      videoTitle: "APOGEE '22 | The Encrypted Dimension",
    },
  ];

  const prev = () => {
    setIndex(
      (currentIndex) =>
        (currentIndex - 1 + videoLinks.length) % videoLinks.length
    );
    // const slide = document.querySelector('#video');
    // slide.classList.add(styles.left);
    // setTimeout(() => {
    //   slide.classList.remove(styles.left);
    // }, 1000);
  };

  const next = () => {
    setIndex((currentIndex) => (currentIndex + 1) % videoLinks.length);
    // const slide = document.querySelector('#video');
    // slide.classList.add(styles.right);
    // setTimeout(() => {
    //   slide.classList.remove(styles.right);
    // },1000);
  };
  return (
    <>
      <div className={styles.aboutUs}>
        <div className={styles.heading}>
          <img src={heading} alt="heading" id={styles.first} />
          <img src={mobileHeading} alt="mobileHeading" id={styles.second} />
        </div>

        <div className={styles.mainBody}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoBackground}>
              {!isLoaded && (
                <div
                  className={styles.skeleton}
                  style={{
                    opacity: isLoaded ? 0 : 1,
                    transition: "opacity 0.1s ease-in-out",
                    zIndex: "3",
                  }}
                ></div>
              )}
              <img
                id={styles.frame}
                src={videoframeBackground}
                alt="videoframeBackground"
                onLoad={() => setIsLoaded(true)}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.1s ease-in-out",
                  // zIndex: 2,
                }}
              />
              <div className={styles.buttonContainer}>
                <button onClick={prev} className={styles.prev}>
                  <img src={left} alt="left" id={styles.laptop} />
                  <img src={mobileLeft} alt="mobileleft" id={styles.mobile} />
                </button>
                <button onClick={next} className={styles.next}>
                  <img src={right} alt="right" id={styles.laptop} />
                  <img src={mobileRight} alt="mobileright" id={styles.mobile} />
                </button>
              </div>
              <div className={styles.video}>
                {play ? (
                  <iframe
                    src={videoLinks[index].videoSrc}
                    title={videoLinks[index].videoTitle} loading="lazy"
                    // title={videoTitle}
                    referrerPolicy="strict-origin-when-cross-origin"
                    preload="metadata"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    style={{ height: "100%", width: "100%" }}
                    id="video"
                  />
                ) : <button type="button" onClick={() => setPlay(true)} className="archive-video-play">Play historical aftermovie</button>}
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              BITS Pilani, India is back with the 43rd edition of APOGEE (A
              Professions Oriented Gathering over Educational Experiences), the
              institute's annual technical extravaganza, from 28th March to 31st
              March 2025, this time as Revved-Up Rhapsody! APOGEE, a unique
              blend of technology, innovation, and inspiration, gathers the
              brightest minds worldwide. This premier technical conference
              features groundbreaking papers, innovative projects, and
              exhibitions showcasing humanity's best creations. With guest
              lectures sharing unheard stories, APOGEE challenges the
              participants' intellect and piques the audience's minds.
            </p>
          </div>
          <div className={styles.socialIconsContainer}>
            <a href="https://www.youtube.com/@APOGEEBITS" target="_blank" rel="noopener noreferrer">
              <img
                className={styles.youtube}
                alt="YouTube Link icon"
                src={yticon}
                draggable={false}
              />
            </a>
            <a href="https://www.instagram.com/bitsapogee/" target="_blank" rel="noopener noreferrer">
              <img
                className={styles.instagram}
                alt="instagram link icon"
                src={igicon}
                draggable={false}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/apogee-bits-pilani/"
              target="_blank"
             rel="noopener noreferrer">
              <img
                className={styles.linkedin}
                alt="linkedin icon"
                src={linkedin}
                draggable={false}
              />
            </a>
            <a href="https://x.com/BITSApogee" target="_blank" rel="noopener noreferrer">
              <img
                className={styles.twitter}
                alt="twitter or X icon"
                src={twitter}
                draggable={false}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
