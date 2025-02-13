import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import styles from "./contact.module.scss";
import heading from "../../src/assets/contact.png";
import ContactCard from "./ContactCard/ContactCard";
import tarun from "../../src/assets/Contact/tarun.png";
import kashish from "../../src/assets/Contact/kashish.png";
import harnoor from "../../src/assets/Contact/harnoor.png";
import lakshya from "../../src/assets/Contact/lakshya.png";
import aryan from "../../src/assets/Contact/aryan.png";
import ahan from "../../src/assets/Contact/ahan.png";
import bhoomika from "../../src/assets/Contact/bhoomika.png";
import shubham from "../../src/assets/Contact/shubham.png";
import pratham from "../../src/assets/Contact/pratham.png";
import poster from "../../src/assets/contact-poster.png";
import Preloader from "../Registration/Preloader/Preloader";

const Contact = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const imageUrls = [
      tarun,
      kashish,
      harnoor,
      lakshya,
      aryan,
      ahan,
      bhoomika,
      shubham,
      pratham,
      poster,
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
  return (
    <>
      {showPreloader && <Preloader />}
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <img src={heading} alt="contact us heading" />
          <div className={styles.text}>contact us</div>
        </div>
        <div className={styles.container}>
          <ContactCard
            personImg={tarun}
            name="tarun s"
            dept="Website, App and Payments"
          />
          <ContactCard
            personImg={harnoor}
            name="HARNOOR SINGH"
            dept="Registrations AND 
Correspondence"
          />
          <ContactCard
            personImg={lakshya}
            name="LAKSHYA JAIN"
            dept="Logistics and 
Operations"
          />
          <ContactCard
            personImg={bhoomika}
            name="BHOOMIKA JAIN"
            dept="Online Collaborations 
and Publicity"
          />
          <ContactCard
            personImg={shubham}
            name="SHUBHAM SINGH"
            dept="Reception and 
Accommodation"
          />
          <ContactCard
            personImg={kashish}
            name="KASHISH AGRAWAL"
            dept="Guest Lectures and 
Paper Presentations"
          />
          <ContactCard
            personImg={pratham}
            name="pratham sonawane"
            dept="Sponsorships and 
Company Collaborations"
          />
          <ContactCard
            personImg={aryan}
            name="ARYAN KHORANA"
            dept="General Secretary, 
Students' Union"
          />
          <ContactCard
            personImg={ahan}
            name="AHAN BANSAL"
            dept="President, Students' Union"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
