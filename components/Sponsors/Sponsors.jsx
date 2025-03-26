import React from "react";
import styles from "./sponsors.module.scss";
// import BackButton from "./BackButton/BackButton";
import clouds from "../../src/assets/Sponsors/sponz.png";
import heading from "../../src/assets/Sponsors/heading.png";
import micronSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/micron.png";
import arcesiumSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/arcesium.jpg";
import qswSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/qsw.png";
import plumSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/plum.jpg";
import jioSaavnSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/jiosaavn.png";
// import languifySponsorImage from "../../src/assets/Sponsors/SponsorsLogo/languify.png";
import etashaSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/etasha.png";
// import grabOnSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/grabon.png";
import unicornIndiaSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/unicornindia.png";
import iicSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/iic.png";
import xtcySponsorImage from "../../src/assets/Sponsors/SponsorsLogo/xtcy.png";
// import icfdrSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/icfdr.png";
import iciciBankSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/icicibank.png";
import easeMyTripSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/easemytrip.png";
import yanaSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/yana.png";
import umeedSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/umeed.png";
// import unstopSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/unstop.png";
// import stockgroSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/stockgro.png";
import landtSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/landt.png";
import { img } from "framer-motion/client";

// const sponsors = {
//   title : {
//     head: "TitleSponsorHead",
//     img : sampleTitleSponsor,
//     name: "Sample Title Sponsor"
//   },
//   // associate1 : {
//   //   img : sampleTitleSponsor,
//   //   name: "Associate Sponsor 1"
//   // },
//   // associate2 : {
//   //   img : sampleTitleSponsor,
//   //   name: "Associate Sponsor 2"
//   // },
//   otherSponsers : [
//     {
//       head: "Sponsor1Head",
//       img : sampleTitleSponsor,
//       name:"Sponsor1"
//     },
//     {
//       head: "Sponsor2Head",
//       img : sampleTitleSponsor,
//       name:"Sponsor2"
//     },
//     {
//       head: "Sponsor3Head",
//       img : sampleTitleSponsor,
//       name:"Sponsor3"
//     },
//   ]
// }

const sponsors = {
  title: {
    head: "Official Title Sponsor",
    img: landtSponsorImage,
    name: "L&T"
  },
  otherSponsers: [
    {
      head: "Official Powered by Sponsor",
      img: micronSponsorImage,
      name: "Micron"
    },
    {
      head: "Official Technology Partner",
      img: arcesiumSponsorImage,
      name: "Arcesium"
    },
    {
      head: "Official Platinum Partner",
      img: qswSponsorImage,
      name: "QSW"
    },
    {
      head: "Official Bath and Body Care Partner",
      img: plumSponsorImage,
      name: "Plum"
    },
    {
      head: "Official Music Streaming Partner",
      img: jioSaavnSponsorImage,
      name: "JioSaavn"
    },
    // {
    //   head: "Official Assessment Partner",
    //   img: languifySponsorImage,
    //   name: "Languify"
    // },
    {
      head: "Campus Ambassador Partner",
      img: etashaSponsorImage,
      name: "Etasha"
    },
    // {
    //   head: "Official Savings Partner",
    //   img: grabOnSponsorImage,
    //   name: "GrabOn"
    // },
    {
      head: "",
      img: unicornIndiaSponsorImage,
      name: "Unicorn India"
    },
    {
      head: "",
      img: iicSponsorImage,
      name: "IIC"
    },
    {
      head: "",
      img: xtcySponsorImage,
      name: "XTCY"
    },
    // {
    //   head: "",
    //   img: icfdrSponsorImage,
    //   name: "ICFDR"
    // },
    {
      head: "",
      img: iciciBankSponsorImage,
      name: "ICICI Bank"
    },
    {
      head: "",
      img: easeMyTripSponsorImage,
      name: "EaseMyTrip"
    },
    {
      head: "",
      img: yanaSponsorImage,
      name: "Yana"
    },
    {
      head: "",
      img: umeedSponsorImage,
      name: "Umeed Social and Economic Development"
    },
    // {
    //   head: "",
    //   img: unstopSponsorImage,
    //   name: "Unstop"
    // },
    // {
    //   head: "",
    //   img: stockgroSponsorImage,
    //   name: "StockGro"
    // }
  ]
};

const Sponsors = () => {
  return (
    <div className={styles.Wrapper}>
      {/* <div className={styles.buttonWrapper}>
        <BackButton />
      </div> */}
      <div className={styles.backgroundImage}>
        <img src={clouds} alt="background image" />
      </div>
      <div className={styles.heading}>
        <img src={heading} alt="heading" /> 
      </div>
      <div className={styles.sponsors}>
        <div className={styles.titleSponsor}>
          <div className={styles.head}>
            {sponsors.title.head}
          </div>
          <div className={styles.titleSponsImage}>
            <img src={sponsors.title.img} alt={sponsors.title.name} />
          </div>
          <div className={`${styles.titleSponsName} ${styles.sponsName}`}>
            {sponsors.title.name}
          </div>
        </div>
        {/* <div className={styles.associateSponsorsDiv}>
          <div className={styles.associateSponsors}>
          <div className={styles.head}>
            Associate Sponsor
          </div>
            <div className={`${styles.associateSpons1Image} ${styles.associateSponsImage}`}>
              <img src={sponsors.associate1.img} alt={sponsors.associate1.name} />
            </div>
            <div className={`${styles.associateSpons1Name} ${styles.sponsName}`}>
              {sponsors.associate1.name}
            </div>
          </div>
            <div className={styles.associateSponsors}>
            <div className={styles.head}>
            Associate Sponsor
          </div>
              <div className={`${styles.associateSpons2Image} ${styles.associateSponsImage}`}>
                <img src={sponsors.associate2.img} alt={sponsors.associate2.name} />
              </div>
              <div className={`${styles.associateSpons2Name} ${styles.sponsName}`}>
                {sponsors.associate2.name}
              </div>
            </div>
        </div> */}
        <div className={styles.otherSponsors}>
          {sponsors.otherSponsers.map((sponsor, index) => (
            <div key={index} className={styles.otherSponsor}>
              {sponsor.head != "" && <div className={styles.head}>
                {sponsor.head}
              </div>}
              <div className={`${styles.otherSponsImage} ${styles.sponsImage}`}>
                <img src={sponsor.img} alt={sponsor.name} />
              </div>
              <div className={`${styles.otherSponsName} ${styles.sponsName}`}>
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
