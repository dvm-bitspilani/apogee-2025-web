import styles from "./Verticals.module.scss";

import frame from "../../../src/assets/Devs/verticalBox/frame.svg";
import github from "../../../src/assets/Devs/verticalBox/github.svg";
import linkedin from "../../../src/assets/Devs/verticalBox/linkedin.svg";
import instagram from "../../../src/assets/Devs/verticalBox/instagram.svg";

import { forwardRef } from "react";

const Verticals = forwardRef(({ team }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.subContainer}>
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
              <a href={member.insta} target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
});

export default Verticals;
