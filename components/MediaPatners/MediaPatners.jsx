import React from "react";
import styles from "./mediapatners.module.scss";
import background from "../../src/assets/MediaPatners/background.png";
import heading from "../../src/assets/MediaPatners/heading.png";
import campusTimesPune from "../../src/assets/MediaPatners/PatnersLogo/campustimespune.png";
import siliconIndia from "../../src/assets/MediaPatners/PatnersLogo/siliconindia.png";
import youthInc from "../../src/assets/MediaPatners/PatnersLogo/youthinc.png";
import sachKahoon from "../../src/assets/MediaPatners/PatnersLogo/sachkahoon.png";
import zexPr from "../../src/assets/MediaPatners/PatnersLogo/zexpr.png";
import sachiShiksha from "../../src/assets/MediaPatners/PatnersLogo/sachishiksha.png";
import duExpress from "../../src/assets/MediaPatners/PatnersLogo/duexpress.png";
import techstory from "../../src/assets/MediaPatners/PatnersLogo/techstory.png";
import rashtriyaSahara from "../../src/assets/MediaPatners/PatnersLogo/rashtriyasahara.png";
import csmy from "../../src/assets/MediaPatners/PatnersLogo/csmy.png";
import atpStar from "../../src/assets/MediaPatners/PatnersLogo/atpstar.png";
import eclipseMedia from "../../src/assets/MediaPatners/PatnersLogo/eclipemedia.png";
import amarUjala from "../../src/assets/MediaPatners/PatnersLogo/amarujala.png";
import globalHues from "../../src/assets/MediaPatners/PatnersLogo/globalhues.png";
import fluxusIITIndore from "../../src/assets/MediaPatners/PatnersLogo/fluxusiitindore.png";
// import BackButton from "./BackButton/BackButton";

import { useRef, useEffect, useState } from "react";
import regWrapper from "../../src/assets/Register/regWrapper.png";
import wheel from "../../src/assets/Register/wheel.svg";
import regBackground from "../../src/assets/Register/regBackground.png";
import Preloader from "./Preloader/Preloader";

let mediaPatners = [
  {
    head: "Official Media Partner",
    img: campusTimesPune,
    name: "Campus Times Pune",
    link: "https://www.campustimespune.com/",
  },
  {
    head: "Official Media Partner",
    img: siliconIndia,
    name: "Silicon India",
    link: "https://www.siliconindia.com/",
  },
  {
    head: "Official Media Partner",
    img: youthInc,
    name: "Youth Inc",
    link: "https://youthincmag.com/",
  },
  {
    head: "Official Media Partner",
    img: sachKahoon,
    name: "Sach Kahoon",
    link: "https://epaper.sachkahoon.com/",
  },
  {
    head: "Official Media Partner",
    img: zexPr,
    name: "Zex PR",
    link: "https://zexprwire.com/",
  },
  {
    head: "Official Media Partner",
    img: sachiShiksha,
    name: "Sachi Shiksha",
    link: "https://sachishiksha.com/",
  },
  {
    head: "Official Media Partner",
    img: duExpress,
    name: "DU Express",
    link: "https://duexpress.in/",
  },
  {
    head: "Official Media Partner",
    img: techstory,
    name: "Techstory",
    link: "https://techstory.in/",
  },
  {
    head: "Official Media Partner",
    img: rashtriyaSahara,
    name: "Rashtriya Sahara",
    link: "https://rashtriyasahara.com/indexnext.php",
  },
  {
    head: "Official Media Partner",
    img: csmy,
    name: "Computer Science Meme Yojana",
    link: "https://www.instagram.com/computer_science_meme_yojana?igsh=eHAzaXJxcTk3dmkx",
  },
  {
    head: "Official Media Partner",
    img: atpStar,
    name: "ATP STAR",
    link: "https://atpstar.com/",
  },
  {
    head: "Official Coverage Partner",
    img: eclipseMedia,
    name: "Eclipse Media",
    link: "https://www.instagram.com/the.eclipse.media?igsh=MWkzanp2cmhxMjd3aA==",
  },
  {
    head: "Official Knowledge Partner",
    img: amarUjala,
    name: "Amar Ujala",
    link: "https://www.amarujala.com/",
  },
  {
    head: "Official Media Partner",
    img: globalHues,
    name: "The Global Hues",
    link: "https://theglobalhues.com/",
  },
  {
    head: "Official Media Partner",
    img: fluxusIITIndore,
    name: "Fluxus, IIT Indore",
    link: "https://www.instagram.com/fluxus_iit_indore/?hl=en",
  },
];

const MediaPatners = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const wheelRef = useRef(null);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    const imageUrls = [regWrapper, wheel, regBackground];
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
          }, 0);
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

  function handleScroll(inp) {
    // const maxScrollTopValue = mainContainerRef.current.scrollTopMax;
    const maxScrollTopValue =
      mainContainerRef.current.scrollHeight -
      mainContainerRef.current.clientHeight;
    // const percentage = (mainContainerRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage =
      (mainContainerRef.current.scrollTop / maxScrollTopValue) * 100;
    percentage > 100
      ? (wheelRef.current.style.top = "100%")
      : (wheelRef.current.style.top = `${percentage}%`);
    // console.log(percentage);
    // wheelRef.current.style.top = `${percentage}%`;
    // wheelElem.style.top = `${percentage}%`;
  }

  useEffect(() => {
    if (imagesLoaded) {
      mainContainerRef.current.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, [imagesLoaded]);

  const handlewheelMouseDown = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", handlewheelDragMove);
    document.addEventListener("touchmove", handlewheelDragMove);

    document.addEventListener("mouseup", handlewheelDragEnd);
    document.addEventListener("touchend", handlewheelDragEnd);
  };

  const handlewheelDragMove = (e) => {
    const mainWrapperElement = mainContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );

    const maxScrollTopValue =
      mainWrapperElement.scrollHeight - mainWrapperElement.clientHeight;

    const clientY = e.clientY || e.touches[0].clientY;

    const percentage =
      ((clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;

    mainWrapperElement.scrollTop = (percentage / 100) * maxScrollTopValue;
  };

  const handlewheelDragEnd = (e) => {
    document.removeEventListener("mousemove", handlewheelDragMove);
    document.removeEventListener("mouseup", handlewheelDragEnd);
    document.removeEventListener("touchmove", handlewheelDragMove);
    document.removeEventListener("touchend", handlewheelDragEnd);
  };

  const handleTrackSnap = (e) => {
    const mainWrapperElement = mainContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );
    const percentage =
      ((e.clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;
    const maxScrollTopValue =
      mainWrapperElement.scrollHeight - mainWrapperElement.clientHeight;

    mainWrapperElement.scrollTo({
      // Smooth scroll to the percentage of the max scroll value
      top: (percentage / 100) * maxScrollTopValue,
      behavior: "smooth",
    });
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className={styles.Wrapper}>
      {/* <div className={styles.buttonWrapper}>
        <BackButton />
      </div> */}
      {showPreloader && <Preloader />}

      <div className={styles.backgroundImage}>
        <img src={background} alt="background image" />
      </div>

      <div className={styles.scrollBarContainer} onClick={handleTrackSnap}>
        <div className={styles.scrollBar}></div>
        <img
          draggable={false}
          onMouseDown={handlewheelMouseDown}
          onTouchStart={handlewheelMouseDown}
          id="wheel"
          src={wheel}
          alt="wheel"
          ref={wheelRef}
        />
      </div>
      <div className={styles.heading}>
        <img src={heading} alt="heading" />
      </div>
      <div className={styles.mediaPatners} ref={mainContainerRef}>
        <div className={styles.otherMediaPatners}>
          {mediaPatners.map((mediaPatner, index) => (
            <a href={mediaPatner.link} target="_blank" rel="noreferrer">
              <div key={index} className={styles.mediaPatner}>
                {mediaPatner.head != "" && (
                  <div className={styles.head}>{mediaPatner.head}</div>
                )}
                <div className={styles.patnersImage}>
                  <img src={mediaPatner.img} alt={mediaPatner.name} />
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
