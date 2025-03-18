import { useSelector } from "react-redux";
import styles from "./menu.module.scss";

import logoBackground from "../../../src/assets/Landing/regbtnLanding.svg";
import hamLeft from "../../../src/assets/Landing/HamMenu/hamLeft.png";
import hamRight from "../../../src/assets/Landing/HamMenu/hamRight.png";
import hamMenu from "../../../src/assets/Landing/HamMenu/hamMenu.png";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );

  // useGSAP(
  //   ()=>{
  //     const timeline = gsap.timeline();

  //   }
  // )

  return (
    <>
      <div
        className={styles.logoContainer}
        style={{
          transform:
            curStage === "landing" && isPointerEventsAllowed
              ? "translateY(0) translateX(-50%)"
              : "translateY(-120%) translateX(-50%)",
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src={logoBackground}
          className={styles.bg}
          alt="background image for logo"
        />
      </div>

      <div
        className={styles.hamMenu}
        style={{
          visibility: isMenuOpen ? "visible" : "hidden",
        }}
      >
        <div className={styles.ham}>
          <img className={styles.main} src={hamMenu} alt="ham menu" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
          >
            <circle
              cx="15.43"
              cy="15.6448"
              r="14.8076"
              stroke="white"
              stroke-width="1.24488"
            />
          </svg> */}
        </div>
        <div className={styles.hamBackground}>
          <button
            className={styles.backBtn}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <img
              src="/images/backBtnLanding.png"
              alt="back button"
              draggable={false}
            />
          </button>
          <img
            className={styles.hamLeft}
            src={hamLeft}
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          />
          <img
            className={styles.hamRight}
            src={hamRight}
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
