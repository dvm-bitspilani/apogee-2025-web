import { useSelector } from "react-redux";
import styles from "./menu.module.scss";
import logoBackground from "../../../src/assets/Landing/regbtnLanding.svg";
import hamLeft from "../../../src/assets/Landing/HamMenu/hamLeft.png";
import hamRight from "../../../src/assets/Landing/HamMenu/hamRight.png";
import hamMenu from "../../../src/assets/Landing/HamMenu/hamMenu.png";
import firstGear from "../../../src/assets/Landing/HamMenu/firstGear.svg";
import secondArc from "../../../src/assets/Landing/HamMenu/secondArc.svg";
import wedge from "../../../src/assets/Landing/HamMenu/wedge.svg";
import thirdArc from "../../../src/assets/Landing/HamMenu/thirdArc.svg";
import firstArrow from "../../../src/assets/Landing/HamMenu/firstArrow.svg";
import secondArrow from "../../../src/assets/Landing/HamMenu/secondArrow.svg";
import thirdArrow from "../../../src/assets/Landing/HamMenu/thirdArrow.svg";
import thirdCircle from "../../../src/assets/Landing/HamMenu/thirdCircle.svg";
import fourthCircle from "../../../src/assets/Landing/HamMenu/fourthCircle.svg";
import fifthCircle from "../../../src/assets/Landing/HamMenu/fifthCircle.svg";
import sixCircle from "../../../src/assets/Landing/HamMenu/sixCircle.svg";
import secondGear from "../../../src/assets/Landing/HamMenu/secondGear.svg";
import thirdGear from "../../../src/assets/Landing/HamMenu/thirdGear.svg";
import gearCircle from "../../../src/assets/Landing/HamMenu/gearCircle.svg";
import firstGearArc from "../../../src/assets/Landing/HamMenu/firstGearArc.svg";
import thirdGearArc from "../../../src/assets/Landing/HamMenu/thirdGearArc.svg";

import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );

  const animate = () => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      tl.to(`.${styles.hamLeft}`, {
        x: "0%",
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          `.${styles.hamRight}`,
          {
            x: "0%",
            duration: 0.8,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          `.${styles.backBtn}, .${styles.ham}`,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );
    } else {
      tl.to(`.${styles.backBtn}, .${styles.ham}`, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
        .to(`.${styles.hamLeft}`, {
          x: "-100%",
          duration: 0.8,
          ease: "power2.in",
        })
        .to(
          `.${styles.hamRight}`,
          {
            x: "100%",
            duration: 0.8,
            ease: "power2.in",
          },
          "<"
        );
    }
  };

  useEffect(() => {
    animate();
  }, [isMenuOpen]);

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
        <div className={styles.container}>
          <div className={styles.ham}>
            {/* <img className={styles.main} src={hamMenu} alt="ham menu" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              className={styles.firstCircle}
            >
              <circle
                cx="15.43"
                cy="15.6448"
                r="14.8076"
                stroke="white"
                stroke-width="1.24488"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="201"
              height="81"
              viewBox="0 0 201 81"
              fill="none"
              className={styles.firstArc}
            >
              <path
                d="M200.105 79.9923C165.609 45.7003 122.125 21.1357 74.063 9.51362C49.9452 3.68164 25.3637 1.27533 1 2.18793"
                stroke="white"
                stroke-width="2.5"
              />
            </svg>
            <img
              className={styles.firstGear}
              src={firstGear}
              alt="first gear"
            />
            <img className={styles.firstGearArc} src={firstGearArc} alt="second arc" />
            <img className={styles.secondArc} src={secondArc} alt="second arc" />
            <img className={styles.wedge} src={wedge} alt="wedge" />
            <img className={styles.thirdArc} src={thirdArc} alt="third arc" />
            <img className={styles.secondGear} src={secondGear} alt="second arc" />
            <img className={styles.fifthCircle} src={fifthCircle} alt="third arc" />
            <img className={styles.gearCircle} src={gearCircle} alt="first gear" />
            <img className={styles.thirdGear} src={thirdGear} alt="third arc" />
            <img className={styles.thirdGearArc} src={thirdGearArc} alt="third arc" />
            <img className={styles.firstArrow} src={firstArrow} alt="first gear" />
            <img className={styles.thirdCircle} src={thirdCircle} alt="first gear" />
            <img className={styles.secondArrow} src={secondArrow} alt="second arc" />
            <img className={styles.fourthCircle} src={fourthCircle} alt="second arc" />
            <img className={styles.thirdArrow} src={thirdArrow} alt="third arc" />
            <img className={styles.sixCircle} src={sixCircle} alt="first gear" />

          </div>
        </div>
        <div className={styles.hamBackground}>
          <button
            className={styles.backBtn}
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/backBtnLanding.png"
              alt="back button"
              draggable={false}
            />
          </button>
          <img className={styles.hamLeft} src={hamLeft} />
          <img className={styles.hamRight} src={hamRight} />
        </div>
      </div>
    </>
  );
}
