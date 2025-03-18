import { useSelector } from "react-redux";
import styles from "./menu.module.scss";
import logoBackground from "../../../src/assets/Landing/regbtnLanding.svg";
import hamLeft from "../../../src/assets/Landing/HamMenu/hamLeft.png";
import hamRight from "../../../src/assets/Landing/HamMenu/hamRight.png";
import hamMenu from "../../../src/assets/Landing/HamMenu/hamMenu.png";
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
      // Opening animation
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
        <div className={styles.ham}>
          <img className={styles.main} src={hamMenu} alt="ham menu" />
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
