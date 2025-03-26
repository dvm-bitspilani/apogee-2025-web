import React from "react";
import styles from "./sponsors.module.scss";
import background from "../../src/assets/Sponsors/sponz.png";
import heading from "../../src/assets/Sponsors/heading.png";
// import BackButton from "./BackButton/BackButton";

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
// import grabOnSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/grabon.png";
import languifySponsorImage from "../../src/assets/Sponsors/SponsorsLogo/languify.jpeg";
// import icfdrSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/icfdr.png";
import unstopSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/unstop.jpg";
import stockgroSponsorImage from "../../src/assets/Sponsors/SponsorsLogo/stockgro.png";
import { img } from "framer-motion/client";

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
    // {
    //   head: "Official Savings Partner",
    //   img: grabOnSponsorImage,
    //   name: "GrabOn",
    //   link: "https://www.grabon.in/",
    // },
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
      <div className={styles.sponsors}>
        <a href={sponsors.title.link} target="_blank" rel="noreferrer">
          <div className={styles.titleSponsor}>
            <div className={styles.head}>{sponsors.title.head}</div>
            <div className={styles.titleSponsImage}>
              <img src={sponsors.title.img} alt={sponsors.title.name} />
            </div>
            <div className={`${styles.titleSponsName} ${styles.sponsName}`}>
              {sponsors.title.name}
            </div>
          </div>
        </a>

        <div className={styles.otherSponsors}>
          {sponsors.otherSponsers.map((sponsor, index) => (
            <a href={sponsor.link} target="_blank" rel="noreferrer">
              <div key={index} className={styles.otherSponsor}>
                {sponsor.head != "" && (
                  <div className={styles.head}>{sponsor.head}</div>
                )}
                <div
                  className={`${styles.otherSponsImage} ${styles.sponsImage}`}
                >
                  <img src={sponsor.img} alt={sponsor.name} />
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
  );
};

export default Sponsors;
