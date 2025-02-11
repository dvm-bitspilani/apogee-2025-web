import React from "react";
import styles from "./navbar.module.scss";
import regbtnLanding from "../../../src/assets/Landing/regbtnLanding.svg";
import text from "../../../src/assets/Landing/registerText.svg";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import yticon from "../../../src/assets/Landing/yticon.png";
import igicon from "../../../src/assets/Landing/igicon.png";
import linkedin from "../../../src/assets/Landing/linkedin.png";
import twitter from "../../../src/assets/Landing/xicon.png";

export default function Navbar() {
  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isLoading = useSelector(
    (state) => state.experienceAnimations.isLoading
  );
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );

  return (
    <>
      <div
        className={styles.socialsContainer}
        style={
          curStage === "landing" && isPointerEventsAllowed && !isLoading
            ? {
                opacity: 1,
                pointerEvents: "auto",
              }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <div className={styles.leftSide}>
          <a to="https://www.youtube.com/@APOGEEBITS" target="_blank">
            <img className={styles.youtube} src={yticon} />
          </a>
          <a to="https://www.instagram.com/bitsapogee/" target="_blank">
            <img className={styles.instagram} src={igicon} />
          </a>
        </div>
        <div className={styles.rightSide}>
          <a
            to="https://www.linkedin.com/company/apogee-bits-pilani/"
            target="_blank"
          >
            <img className={styles.linkedin} src={linkedin} />
          </a>
          <a to="https://x.com/BITSApogee" target="_blank">
            <img className={styles.twitter} src={twitter} />
          </a>
        </div>
      </div>
      <div
        className={styles.regbtnContainer}
        style={
          curStage === "landing" && isPointerEventsAllowed && !isLoading
            ? {
                transform: "translateY(0)",
                pointerEvents: "auto",
              }
            : { transform: "translateY(100%)", pointerEvents: "none" }
        }
      >
        <Link to="/registration">
          <div
            className={styles.regbtn}
            style={{ backgroundImage: `url(${regbtnLanding})` }}
          >
            <img src={text} alt="Register" />
          </div>
        </Link>
      </div>
    </>
  );
}
