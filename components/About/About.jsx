import React, { useState, useEffect } from "react";
import styles from "./about.module.scss";
import heading from "../../src/assets/About/heading.png";
import mobileHeading from "../../src/assets/About/mobileHeading.png";
import videoframeBackground from "../../src/assets/About/videoframeBackground.svg";
import left from "../../src/assets/About/left.png";
import right from "../../src/assets/About/right.png";
import mobileLeft from "../../src/assets/About/mobileLeft.svg";
import mobileRight from "../../src/assets/About/mobileRight.svg";
import Preloader from "../Registration/Preloader/Preloader";

import yticon from "../../src/assets/Landing/yticon.png";
import igicon from "../../src/assets/Landing/igicon.png";
import linkedin from "../../src/assets/Landing/linkedin.png";
import twitter from "../../src/assets/Landing/xicon.png";

export default function About() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const imageUrls = [
      left,
      right,
      videoframeBackground,
      heading,
      mobileHeading,
      mobileLeft,
      mobileRight,
      yticon,
      igicon,
      linkedin,
      twitter,
    ];
    let loadedCount = 0;
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setTimeout(() => {
            setImagesLoaded(true);
            setTimeout(() => {
              setShowPreloader(false);
            }, 0);
          }, 500);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  const videoLinks = [
    {
      id: 0,
      videoSrc: "https://www.youtube.com/embed/TY7h1Wnqb_A",
      videoTitle: "APOGEE '24 | A Celestial Epiphany",
    },
    {
      id: 1,
      videoSrc: "https://www.youtube.com/embed/vEhXhoynQLc?si=azysTYvJ9YcPaFPN",
      videoTitle: "APOGEE '23 | Official Aftermovie",
    },
    {
      id: 2,
      videoSrc:
        "https://www.youtube.com/embed/Mdhw5tI7HgE?si=Z2WNrhu5q8iyGREw&amp;controls=0",
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
      {showPreloader && <Preloader />}
      <div
        className={styles.aboutUs}
        style={{
          opacity: showPreloader ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
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
                <button on onClick={prev} className={styles.prev}>
                  <img src={left} alt="left" id={styles.laptop} />
                  <img src={mobileLeft} alt="mobileleft" id={styles.mobile} />
                </button>
                <button on onClick={next} className={styles.next}>
                  <img src={right} alt="right" id={styles.laptop} />
                  <img src={mobileRight} alt="mobileright" id={styles.mobile} />
                </button>
              </div>
              <div className={styles.video}>
                <iframe
                  src={videoLinks[index].videoSrc}
                  title="YouTube video player"
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
            <a href="https://www.youtube.com/@APOGEEBITS" target="_blank">
              <img
                className={styles.youtube}
                alt="YouTube Link icon"
                src={yticon}
                draggable={false}
              />
            </a>
            <a href="https://www.instagram.com/bitsapogee/" target="_blank">
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
            >
              <img
                className={styles.linkedin}
                alt="linkedin icon"
                src={linkedin}
                draggable={false}
              />
            </a>
            <a href="https://x.com/BITSApogee" target="_blank">
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
