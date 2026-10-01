import React from "react";
import styles from "./navbar.module.scss";
import regbtnLanding from "../../../src/assets/Landing/regbtnLanding.webp";
import { useRegistrationClosed } from "../../../src/ui/RegistrationClosed";
import { useSelector } from "react-redux";
import yticon from "../../../src/assets/Landing/yticon.webp";
import igicon from "../../../src/assets/Landing/igicon.webp";
import linkedin from "../../../src/assets/Landing/linkedin.webp";
import twitter from "../../../src/assets/Landing/xicon.webp";
import countdownBg from "../../../src/assets/Landing/countdownBg.webp";
import Countdown from "../Countdown/Countdown";
import Logo from "../Logo/Logo";

export default function Navbar({ alwaysAvailable = false }) {
  const openRegistration = useRegistrationClosed();
  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );

  return (
    <>
      <div
        className={styles.socialsContainer}
        style={
          alwaysAvailable || (curStage === "landing" && isPointerEventsAllowed)
            ? {
                opacity: 1,
                pointerEvents: "auto",
              }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <div className={styles.leftSide}>
          <a href="https://www.youtube.com/@APOGEEBITS" target="_blank" rel="noopener noreferrer">
            <img
              className={styles.youtube}
              alt="YouTube Link icon"
              src={yticon}
              draggable={false}
            />
          </a>
          <a href="https://www.instagram.com/bitsapogee/" target="_blank" rel="noopener noreferrer">
            <img
              className={styles.instagram}
              alt="instagram link icon"
              src={igicon}
              draggable={false}
            />
          </a>
        </div>
        <div className={styles.rightSide}>
          <a
            href="https://www.linkedin.com/company/apogee-bits-pilani/"
            target="_blank"
           rel="noopener noreferrer">
            <img
              className={styles.linkedin}
              alt="linkedin icon"
              src={linkedin}
              draggable={false}
            />
          </a>
          <a href="https://x.com/BITSApogee" target="_blank" rel="noopener noreferrer">
            <img
              className={styles.twitter}
              alt="twitter or X icon"
              src={twitter}
              draggable={false}
            />
          </a>
        </div>
      </div>
      <div
        className={styles.regbtnContainer}
        style={
          alwaysAvailable || (curStage === "landing" && isPointerEventsAllowed)
            ? {
                transform: "translate(-50%,0)",
                pointerEvents: "auto",
              }
            : { transform: "translate(-50%,100%)", pointerEvents: "none" }
        }
      >
        <button type="button" className="registration-trigger" onClick={openRegistration} aria-label="Register">
          <img
            className={styles.regbtn}
            alt="register button"
            src={regbtnLanding}
          ></img>
        </button>
      </div>
      <div
        className={styles.logoContainer}
        style={
          alwaysAvailable || (curStage === "landing" && isPointerEventsAllowed)
            ? {
                opacity: 1,
                pointerEvents: "auto",
              }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <Logo />
      </div>
      <div
        className={styles.countdownContainer}
        style={
          alwaysAvailable || (curStage === "landing" && isPointerEventsAllowed)
            ? {
                opacity: 1,
                pointerEvents: "auto",
              }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <img
          src={countdownBg}
          alt="countdown image"
          className={styles.countdownBg}
        />
        <div className={styles.countdownText}>
          <Countdown />
        </div>
      </div>
    </>
  );
}
