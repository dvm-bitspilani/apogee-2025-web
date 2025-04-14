import styles from "./Verticals.module.scss";

import frame from "../../../src/assets/Devs/verticalBox/frame1.svg";
import github from "../../../src/assets/Devs/verticalBox/github.svg";
import linkedin from "../../../src/assets/Devs/verticalBox/linkedin.svg";
import instagram from "../../../src/assets/Devs/verticalBox/instagram.svg";

import Preloader from "../Preloader/Preloader";

import { forwardRef, useState, useEffect } from "react";

const Verticals = forwardRef(({ team }, ref) => {
  const [showPreloader, setShowPreloader] = useState(true);
  useEffect(() => {
    const imageUrls = [
      frame,
      github,
      linkedin,
      instagram,
      ...team.map((member) => member.image),
    ];
    let loadedCount = 0;
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setTimeout(() => {
            setShowPreloader(false);
          }, 0);
        }
      };
    });
  }, []);

  return (
    <div
      className={
        styles.container + " " + (team.length === 3 ? styles.three : "")
      }
      ref={ref}
    >
      {showPreloader && (
        <div className={styles.preloader}>
          <Preloader></Preloader>
        </div>
      )}

      {!showPreloader && (
        <div
          className={
            styles.subContainer +
            " " +
            (team.length === 3 ? styles.threesub : "")
          }
        >
          {team.map((member, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.framing}>
                <img src={frame} alt="frame" className={styles.frame} />
                <img
                  src={member.image}
                  alt="memberImage"
                  className={styles.person}
                />
              </div>
              <p>{member.name}</p>
              <div className={styles.socials}>
                <a
                  href={member.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default Verticals;
