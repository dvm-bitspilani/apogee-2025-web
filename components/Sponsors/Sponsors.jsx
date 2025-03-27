import React from "react";
import styles from "./sponsors.module.scss";
import background from "../../src/assets/Sponsors/sponz.png";
import heading from "../../src/assets/Sponsors/heading.png";
import BackButton from "./BackButton/BackButton";

import micronSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/micron.png";
import arcesiumSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/arcesium.jpg";
import qswSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/qsw.png";
import plumSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/plum.jpg";
import jioSaavnSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/jiosaavn.png";
import etashaSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/etasha.png";
import unicornIndiaSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/unicornindia.png";
import iicSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/iic.png";
import xtcySponsorImage from "../../src/assets/Sponsors/SponsorsLogo/xtcy.png";
import iciciBankSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/icicibank.png";
import easeMyTripSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/easemytrip.png";
import yanaSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/yana.png";
import umeedSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/umeed.png";
import landtSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/landt.png";
import grabOnSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/grabon.png";
import languifySponsorImage from "../../src/assets/Sponsors/SponsorsLogo/languify.jpeg";
// import icfdrSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/icfdr.png";
import unstopSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/unstop.jpg";
import stockgroSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/stockgro.png";
import { img } from "framer-motion/client";

import { useRef, useEffect, useState } from "react";

import regWrapper from "../../src/assets/Register/regWrapper.png";

import wheel from "../../src/assets/Register/wheel.svg";

import regBackground from "../../src/assets/Register/regBackground.png";
import Preloader from "./Preloader/Preloader";

const sponsors = {
  title: {
    head: "Official Title Sponsor",
    img: landtSponsorImage,
    name: "L&T",
    link: "https://www.larsentoubro.com/",
  },
  otherSponsers: [
    {
      head: "Official Powered by Sponsor",
      img: micronSponsorImage,
      name: "Micron",
      link: "https://www.micron.com/",
    },
    {
      head: "Official Technology Partner",
      img: arcesiumSponsorImage,
      name: "Arcesium",
      link: "https://www.arcesium.com/",
    },
    {
      head: "Official Platinum Partner",
      img: qswSponsorImage,
      name: "QSW",
      link: "https://quicksmartwash.com/",
    },
    {
      head: "Official Bath and Body Care Partner",
      img: plumSponsorImage,
      name: "Plum",
      link: "https://plumgoodness.com/",
    },
    {
      head: "Official Music Streaming Partner",
      img: jioSaavnSponsorImage,
      name: "JioSaavn",
      link: "https://www.jiosaavn.com/",
    },
    {
      head: "Official Assessment Partner",
      img: languifySponsorImage,
      name: "Languify",
      link: "https://www.languify.in/",
    },
    {
      head: "Campus Ambassador Partner",
      img: etashaSponsorImage,
      name: "Etasha",
      link: "https://www.etashasociety.org/",
    },
    {
      head: "Official Savings Partner",
      img: grabOnSponsorImage,
      name: "GrabOn",
      link: "https://www.grabon.in/",
    },
    {
      head: "",
      img: unicornIndiaSponsorImage,
      name: "Unicorn India",
      link: "https://www.unicornivc.com/",
    },
    {
      head: "",
      img: iicSponsorImage,
      name: "IIC",
      link: "https://iic.mic.gov.in/login",
    },
    {
      head: "",
      img: xtcySponsorImage,
      name: "XTCY",
      link: "https://drinkxtcy.com/",
    },
    // {
    //   head: "",
    //   img: icfdrSponsorImage,
    //   name: "ICFDR",
    //   link: "https://icfdr.org/",
    // },
    {
      head: "",
      img: iciciBankSponsorImage,
      name: "ICICI Bank",
      link: "https://www.icicibank.com/",
    },
    {
      head: "",
      img: easeMyTripSponsorImage,
      name: "EaseMyTrip",
      link: "https://www.easemytrip.com/flights.html?msclkid=4e959a8a43391623fe37fd68f1fdb553&utm_source=bing&utm_medium=cpc&utm_campaign=Bing_Search_AllAudience_%20Brand%20(EaseMyTrip.Com)&utm_term=easemytrip&utm_content=EaseMyTrip%20Exact",
    },
    {
      head: "",
      img: yanaSponsorImage,
      name: "Yana",
      link: "https://yana.travel/tabs/hosted-trips",
    },
    {
      head: "",
      img: umeedSponsorImage,
      name: "Umeed Social and Economic Development",
      link: "https://umeedfoundation.co.in/",
    },
    {
      head: "",
      img: unstopSponsorImage,
      name: "Unstop",
      link: "https://unstop.com/",
    },
    {
      head: "",
      img: stockgroSponsorImage,
      name: "StockGro",
      link: "https://www.stockgro.club/",
    },
  ],
};

const Sponsors = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const wheelRef = useRef(null);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    const imageUrls = [regWrapper, wheel, regBackground, background, heading, ...sponsors.otherSponsers.map(sponsor => sponsor.img), sponsors.title.img];
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
<<<<<<< HEAD
    <div className={styles.Wrapper}>
      <div className={styles.buttonWrapper}>
        <BackButton />
      </div>
=======
    <>
>>>>>>> 75c055ee17f017900adfa75f0754b92233fb5aec
      {showPreloader && <Preloader />}
      <div
        className={styles.Wrapper}
        style={{
          opacity: showPreloader ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
      <div className={styles.buttonWrapper}>
        <BackButton />
      </div>

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
        <img src={heading} alt="heading" draggable={false} />
      </div>
      <div className={styles.sponsors} ref={mainContainerRef}>
        <a
          href={sponsors.title.link}
          target="_blank"
          rel="noreferrer"
          draggable={false}
        >
          <div className={styles.titleSponsor}>
            <div className={styles.head}>{sponsors.title.head}</div>
            <div className={styles.titleSponsImage}>
              <img
                src={sponsors.title.img}
                alt={sponsors.title.name}
                draggable={false}
              />
            </div>
            <div className={`${styles.titleSponsName} ${styles.sponsName}`}>
              {sponsors.title.name}
            </div>
          </div>
        </a>

        <div className={styles.otherSponsors}>
          {sponsors.otherSponsers.map((sponsor, index) => (
            <a
              href={sponsor.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              draggable={false}
            >
              <div className={styles.otherSponsor}>
                <div
                  className={
                    sponsor.head
                      ? styles.head
                      : `${styles.head} ${styles.other}`
                  }
                >
                  {sponsor.head}
                </div>

                <div
                  className={`${styles.otherSponsImage} ${styles.sponsImage}`}
                >
                  <img src={sponsor.img} alt={sponsor.name} draggable={false} />
                </div>
                <div className={`${styles.otherSponsName} ${styles.sponsName}`}>
                  {sponsor.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      </div>
      </>
  );
};

export default Sponsors;
