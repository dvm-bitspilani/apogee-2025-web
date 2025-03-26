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
      <div className={styles.mediaPatners}>
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
