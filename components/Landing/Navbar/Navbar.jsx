import React from "react";
import styles from "./navbar.module.scss";
import regbtnLanding from "../../../src/assets/Landing/regbtnLanding.png";
import text from "../../../src/assets/Landing/registerText.svg";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import yticon from "../../../src/assets/Landing/yticon.png";
import igicon from "../../../src/assets/Landing/igicon.png";
import linkedin from "../../../src/assets/Landing/linkedin.png";
import twitter from "../../../src/assets/Landing/xicon.png";
import countdownBg from "../../../src/assets/Landing/countdownBg.png";
import Countdown from "../Countdown/Countdown";

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
          <a href="https://www.youtube.com/@APOGEEBITS" target="_blank">
            <img className={styles.youtube} src={yticon} draggable={false} />
          </a>
          <a href="https://www.instagram.com/bitsapogee/" target="_blank">
            <img className={styles.instagram} src={igicon} draggable={false} />
          </a>
        </div>
        <div className={styles.rightSide}>
          <a
            href="https://www.linkedin.com/company/apogee-bits-pilani/"
            target="_blank"
          >
            <img className={styles.linkedin} src={linkedin} draggable={false} />
          </a>
          <a href="https://x.com/BITSApogee" target="_blank">
            <img className={styles.twitter} src={twitter} draggable={false} />
          </a>
        </div>
      </div>
      <div
        className={styles.regbtnContainer}
        style={
          curStage === "landing" && isPointerEventsAllowed && !isLoading
            ? {
                transform: "translate(-50%,0)",
                pointerEvents: "auto",
              }
            : { transform: "translate(-50%,100%)", pointerEvents: "none" }
        }
      >
        <Link to="/registration">
          <img className={styles.regbtn} src={regbtnLanding}></img>
        </Link>
      </div>
      <div
        className={styles.countdownContainer}
        style={
          curStage === "landing" && isPointerEventsAllowed && !isLoading
            ? {
                opacity: 1,
                pointerEvents: "auto",
              }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <img src={countdownBg} className={styles.countdownBg} />
        <div className={styles.countdownText}>
          <Countdown />
        </div>
      </div>
    </>
  );
}
