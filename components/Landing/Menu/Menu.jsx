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
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useNavigate } from "react-router";

gsap.registerPlugin(MotionPathPlugin);

export default function Menu() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );

  const animate = () => {
    const tl = gsap.timeline();

    const firstCircle = document.querySelector(`.${styles.firstCircle}`);
    const firstCirclePath = firstCircle.children[0];
    const firstArc = document.querySelector(`.${styles.firstArc}`);
    const firstArcPath = firstArc.children[0];
    const firstGear = document.querySelector(`.${styles.firstGear}`);
    // const firstGearPath = document.querySelector(`.${styles.firstGearPath}`);
    const firstGearPath = firstGear.children[0];
    // const secondGear = document.querySelector(`.${styles.secondGear}`);
    // const thirdGear = document.querySelector(`.${styles.thirdGear}`);
    const gearCircle = document.querySelector(`.${styles.gearCircle}`);
    const firstGearArc = document.querySelector(`.${styles.firstGearArc}`);
    const secondArc = document.querySelector(`.${styles.secondArc}`);
    const secondArcPath = secondArc.children[0];
    const wedge = document.querySelector(`.${styles.wedge}`);
    const thirdArc = document.querySelector(`.${styles.thirdArc}`);
    const thirdArcPath = thirdArc.children[0];
    const firstArrow = document.querySelector(`.${styles.firstArrow}`);
    const firstArrowPath = firstArrow.children[0];
    const secondArrow = document.querySelector(`.${styles.secondArrow}`);
    const secondArrowPath = secondArrow.children[0];
    const thirdArrow = document.querySelector(`.${styles.thirdArrow}`);
    const thirdArrowPath = thirdArrow.children[0];
    const secondCircle = document.querySelector(`.${styles.secondCircle}`);
    const thirdCircle = document.querySelector(`.${styles.thirdCircle}`);
    const fourthCircle = document.querySelector(`.${styles.fourthCircle}`);
    const fifthCircle = document.querySelector(`.${styles.fifthCircle}`);
    const sixCircle = document.querySelector(`.${styles.sixCircle}`);
    const thirdGearArc = document.querySelector(`.${styles.thirdGearArc}`);
    const gearOne = document.querySelector(`.${styles.gearOne}`);
    const gearTwo = document.querySelector(`.${styles.gearTwo}`);
    const gearThree = document.querySelector(`.${styles.gearThree}`);
    const gearFour = document.querySelector(`.${styles.gearFour}`);
    const gearFive = document.querySelector(`.${styles.gearFive}`);
    const gearSix = document.querySelector(`.${styles.gearSix}`);
    const gearSeven = document.querySelector(`.${styles.gearSeven}`);
    const gearEight = document.querySelector(`.${styles.gearEight}`);
    const dev = document.querySelector(`.${styles.dev}`);
    const media = document.querySelector(`.${styles.media}`);
    const events = document.querySelector(`.${styles.events}`);
    const archives = document.querySelector(`.${styles.archives}`);
    const articles = document.querySelector(`.${styles.articles}`);
    const spons = document.querySelector(`.${styles.spons}`);
    const wedgeCircle = document.querySelector(`.${styles.wedgeCircle}`);

    const firstArcLenghth = firstArcPath.getTotalLength();
    const secondArcLenghth = secondArcPath.getTotalLength();
    const firstArrowLength = firstArrowPath.getTotalLength();
    const secondArrowLength = secondArrowPath.getTotalLength();
    const thirdArcLength = thirdArcPath.getTotalLength();
    const thirdArrowLength = thirdArrowPath.getTotalLength();
    const delay = 0.5;
    // console.log(strokeLength);
    // console.log(firstGearPath);
    // console.log(firstArrow.children[0]);

    if (isMenuOpen) {
      gsap.killTweensOf([
        firstGear,
        firstGearArc,
        wedge,
        gearOne,
        gearTwo,
        gearThree,
        gearFour,
        gearFive,
        gearSix,
        gearSeven,
        gearEight,
        thirdGearArc,
      ]);
      gsap.set(firstArcPath, {
        strokeDashoffset: firstArcLenghth,
        strokeDasharray: firstArcLenghth,
      });
      gsap.set(secondArcPath, {
        strokeDashoffset: secondArcLenghth,
        strokeDasharray: secondArcLenghth,
      });
      gsap.set(firstArrowPath, {
        strokeDashoffset: firstArrowLength,
        strokeDasharray: firstArrowLength,
      });
      gsap.set(secondArrowPath, {
        strokeDashoffset: secondArrowLength,
        strokeDasharray: secondArrowLength,
      });
      gsap.set(thirdArcPath, {
        strokeDashoffset: thirdArcLength,
        strokeDasharray: thirdArcLength,
      });
      gsap.set(thirdArrowPath, {
        strokeDashoffset: thirdArrowLength,
        strokeDasharray: thirdArrowLength,
      });
      gsap.set(
        [
          firstGear,
          firstGearArc,
          wedge,
          gearOne,
          gearTwo,
          gearThree,
          gearFour,
          gearFive,
          gearSix,
          gearSeven,
          gearEight,
          gearCircle,
          thirdGearArc,
          wedgeCircle,
        ],
        {
          rotation: 0,
          scale: 0,
        }
      );
      gsap.set(
        [
          firstCircle,
          secondCircle,
          thirdCircle,
          fourthCircle,
          fifthCircle,
          sixCircle,
          dev,
          spons,
          events,
          media,
          archives,
          articles,
        ],
        {
          opacity: 0,
        }
      );
      tl.to(`.${styles.hamLeft}`, {
        x: "0%",
        duration: 0.4,
        ease: "power2.out",
      })
        .to(
          `.${styles.hamRight}`,
          {
            x: "0%",
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          `.${styles.backBtn}`,
          {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        );
      gsap.to(firstArcPath, {
        strokeDashoffset: 0,
        duration: 0.4,
        delay: 0.25,
        ease: "linear",
      });
      gsap.to([firstGear, firstGearArc], {
        scale: 1,
        duration: 0.2,
        delay: delay + 0.4,
        onComplete: function () {
          gsap.to(firstGear, {
            rotation: -360,
            duration: 1,
            ease: "linear",
            repeat: -1,
            transformOrigin: "center center",
          });
          gsap.to(firstGearArc, {
            rotation: 360,
            duration: 2,
            ease: "linear",
            repeat: -1,
            transformOrigin: "center center",
          });
          gsap.to(secondCircle, {
            opacity: 1,
            duration: 0.2,
            delay: 0.1,
          });
          gsap.to(spons, {
            opacity: 1,
            duration: 0.2,
            delay: 0.1,
          });
        },
      });
      gsap.to(secondArcPath, {
        strokeDashoffset: 0,
        duration: 0.4,
        delay: delay + 0.6,
        ease: "linear",
      });
      gsap.to([wedge, wedgeCircle], {
        scale: 1,
        duration: 0.2,
        delay: delay + 1,
        onComplete: function () {
          gsap.to(wedge, {
            rotation: 15,
            duration: 0.5,
            ease: "linear",
            repeat: -1,
            yoyo: true,
            transformOrigin: "center center",
          });
        },
      });
      gsap.to(firstArrowPath, {
        strokeDashoffset: 0,
        duration: 0.4,
        delay: delay + 1.2,
        ease: "linear",
      });
      gsap.to(dev, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 1.6,
      });
      gsap.to(thirdCircle, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 1.6,
      });
      gsap.to(secondArrowPath, {
        strokeDashoffset: 0,
        duration: 0.4,
        delay: delay + 1.8,
        ease: "linear",
      });
      gsap.to(media, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 2.1,
      });
      gsap.to(fourthCircle, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 2.1,
      });
      gsap.to([gearOne, gearTwo, gearThree, gearFour], {
        scale: 1,
        duration: 0.2,
        delay: delay + 2.3,
        onComplete: function () {
          gsap.to(gearOne, {
            rotation: 360,
            duration: 1.75,
            ease: "linear",
            repeat: -1,
            transformOrigin: "center center",
          });
          gsap.to(gearTwo, {
            rotation: -360,
            duration: 1.25,
            ease: "linear",
            repeat: -1,
            transformOrigin: "center center",
          });
          gsap.to(gearThree, {
            rotation: -360,
            duration: 2.25,
            ease: "linear",
            repeat: -1,
            transformOrigin: "center center",
          });
          gsap.to(gearFour, {
            rotation: 360,
            duration: 0.75,
            ease: "linear",
            repeat: -1,
            transformOrigin: "center center",
          });
        },
      });
      gsap.to(archives, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 2.5,
      });
      gsap.to(fifthCircle, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 2.5,
      });
      gsap.to(thirdArcPath, {
        strokeDashoffset: 0,
        duration: 0.4,
        delay: delay + 2.7,
        ease: "linear",
      });
      gsap.to(
        [gearFive, gearSix, gearSeven, gearEight, gearCircle, thirdGearArc],
        {
          scale: 1,
          duration: 0.2,
          delay: delay + 3.1,
          onComplete: function () {
            gsap.to(gearFive, {
              rotation: 360,
              duration: 1.75,
              ease: "linear",
              repeat: -1,
              transformOrigin: "center center",
            });
            gsap.to(gearSix, {
              rotation: -360,
              duration: 1.25,
              ease: "linear",
              repeat: -1,
              transformOrigin: "center center",
            });
            gsap.to(gearSeven, {
              rotation: -360,
              duration: 2.25,
              ease: "linear",
              repeat: -1,
              transformOrigin: "center center",
            });
            gsap.to(gearEight, {
              rotation: 360,
              duration: 0.75,
              ease: "linear",
              repeat: -1,
              transformOrigin: "center center",
            });
            gsap.to(thirdGearArc, {
              rotation: -30,
              duration: 0.3,
              ease: "linear",
              repeat: -1,
              yoyo: true,
              transformOrigin: "center center",
            });
          },
        }
      );
      gsap.to(thirdArrowPath, {
        strokeDashoffset: 0,
        duration: 0.4,
        delay: delay + 3.3,
        ease: "linear",
      });
      gsap.to(articles, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 3.7,
      });
      gsap.to(sixCircle, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 3.7,
      });
      gsap.to(events, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 3.9,
      });
      gsap.to(firstCircle, {
        opacity: 1,
        duration: 0.2,
        delay: delay + 3.9,
      });
    } else {
      gsap.to(firstArcPath, {
        strokeDashoffset: firstArcLenghth,
        duration: 0,
        ease: "linear",
      });
      gsap.to(
        [firstGear, firstGearArc, wedge, gearOne, gearTwo, gearThree, gearFour],
        {
          scale: 0,
          duration: 0,
        }
      );
      gsap.to(secondArcPath, {
        strokeDashoffset: secondArcLenghth,
        duration: 0,
        ease: "linear",
      });
      gsap.to(firstArrowPath, {
        strokeDashoffset: firstArrowLength,
        duration: 0,
        ease: "linear",
      });
      gsap.to(
        [
          firstCircle,
          thirdCircle,
          fourthCircle,
          fifthCircle,
          sixCircle,
          dev,
          spons,
          articles,
          archives,
          events,
          media,
        ],
        {
          opacity: 0,
          duration: 0,
        }
      );
      gsap.to(secondArrowPath, {
        strokeDashoffset: secondArrowLength,
        duration: 0,
        ease: "linear",
      });
      gsap.to(thirdArcPath, {
        strokeDashoffset: thirdArcLength,
        duration: 0,
        ease: "linear",
      });
      gsap.to(thirdArrowPath, {
        strokeDashoffset: thirdArrowLength,
        duration: 0,
        ease: "linear",
      });
      gsap.set(
        [
          firstGear,
          firstGearArc,
          wedge,
          gearOne,
          gearTwo,
          gearThree,
          gearFour,
          gearFive,
          gearSix,
          gearSeven,
          gearEight,
          thirdGearArc,
        ],
        {
          rotation: 0,
          scale: 0,
        }
      );
      tl.to(`.${styles.backBtn}`, {
        opacity: 0,
        duration: 0,
        ease: "power2.in",
      })
        .to(`.${styles.hamLeft}`, {
          x: "-100%",
          duration: 0,
          ease: "power2.in",
        })
        .to(
          `.${styles.hamRight}`,
          {
            x: "100%",
            duration: 0,
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
            <svg
              width="279"
              height="65"
              viewBox="0 0 279 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.dev}
              onClick={() => navigate("/developers")}
            >
              <path
                d="M0.563636 1.45454H11.5091C22.8455 1.45454 29.4909 8.88182 29.4909 27.2545V38.2C29.4909 56.5727 22.8455 64 11.5091 64H0.563636V1.45454ZM11.9 10.8364V54.2273H13.0727C16.1218 54.2273 17.7636 52.0382 17.7636 48.6764V16.3873C17.7636 13.0255 16.1218 10.8364 13.0727 10.8364H11.9ZM32.1418 1.45454H53.2509V11.6182H43.869V27.2545H52.0781V37.4182H43.869V53.8364H53.2509V64H32.1418V1.45454ZM60.8232 64L54.5686 2.23636V1.45454H66.2959L68.6414 34.6818H69.4232L71.7686 1.45454H83.4959V2.23636L77.2414 64H60.8232ZM85.4718 1.45454H106.581V11.6182H97.1991V27.2545H105.408V37.4182H97.1991V53.8364H106.581V64H85.4718V1.45454ZM109.071 1.45454H120.799V53.8364H130.571V64H109.071V1.45454ZM129.934 35.0727V30.3818C129.934 8.88182 135.798 0.672726 145.962 0.672726C156.125 0.672726 161.989 8.88182 161.989 30.3818V35.0727C161.989 56.5727 156.125 64.7818 145.962 64.7818C135.798 64.7818 129.934 56.5727 129.934 35.0727ZM142.834 14.0418V51.0218C142.834 53.6018 144.085 55.0091 145.962 55.0091C147.838 55.0091 149.089 53.6018 149.089 51.0218V14.0418C149.089 11.4618 147.838 10.0545 145.962 10.0545C144.085 10.0545 142.834 11.4618 142.834 14.0418ZM164.669 1.45454H176.24C185.778 1.45454 193.987 7.70909 193.987 21V22.5636C193.987 35.8545 185.778 42.1091 176.396 42.1091V64H164.669V1.45454ZM176.396 10.8364V32.7273H177.178C180.305 32.7273 182.26 30.9291 182.26 26.4727V17.0909C182.26 12.6345 180.305 10.8364 177.178 10.8364H176.396ZM196.163 1.45454H217.272V11.6182H207.891V27.2545H216.1V37.4182H207.891V53.8364H217.272V64H196.163V1.45454ZM219.763 1.45454H231.334C241.185 1.45454 248.69 8.33455 248.69 20.4527C248.69 28.2709 246.345 32.6491 242.045 36.8709L247.908 63.2182V64H236.572L232.116 40.2327H230.943L231.49 64H219.763V1.45454ZM231.49 10.8364V31.9455H231.881C234.617 31.9455 236.963 29.8345 236.963 25.6909V17.0909C236.963 12.9473 234.617 10.8364 231.881 10.8364H231.49ZM249.67 42.5H260.381C260.772 43.2818 260.85 44.6891 260.85 46.0182V51.8036C260.85 54.2273 261.945 55.7909 263.743 55.7909C265.619 55.7909 266.714 54.2273 266.714 51.4909C266.714 46.4873 263.43 41.8745 259.99 37.34L257.723 34.3691C252.407 27.4109 250.217 22.7982 250.217 15.9182C250.217 6.92727 255.612 0.672726 264.447 0.672726C273.437 0.672726 278.363 6.92727 278.363 16.8564C278.363 18.7327 278.441 20.14 278.832 21.3909V22.1727H268.277C267.965 21.3127 267.808 20.14 267.808 18.6545V13.4164C267.808 10.9145 266.636 9.66364 264.994 9.66364C263.274 9.66364 261.945 10.9145 261.945 14.0418C261.945 18.6545 264.368 21.9382 267.808 26.3164L270.154 29.2873C275.548 36.0891 278.441 41.4836 278.441 49.1455C278.441 58.6836 273.047 64.7818 264.525 64.7818C254.987 64.7818 250.139 58.6055 250.139 47.66C250.139 45.7836 250.061 44.4545 249.67 43.2818V42.5Z"
                fill="white"
              />
            </svg>

            <svg
              width="252"
              height="65"
              viewBox="0 0 252 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.spons}
              onClick={() => navigate("/sponsors")}
            >
              <path
                d="M0.312727 42.5H11.0236C11.4145 43.2818 11.4927 44.6891 11.4927 46.0182V51.8037C11.4927 54.2273 12.5873 55.7909 14.3855 55.7909C16.2618 55.7909 17.3564 54.2273 17.3564 51.4909C17.3564 46.4873 14.0727 41.8746 10.6327 37.34L8.36545 34.3691C3.04909 27.4109 0.86 22.7982 0.86 15.9182C0.86 6.9273 6.25455 0.672757 15.0891 0.672757C24.08 0.672757 29.0055 6.9273 29.0055 16.8564C29.0055 18.7328 29.0836 20.14 29.4745 21.3909V22.1728H18.92C18.6073 21.3128 18.4509 20.14 18.4509 18.6546V13.4164C18.4509 10.9146 17.2782 9.66367 15.6364 9.66367C13.9164 9.66367 12.5873 10.9146 12.5873 14.0419C12.5873 18.6546 15.0109 21.9382 18.4509 26.3164L20.7964 29.2873C26.1909 36.0891 29.0836 41.4837 29.0836 49.1455C29.0836 58.6837 23.6891 64.7818 15.1673 64.7818C5.62909 64.7818 0.781818 58.6055 0.781818 47.66C0.781818 45.7837 0.703636 44.4546 0.312727 43.2818V42.5ZM31.5461 1.45457H43.117C52.6551 1.45457 60.8642 7.70912 60.8642 21V22.5637C60.8642 35.8546 52.6551 42.1091 43.2733 42.1091V64H31.5461V1.45457ZM43.2733 10.8364V32.7273H44.0551C47.1824 32.7273 49.137 30.9291 49.137 26.4728V17.0909C49.137 12.6346 47.1824 10.8364 44.0551 10.8364H43.2733ZM62.5711 35.0728V30.3818C62.5711 8.88185 68.4347 0.672757 78.5984 0.672757C88.762 0.672757 94.6257 8.88185 94.6257 30.3818V35.0728C94.6257 56.5728 88.762 64.7818 78.5984 64.7818C68.4347 64.7818 62.5711 56.5728 62.5711 35.0728ZM75.4711 14.0419V51.0218C75.4711 53.6018 76.722 55.0091 78.5984 55.0091C80.4747 55.0091 81.7257 53.6018 81.7257 51.0218V14.0419C81.7257 11.4618 80.4747 10.0546 78.5984 10.0546C76.722 10.0546 75.4711 11.4618 75.4711 14.0419ZM97.3058 1.45457H107.469L114.115 32.7273H114.897L113.724 1.45457H124.669V64H114.506L107.86 32.7273H107.079L108.251 64H97.3058V1.45457ZM126.541 42.5H137.252C137.643 43.2818 137.721 44.6891 137.721 46.0182V51.8037C137.721 54.2273 138.816 55.7909 140.614 55.7909C142.49 55.7909 143.585 54.2273 143.585 51.4909C143.585 46.4873 140.301 41.8746 136.861 37.34L134.594 34.3691C129.278 27.4109 127.089 22.7982 127.089 15.9182C127.089 6.9273 132.483 0.672757 141.318 0.672757C150.309 0.672757 155.234 6.9273 155.234 16.8564C155.234 18.7328 155.312 20.14 155.703 21.3909V22.1728H145.149C144.836 21.3128 144.679 20.14 144.679 18.6546V13.4164C144.679 10.9146 143.507 9.66367 141.865 9.66367C140.145 9.66367 138.816 10.9146 138.816 14.0419C138.816 18.6546 141.239 21.9382 144.679 26.3164L147.025 29.2873C152.419 36.0891 155.312 41.4837 155.312 49.1455C155.312 58.6837 149.918 64.7818 141.396 64.7818C131.858 64.7818 127.01 58.6055 127.01 47.66C127.01 45.7837 126.932 44.4546 126.541 43.2818V42.5ZM157.305 35.0728V30.3818C157.305 8.88185 163.169 0.672757 173.333 0.672757C183.496 0.672757 189.36 8.88185 189.36 30.3818V35.0728C189.36 56.5728 183.496 64.7818 173.333 64.7818C163.169 64.7818 157.305 56.5728 157.305 35.0728ZM170.205 14.0419V51.0218C170.205 53.6018 171.456 55.0091 173.333 55.0091C175.209 55.0091 176.46 53.6018 176.46 51.0218V14.0419C176.46 11.4618 175.209 10.0546 173.333 10.0546C171.456 10.0546 170.205 11.4618 170.205 14.0419ZM192.04 1.45457H203.611C213.462 1.45457 220.967 8.33458 220.967 20.4528C220.967 28.2709 218.622 32.6491 214.322 36.8709L220.186 63.2182V64H208.849L204.393 40.2328H203.22L203.767 64H192.04V1.45457ZM203.767 10.8364V31.9455H204.158C206.895 31.9455 209.24 29.8346 209.24 25.6909V17.0909C209.24 12.9473 206.895 10.8364 204.158 10.8364H203.767ZM221.947 42.5H232.658C233.049 43.2818 233.127 44.6891 233.127 46.0182V51.8037C233.127 54.2273 234.222 55.7909 236.02 55.7909C237.897 55.7909 238.991 54.2273 238.991 51.4909C238.991 46.4873 235.707 41.8746 232.267 37.34L230 34.3691C224.684 27.4109 222.495 22.7982 222.495 15.9182C222.495 6.9273 227.889 0.672757 236.724 0.672757C245.715 0.672757 250.64 6.9273 250.64 16.8564C250.64 18.7328 250.718 20.14 251.109 21.3909V22.1728H240.555C240.242 21.3128 240.086 20.14 240.086 18.6546V13.4164C240.086 10.9146 238.913 9.66367 237.271 9.66367C235.551 9.66367 234.222 10.9146 234.222 14.0419C234.222 18.6546 236.646 21.9382 240.086 26.3164L242.431 29.2873C247.826 36.0891 250.718 41.4837 250.718 49.1455C250.718 58.6837 245.324 64.7818 236.802 64.7818C227.264 64.7818 222.417 58.6055 222.417 47.66C222.417 45.7837 222.338 44.4546 221.947 43.2818V42.5Z"
                fill="white"
              />
            </svg>

            <svg
              width="212"
              height="65"
              viewBox="0 0 212 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.articles}
              onClick={() => navigate("/archives")}
            >
              <path
                d="M6.25455 1.45457H23.4545L29.3182 63.2182V64H18.3727L17.0436 49.1455H12.6655L11.3364 64H0.390909V63.2182L6.25455 1.45457ZM12.7436 38.9818H16.9655L15.2455 17.4818H14.4636L12.7436 38.9818ZM31.2941 1.45457H42.865C52.7159 1.45457 60.2214 8.33458 60.2214 20.4528C60.2214 28.2709 57.8759 32.6491 53.5759 36.8709L59.4396 63.2182V64H48.1032L43.6468 40.2328H42.4741L43.0214 64H31.2941V1.45457ZM43.0214 10.8364V31.9455H43.4123C46.1487 31.9455 48.4941 29.8346 48.4941 25.6909V17.0909C48.4941 12.9473 46.1487 10.8364 43.4123 10.8364H43.0214ZM59.9184 1.45457H87.2821V11.6182H79.4639V64H67.7366V11.6182H59.9184V1.45457ZM89.4953 1.45457H101.223V64H89.4953V1.45457ZM103.891 30.3818C103.891 8.88185 109.833 0.672757 119.997 0.672757C129.379 0.672757 134.382 8.10003 134.382 19.8273C134.382 21.2346 134.461 22.8764 134.773 24.1273V24.9091H123.046C122.811 24.1273 122.655 22.9546 122.655 21.3909V13.6509C122.655 11.4618 121.717 10.0546 119.841 10.0546C117.964 10.0546 116.791 11.4618 116.791 14.0419V51.0218C116.791 53.6018 117.964 55.0091 119.841 55.0091C121.717 55.0091 122.655 53.6018 122.655 51.4128V43.6728C122.655 42.1091 122.811 40.9364 123.046 40.1546H134.773V40.9364C134.382 42.3437 134.382 43.8291 134.382 45.6273C134.382 57.3546 129.379 64.7818 119.997 64.7818C109.833 64.7818 103.891 56.5728 103.891 35.0728V30.3818ZM136.946 1.45457H148.674V53.8364H158.446V64H136.946V1.45457ZM160.63 1.45457H181.739V11.6182H172.357V27.2546H180.566V37.4182H172.357V53.8364H181.739V64H160.63V1.45457ZM182.391 42.5H193.102C193.493 43.2818 193.571 44.6891 193.571 46.0182V51.8037C193.571 54.2273 194.665 55.7909 196.464 55.7909C198.34 55.7909 199.434 54.2273 199.434 51.4909C199.434 46.4873 196.151 41.8746 192.711 37.34L190.444 34.3691C185.127 27.4109 182.938 22.7982 182.938 15.9182C182.938 6.9273 188.333 0.672757 197.167 0.672757C206.158 0.672757 211.084 6.9273 211.084 16.8564C211.084 18.7328 211.162 20.14 211.553 21.3909V22.1728H200.998C200.685 21.3128 200.529 20.14 200.529 18.6546V13.4164C200.529 10.9146 199.356 9.66367 197.714 9.66367C195.994 9.66367 194.665 10.9146 194.665 14.0419C194.665 18.6546 197.089 21.9382 200.529 26.3164L202.874 29.2873C208.269 36.0891 211.162 41.4837 211.162 49.1455C211.162 58.6837 205.767 64.7818 197.245 64.7818C187.707 64.7818 182.86 58.6055 182.86 47.66C182.86 45.7837 182.782 44.4546 182.391 43.2818V42.5Z"
                fill="white"
              />
            </svg>

            <svg
              width="381"
              height="65"
              viewBox="0 0 381 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.media}
              onClick={() => navigate("/media")}
            >
              <path
                d="M0.563636 1.45454H13.4636L18.5455 35.0727H19.3273L24.4091 1.45454H37.3091V64H27.1455L27.9273 35.0727H27.1455L22.8455 64H15.0273L10.7273 35.0727H9.94545L10.7273 64H0.563636V1.45454ZM40.4562 1.45454H61.5653V11.6182H52.1835V27.2545H60.3926V37.4182H52.1835V53.8364H61.5653V64H40.4562V1.45454ZM64.0558 1.45454H75.0013C86.3376 1.45454 92.9831 8.88182 92.9831 27.2545V38.2C92.9831 56.5727 86.3376 64 75.0013 64H64.0558V1.45454ZM75.3922 10.8364V54.2273H76.5649C79.614 54.2273 81.2558 52.0382 81.2558 48.6764V16.3873C81.2558 13.0255 79.614 10.8364 76.5649 10.8364H75.3922ZM95.6339 1.45454H107.361V64H95.6339V1.45454ZM115.19 1.45454H132.39L138.254 63.2182V64H127.308L125.979 49.1455H121.601L120.272 64H109.326V63.2182L115.19 1.45454ZM121.679 38.9818H125.901L124.181 17.4818H123.399L121.679 38.9818ZM151.148 1.45454H162.719C172.257 1.45454 180.466 7.70909 180.466 21V22.5636C180.466 35.8545 172.257 42.1091 162.875 42.1091V64H151.148V1.45454ZM162.875 10.8364V32.7273H163.657C166.784 32.7273 168.739 30.9291 168.739 26.4727V17.0909C168.739 12.6345 166.784 10.8364 163.657 10.8364H162.875ZM184.477 1.45454H201.677L207.541 63.2182V64H196.595L195.266 49.1455H190.888L189.559 64H178.614V63.2182L184.477 1.45454ZM190.966 38.9818H195.188L193.468 17.4818H192.686L190.966 38.9818ZM209.517 1.45454H221.088C230.939 1.45454 238.444 8.33455 238.444 20.4527C238.444 28.2709 236.099 32.6491 231.799 36.8709L237.662 63.2182V64H226.326L221.869 40.2327H220.697L221.244 64H209.517V1.45454ZM221.244 10.8364V31.9455H221.635C224.371 31.9455 226.717 29.8345 226.717 25.6909V17.0909C226.717 12.9473 224.371 10.8364 221.635 10.8364H221.244ZM238.141 1.45454H265.505V11.6182H257.687V64H245.959V11.6182H238.141V1.45454ZM267.718 1.45454H277.882L284.527 32.7273H285.309L284.136 1.45454H295.082V64H284.918L278.272 32.7273H277.491L278.663 64H267.718V1.45454ZM298.204 1.45454H319.313V11.6182H309.932V27.2545H318.141V37.4182H309.932V53.8364H319.313V64H298.204V1.45454ZM321.804 1.45454H333.375C343.226 1.45454 350.731 8.33455 350.731 20.4527C350.731 28.2709 348.386 32.6491 344.086 36.8709L349.949 63.2182V64H338.613L334.157 40.2327H332.984L333.531 64H321.804V1.45454ZM333.531 10.8364V31.9455H333.922C336.658 31.9455 339.004 29.8345 339.004 25.6909V17.0909C339.004 12.9473 336.658 10.8364 333.922 10.8364H333.531ZM351.711 42.5H362.422C362.813 43.2818 362.891 44.6891 362.891 46.0182V51.8036C362.891 54.2273 363.986 55.7909 365.784 55.7909C367.66 55.7909 368.755 54.2273 368.755 51.4909C368.755 46.4873 365.471 41.8745 362.031 37.34L359.764 34.3691C354.448 27.4109 352.258 22.7982 352.258 15.9182C352.258 6.92727 357.653 0.672726 366.488 0.672726C375.478 0.672726 380.404 6.92727 380.404 16.8564C380.404 18.7327 380.482 20.14 380.873 21.3909V22.1727H370.318C370.006 21.3127 369.849 20.14 369.849 18.6545V13.4164C369.849 10.9145 368.677 9.66364 367.035 9.66364C365.315 9.66364 363.986 10.9145 363.986 14.0418C363.986 18.6545 366.409 21.9382 369.849 26.3164L372.195 29.2873C377.589 36.0891 380.482 41.4836 380.482 49.1455C380.482 58.6836 375.088 64.7818 366.566 64.7818C357.028 64.7818 352.18 58.6055 352.18 47.66C352.18 45.7836 352.102 44.4545 351.711 43.2818V42.5Z"
                fill="white"
              />
            </svg>

            <svg
              width="222"
              height="65"
              viewBox="0 0 222 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.archives}
              onClick={() => navigate("/archives")}
            >
              <path
                d="M6.25455 1.52684H23.4545L29.3182 63.2905V64.0723H18.3727L17.0436 49.2178H12.6655L11.3364 64.0723H0.390909V63.2905L6.25455 1.52684ZM12.7436 39.0541H16.9655L15.2455 17.5541H14.4636L12.7436 39.0541ZM31.2941 1.52684H42.865C52.7159 1.52684 60.2214 8.40684 60.2214 20.525C60.2214 28.3432 57.8759 32.7214 53.5759 36.9432L59.4396 63.2905V64.0723H48.1032L43.6468 40.305H42.4741L43.0214 64.0723H31.2941V1.52684ZM43.0214 10.9087V32.0178H43.4123C46.1487 32.0178 48.4941 29.9068 48.4941 25.7632V17.1632C48.4941 13.0196 46.1487 10.9087 43.4123 10.9087H43.0214ZM61.9832 30.4541C61.9832 8.95412 67.925 0.745022 78.0887 0.745022C87.4705 0.745022 92.4741 8.1723 92.4741 19.8996C92.4741 21.3068 92.5523 22.9487 92.865 24.1996V24.9814H81.1378C80.9032 24.1996 80.7469 23.0268 80.7469 21.4632V13.7232C80.7469 11.5341 79.8087 10.1268 77.9323 10.1268C76.0559 10.1268 74.8832 11.5341 74.8832 14.1141V51.0941C74.8832 53.6741 76.0559 55.0814 77.9323 55.0814C79.8087 55.0814 80.7469 53.6741 80.7469 51.485V43.745C80.7469 42.1814 80.9032 41.0087 81.1378 40.2268H92.865V41.0087C92.4741 42.4159 92.4741 43.9014 92.4741 45.6996C92.4741 57.4268 87.4705 64.8541 78.0887 64.8541C67.925 64.8541 61.9832 56.645 61.9832 35.145V30.4541ZM95.0382 1.52684H106.375V27.3268H111.456V1.52684H122.793V64.0723H111.456V37.4905H106.375V64.0723H95.0382V1.52684ZM125.944 1.52684H137.672V64.0723H125.944V1.52684ZM145.892 64.0723L139.637 2.30866V1.52684H151.364L153.71 34.7541H154.492L156.837 1.52684H168.564V2.30866L162.31 64.0723H145.892ZM170.54 1.52684H191.649V11.6905H182.267V27.3268H190.477V37.4905H182.267V53.9087H191.649V64.0723H170.54V1.52684ZM192.301 42.5723H203.012C203.403 43.3541 203.481 44.7614 203.481 46.0905V51.8759C203.481 54.2996 204.576 55.8632 206.374 55.8632C208.25 55.8632 209.345 54.2996 209.345 51.5632C209.345 46.5596 206.061 41.9468 202.621 37.4123L200.354 34.4414C195.037 27.4832 192.848 22.8705 192.848 15.9905C192.848 6.99957 198.243 0.745022 207.077 0.745022C216.068 0.745022 220.994 6.99957 220.994 16.9287C220.994 18.805 221.072 20.2123 221.463 21.4632V22.245H210.908C210.596 21.385 210.439 20.2123 210.439 18.7268V13.4887C210.439 10.9868 209.266 9.73593 207.625 9.73593C205.905 9.73593 204.576 10.9868 204.576 14.1141C204.576 18.7268 206.999 22.0105 210.439 26.3887L212.785 29.3596C218.179 36.1614 221.072 41.5559 221.072 49.2178C221.072 58.7559 215.677 64.8541 207.156 64.8541C197.617 64.8541 192.77 58.6778 192.77 47.7323C192.77 45.8559 192.692 44.5268 192.301 43.3541V42.5723Z"
                fill="white"
              />
            </svg>

            <svg
              width="417"
              height="65"
              viewBox="0 0 417 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.events}
              onClick={() => navigate("/events")}
            >
              <path
                d="M0.161293 1.45454H21.2704V11.6182H11.8886V27.2545H20.0977V37.4182H11.8886V53.8364H21.2704V64H0.161293V1.45454ZM28.8427 64L22.5882 2.23636V1.45454H34.3154L36.6609 34.6818H37.4427L39.7882 1.45454H51.5154V2.23636L45.2609 64H28.8427ZM53.4914 1.45454H74.6005V11.6182H65.2186V27.2545H73.4277V37.4182H65.2186V53.8364H74.6005V64H53.4914V1.45454ZM77.091 1.45454H87.2546L93.9001 32.7273H94.6819L93.5092 1.45454H104.455V64H94.291L87.6455 32.7273H86.8637L88.0364 64H77.091V1.45454ZM106.639 1.45454H134.003V11.6182H126.185V64H114.457V11.6182H106.639V1.45454ZM134.377 42.5H145.088C145.479 43.2818 145.557 44.6891 145.557 46.0182V51.8036C145.557 54.2273 146.652 55.7909 148.45 55.7909C150.326 55.7909 151.421 54.2273 151.421 51.4909C151.421 46.4873 148.137 41.8745 144.697 37.34L142.43 34.3691C137.114 27.4109 134.924 22.7982 134.924 15.9182C134.924 6.92727 140.319 0.672726 149.154 0.672726C158.144 0.672726 163.07 6.92727 163.07 16.8564C163.07 18.7327 163.148 20.14 163.539 21.3909V22.1727H152.984C152.672 21.3127 152.515 20.14 152.515 18.6545V13.4164C152.515 10.9145 151.343 9.66364 149.701 9.66364C147.981 9.66364 146.652 10.9145 146.652 14.0418C146.652 18.6545 149.075 21.9382 152.515 26.3164L154.861 29.2873C160.255 36.0891 163.148 41.4836 163.148 49.1455C163.148 58.6836 157.754 64.7818 149.232 64.7818C139.694 64.7818 134.846 58.6055 134.846 47.66C134.846 45.7836 134.768 44.4545 134.377 43.2818V42.5ZM176.528 1.45454H188.099C197.95 1.45454 205.456 8.33455 205.456 20.4527C205.456 28.2709 203.11 32.6491 198.81 36.8709L204.674 63.2182V64H193.338L188.881 40.2327H187.708L188.256 64H176.528V1.45454ZM188.256 10.8364V31.9455H188.647C191.383 31.9455 193.728 29.8345 193.728 25.6909V17.0909C193.728 12.9473 191.383 10.8364 188.647 10.8364H188.256ZM224.887 1.45454H236.614V48.3636C236.614 58.5273 231.141 64.7818 222.15 64.7818C213.159 64.7818 207.687 58.5273 207.687 48.3636V1.45454H219.414V51.4127C219.414 53.9927 220.274 55.4 222.15 55.4C224.027 55.4 224.887 53.9927 224.887 51.4127V1.45454ZM239.769 1.45454H251.496V53.8364H261.269V64H239.769V1.45454ZM263.452 1.45454H284.561V11.6182H275.18V27.2545H283.389V37.4182H275.18V53.8364H284.561V64H263.452V1.45454ZM287.052 1.45454H298.232C307.77 1.45454 316.37 6.77091 316.37 17.4818C316.37 26.0818 311.523 29.9909 306.988 31.9455V32.7273C311.836 34.4473 316.761 38.5127 316.761 47.3473C316.761 58.4491 308.943 64 299.405 64H287.052V1.45454ZM298.779 10.8364V28.0364H299.561C302.297 28.0364 304.252 26.0818 304.252 21.7818V17.0909C304.252 12.7909 302.297 10.8364 299.561 10.8364H298.779ZM298.779 37.4182V54.6182H299.561C302.297 54.6182 304.643 52.6636 304.643 47.9727V44.0636C304.643 39.3727 302.297 37.4182 299.561 37.4182H298.779ZM318.497 35.0727V30.3818C318.497 8.88182 324.361 0.672726 334.524 0.672726C344.688 0.672726 350.551 8.88182 350.551 30.3818V35.0727C350.551 56.5727 344.688 64.7818 334.524 64.7818C324.361 64.7818 318.497 56.5727 318.497 35.0727ZM331.397 14.0418V51.0218C331.397 53.6018 332.648 55.0091 334.524 55.0091C336.401 55.0091 337.651 53.6018 337.651 51.0218V14.0418C337.651 11.4618 336.401 10.0545 334.524 10.0545C332.648 10.0545 331.397 11.4618 331.397 14.0418ZM352.763 35.0727V30.3818C352.763 8.88182 358.626 0.672726 368.79 0.672726C378.953 0.672726 384.817 8.88182 384.817 30.3818V35.0727C384.817 56.5727 378.953 64.7818 368.79 64.7818C358.626 64.7818 352.763 56.5727 352.763 35.0727ZM365.663 14.0418V51.0218C365.663 53.6018 366.913 55.0091 368.79 55.0091C370.666 55.0091 371.917 53.6018 371.917 51.0218V14.0418C371.917 11.4618 370.666 10.0545 368.79 10.0545C366.913 10.0545 365.663 11.4618 365.663 14.0418ZM387.497 64V1.45454H399.225L398.677 22.3291H399.459L404.697 1.45454H415.643V2.23636L408.606 31.9455V32.7273L416.034 63.2182V64H404.697L399.459 42.7345H398.677L399.225 64H387.497Z"
                fill="white"
              />
            </svg>

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
                // d="M200.105 79.9923C165.609 45.7003 122.125 21.1357 74.063 9.51362C49.9452 3.68164 25.3637 1.27533 1 2.18793"
                d="M1 2.18793C25.3637 1.27533 49.9452 3.68164 74.063 9.51362C122.125 21.1357 165.609 45.7003 200.105 79.9923"
                stroke="white"
                stroke-width="2.5"
                className={styles.svgPath}
              />
            </svg>

            {/* <img
              className={styles.firstGear}
              src={firstGear}
              alt="first gear"
            /> */}
            {/* <svg
              width="142"
              height="142"
              viewBox="0 0 142 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.firstGear}
            >
              <circle
                cx="123.152"
                cy="22.2852"
                r="13.8776"
                stroke="white"
                stroke-width="1.24488"
              />
              <path
                d="M41.0402 46.8641C41.1132 46.9781 41.2066 46.9985 41.2796 47.1124C41.1657 47.1855 41.2387 47.2994 41.3322 47.3198C41.3322 47.3198 41.3118 47.4133 41.2183 47.3928L42.0829 48.3655C41.2562 49.4579 40.409 50.6438 39.6554 51.8501L33.4835 49.6182L31.7513 53.0591L35.7558 55.7961L35.9427 55.837L35.9222 55.9305L37.1081 56.7776C36.6758 57.8584 36.223 59.0326 35.8841 60.1338C36.515 59.4883 37.2395 58.8632 38.0252 57.9577C38.8577 58.6296 37.5199 58.9246 37.1168 59.424C36.848 59.757 36.5384 60.2769 36.1762 60.5895C35.814 60.902 35.3583 61.194 35.11 61.4335C34.9961 61.5066 34.9756 61.6001 34.8412 61.7665C35.443 61.7023 36.1907 61.8659 36.7924 61.8017C37.4029 61.2496 38.0134 60.6976 38.7524 61.349C38.5771 61.7024 38.028 61.974 37.9462 62.3479C37.9257 62.4414 38.1769 63.084 38.2908 63.011C37.8468 63.6974 37.2948 63.0869 36.582 64.1063C35.7379 63.0401 35.0135 63.6651 34.1811 62.9933C34.1694 62.599 34.5521 62.1929 34.2395 61.8307C34.6426 61.3313 35.0048 61.0187 35.294 60.5923L29.1484 60.0313L28.3304 63.77L28.7773 63.9657C28.8912 63.8927 29.0051 63.8197 29.0986 63.8401C29.1716 63.9541 29.2446 64.068 29.2242 64.1614L34.5752 66.1158C34.3619 67.5383 34.2626 68.8877 34.2362 70.3511L27.8159 71.493L27.9531 75.3428L28.14 75.3837L28.067 75.2698C28.1809 75.1967 28.2013 75.1033 28.3153 75.0303C28.5752 75.1851 28.4408 75.3515 28.6073 75.4859L34.4726 75.9857C34.6536 77.3965 34.9486 78.7343 35.2231 80.1655L29.2233 82.9665L30.3769 86.6469L36.8177 85.4116C37.32 86.6969 37.9158 88.0026 38.6256 89.2352L33.5955 93.4237L34.3987 94.6768C34.6996 94.6446 34.8252 94.9659 34.7638 95.2464L35.713 96.7274L41.6193 93.906C42.37 94.9517 43.2345 95.9244 44.0991 96.8971C44.1604 96.6167 44.5957 96.4181 44.8147 96.7599C44.6599 97.0199 44.4321 97.1659 44.2772 97.4258C44.1838 97.4054 44.1838 97.4053 44.1107 97.2914L40.433 102.461L43.2955 105.047L44.496 104.036C44.5165 103.942 44.423 103.922 44.4434 103.829C44.5778 103.662 44.7648 103.703 44.8582 103.723L48.346 100.765C49.4384 101.591 50.6242 102.438 51.8305 103.192L49.5986 109.364L53.0395 111.096L54.909 108.371C54.649 108.216 54.4095 107.968 54.243 107.834C53.9539 108.26 53.5712 108.666 53.1885 109.072C52.4291 108.514 53.1535 107.889 52.4876 107.352C53.0776 106.893 54.8069 105.704 54.0153 104.845C54.5849 104.48 55.2187 104.717 55.9256 105.068C55.5751 105.774 55.2245 106.481 54.801 107.074C54.9675 107.209 55.1339 107.343 55.3209 107.384C55.2595 107.664 55.1982 107.945 55.0434 108.205L56.758 105.739C58.0053 106.306 59.3664 106.8 60.748 107.2L60.6077 108.736C60.7216 108.663 60.8356 108.59 60.929 108.611C61.1481 108.953 61.1802 109.253 61.0049 109.607C61.078 109.721 61.078 109.721 61.0575 109.814C60.964 109.794 60.9436 109.887 60.8501 109.867C60.7362 109.94 60.6018 110.106 60.4879 110.179L60.1781 113.833L63.9169 114.652L66.1488 108.48C67.5713 108.693 68.9207 108.792 70.3841 108.819L71.5259 115.239L74.8879 115.093C74.555 114.824 74.6163 114.544 74.0964 114.234C74.6134 113.662 74.6572 114.357 75.3845 114.614C75.3436 114.801 75.3232 114.894 75.1684 115.154L75.3757 115.102L75.6563 112.029C75.3875 112.362 75.1071 112.301 74.8793 112.447C74.4733 112.064 75.2386 111.252 75.7176 111.749L75.9456 108.468C77.3564 108.287 78.6738 108.086 80.1255 107.718L82.9264 113.718L86.6069 112.564L85.3716 106.123C86.6568 105.621 87.9625 105.025 89.1952 104.315L93.3836 109.345L93.7254 109.126C93.5793 108.899 93.8276 108.659 94.035 108.606L94.1811 108.834L96.6873 107.228L93.8659 101.322C95.0256 100.498 96.1122 99.5604 97.1054 98.6024L100.237 100.855C100.237 100.855 100.33 100.875 100.444 100.802C100.423 100.895 100.517 100.916 100.496 101.009L100.923 101.299C101.057 101.132 101.338 101.193 101.431 101.214C101.639 101.161 101.98 100.942 102.313 101.211C102.769 100.919 103.257 100.928 103.704 101.123L105.12 99.5725L104.662 98.9824C104.641 99.0759 104.527 99.1489 104.507 99.2424C104.101 98.8597 103.78 98.9853 103.552 99.1314C103.561 98.6436 103.882 98.518 104.276 98.5063L100.932 94.5424C101.759 93.45 102.606 92.2642 103.359 91.0579L108.077 92.7756L108.48 92.2761C108.626 92.5039 108.772 92.7318 108.711 93.0122L109.531 93.2898L111.264 89.8489L105.813 86.1099C106.38 84.8627 106.874 83.5015 107.274 82.1199L107.762 82.1288C107.73 81.8279 107.718 81.4336 107.873 81.1736C108.299 81.4628 108.124 81.8162 108.156 82.1171L113.72 82.6489L114.232 80.3122C114.232 80.3122 114.138 80.2917 114.159 80.1983C114.273 80.1253 114.2 80.0113 114.106 79.9909C114.22 79.9179 114.24 79.8244 114.354 79.7514L114.448 79.7718L114.652 78.8371L108.481 76.6052C108.694 75.1827 108.793 73.8333 108.82 72.3699L115.333 71.2485L115.281 71.0412C115.187 71.0207 115.208 70.9272 115.114 70.9068C115.135 70.8133 115.228 70.8338 115.249 70.7403L115.237 70.346C114.916 70.4716 114.799 69.6625 115.193 69.6508L115.123 67.2848L114.635 67.276C114.46 67.6295 114.191 67.9624 113.765 67.6732C113.899 67.5067 114.013 67.4337 114.054 67.2468L108.563 66.8288C108.382 65.418 108.087 64.0802 107.812 62.649L113.812 59.848L112.658 56.1676L105.75 57.3006C105.248 56.0154 104.652 54.7097 103.942 53.477L108.972 49.2886L106.928 46.0988C105.646 47.4833 104.965 48.8036 103.35 49.9193C102.339 48.7187 104.112 48.2251 104.877 47.4132C105.126 47.1737 105.28 46.9137 105.435 46.6538L100.949 48.8063C100.125 47.6467 99.1669 46.6535 98.2294 45.5669L101.948 40.21L99.0855 37.6249L94.035 41.9068C92.9427 41.0801 91.7568 40.2329 90.5505 39.4793L92.7823 33.3074L89.3415 31.5752L85.6025 37.0254C84.3553 36.4587 82.9941 35.965 81.6126 35.5648L82.162 29.0249L78.4232 28.2068L76.3666 34.0252C77.684 33.8237 77.9497 35.7428 76.5593 35.8304C76.0598 35.4273 75.8817 34.8986 76.0979 34.3582C75.8175 34.2969 75.4231 34.3085 75.1427 34.2472C75.0814 34.5276 74.8126 34.8605 74.4183 34.8722C74.1788 34.6239 74.1467 34.3231 74.3015 34.0631C73.5333 33.993 72.8585 33.9433 72.0699 33.9666L71.5092 30.7098L70.9485 27.4529L67.68 27.6192C67.6391 27.8062 67.5047 27.9726 67.3178 27.9317C67.1309 27.8908 67.1513 27.7974 67.1922 27.6104L67.0053 27.5695L66.4559 34.1095C65.045 34.2905 63.7072 34.5855 62.2759 34.86L61.2303 32.4764C61.023 32.529 60.8156 32.5816 60.7016 32.6546C60.5556 32.4268 60.8039 32.1873 61.0317 32.0413L59.5685 28.8807L55.888 30.0343L57.1233 36.475C55.8381 36.9774 54.5324 37.5732 53.2997 38.2829L49.1113 33.2529L47.8582 34.0561C47.7969 34.3365 47.642 34.5965 47.3411 34.6286C47.2477 34.6082 47.1747 34.4942 47.0812 34.4738L45.8281 35.277L46.1523 36.0335C46.2457 36.0539 46.3392 36.0744 46.5057 36.2088C46.4852 36.3023 46.3713 36.3753 46.3713 36.3753L48.6495 41.1832C47.4898 42.0069 46.4032 42.9445 45.41 43.9025L43.9642 42.9005C43.8503 42.9735 43.6429 43.0261 43.4034 42.7778C43.4238 42.6844 43.5377 42.6114 43.5377 42.6114L40.2196 40.3183C40.1057 40.3913 40.1057 40.3913 40.0123 40.3709C40.0327 40.2774 39.9597 40.1634 39.8867 40.0495L37.322 42.8185L40.3537 46.4201C40.9262 46.9372 40.9467 46.8437 41.0402 46.8641ZM42.0863 103.411C41.8672 103.069 42.0308 102.321 42.5391 102.237C43.132 102.66 42.6675 103.44 42.0863 103.411ZM54.2021 108.021C54.2752 108.134 54.3686 108.155 54.4416 108.269C54.3277 108.342 54.4007 108.456 54.4942 108.476C54.3189 108.83 53.6734 108.199 54.2021 108.021ZM51.3163 107.781C50.8898 107.492 51.1585 107.159 51.4273 106.826C51.8537 107.115 51.8245 107.696 51.3163 107.781ZM64.1946 110.697C63.9025 110.241 64.6298 110.498 64.7846 110.238C65.0767 110.694 64.3289 110.53 64.1946 110.697ZM61.9805 109.624C61.8666 109.697 61.7732 109.677 61.6592 109.75C61.5862 109.636 61.4927 109.616 61.4197 109.502C61.6885 109.169 61.4081 109.107 61.8228 109.002C61.9689 109.23 61.8345 109.397 61.9805 109.624ZM62.1412 107.995C62.0273 108.068 62.0069 108.161 61.893 108.234C61.82 108.12 61.7265 108.1 61.6535 107.986C61.7674 107.913 61.7878 107.819 61.9018 107.746C61.9748 107.86 62.0478 107.974 62.1412 107.995ZM73.9183 113.706C73.7021 114.246 73.4304 113.697 73.1705 113.542C73.3253 113.282 73.5853 113.437 73.9183 113.706ZM106.884 48.5378C107.05 48.6722 106.688 48.9847 106.595 48.9643C106.241 48.789 106.665 48.1961 106.884 48.5378ZM96.9414 42.0529C97.0962 41.793 97.2306 41.6265 97.3649 41.46L97.2715 41.4395C97.3854 41.3665 97.4789 41.387 97.5928 41.3139L97.5723 41.4074C97.7797 41.3548 98.0601 41.4162 98.3931 41.6849C97.9258 41.5827 97.5255 42.9643 96.9414 42.0529ZM77.7132 33.2425C78.3529 32.1092 79.2438 31.6185 79.9799 31.3878C80.678 32.2261 78.5982 34.1217 77.7132 33.2425ZM80.3946 34.4168C80.7363 34.1978 81.2241 34.2066 81.3088 34.7148C81.0196 35.1413 80.4267 34.7177 80.3946 34.4168ZM70.5132 30.7856C70.6797 30.92 70.3175 31.2325 70.224 31.2121C69.8706 31.0368 70.2941 30.4439 70.5132 30.7856ZM70.1655 32.3746C70.3729 32.3221 70.2794 32.3016 70.332 32.509C70.3758 33.2042 69.5638 32.4389 70.1655 32.3746ZM76.8074 38.7251C76.6935 38.7981 76.6731 38.8915 76.5592 38.9646C76.4862 38.8506 76.3927 38.8302 76.3197 38.7162C76.4336 38.6432 76.454 38.5498 76.568 38.4768C76.641 38.5907 76.7344 38.6111 76.8074 38.7251ZM76.4716 37.5742C75.9955 37.9598 75.8582 37.2441 76.127 36.9111C76.5943 37.0134 76.2321 37.3259 76.4716 37.5742ZM87.0017 36.4501C87.0338 36.751 86.765 37.0839 86.5167 37.3235C85.582 37.1189 86.4496 35.8396 87.0017 36.4501ZM81.0663 36.7186C80.9699 35.816 81.5424 36.333 82.1325 35.8745C82.8714 36.5259 81.8578 37.5774 81.0663 36.7186ZM75.759 35.4594C75.2624 35.9384 74.7425 35.6288 74.7513 35.141C75.02 34.808 75.6743 34.9512 75.759 35.4594ZM70.1596 33.7446C70.3991 33.9929 70.2238 34.3463 69.8616 34.6588C69.736 34.3375 69.6718 33.7358 70.1596 33.7446ZM71.3776 34.8925C71.4915 34.8195 71.512 34.7261 71.6259 34.653C71.6989 34.767 71.7924 34.7874 71.8654 34.9013C71.7515 34.9744 71.731 35.0678 71.6171 35.1408C71.5441 35.0269 71.4506 35.0064 71.3776 34.8925ZM72.8819 34.7319C73.0279 34.9598 72.8936 35.1263 73.0601 35.2606C72.543 35.8331 72.1867 34.7757 72.8819 34.7319ZM73.1652 35.6754C73.3317 35.8098 73.4047 35.9237 73.5916 35.9646C73.4368 36.2246 73.2703 36.0902 73.1359 36.2567C73.0629 36.1428 73.0834 36.0493 73.0103 35.9354C73.0308 35.8419 73.1447 35.7689 73.1652 35.6754ZM73.0629 36.1428C73.1067 36.838 72.1252 38.1903 71.3541 37.2381C71.9237 36.873 72.2918 35.1905 73.0629 36.1428ZM71.1877 37.1037C69.7564 37.3782 71.5235 38.2545 71.1877 37.1037ZM63.4823 35.6136C63.6487 35.748 63.2865 36.0605 63.1931 36.0401C62.8192 35.9583 63.2632 35.2719 63.4823 35.6136ZM58.7387 35.3593C59.0074 35.0263 59.2557 34.7869 59.5682 35.1491C59.3725 35.596 59.0512 35.7215 58.7387 35.3593ZM60.9001 36.224C61.014 36.151 61.1075 36.1714 61.2214 36.0984C61.2944 36.2123 61.274 36.3058 61.347 36.4197C61.2331 36.4927 61.1396 36.4723 61.0257 36.5453C60.9527 36.4314 61.0666 36.3584 60.9001 36.224ZM77.4121 39.543C77.4851 39.6569 77.5785 39.6773 77.6516 39.7913C77.5376 39.8643 77.5172 39.9577 77.4033 40.0308C77.3303 39.9168 77.2368 39.8964 77.1638 39.7825C77.2572 39.8029 77.3712 39.7299 77.4121 39.543ZM88.5875 42.184C88.4122 42.5374 88.2253 42.4965 87.9974 42.6425C87.6645 42.3738 88.161 41.8948 88.5875 42.184ZM94.663 43.5133C94.809 43.7411 94.6746 43.9076 94.8207 44.1354C94.5724 44.3749 94.3212 43.7324 94.663 43.5133ZM57.7776 36.6182C57.8915 36.5452 57.912 36.4517 58.0259 36.3787C58.0989 36.4926 58.1924 36.5131 58.2654 36.627C58.1515 36.7 58.131 36.7935 58.0171 36.8665C57.9441 36.7526 57.8711 36.6386 57.7776 36.6182ZM67.6941 38.2982C68.0271 38.5669 67.7584 38.8999 67.4575 38.932C67.1245 38.6633 67.3933 38.3303 67.6941 38.2982ZM46.0932 49.7327C45.991 50.2001 45.2637 49.943 45.5558 50.3987C44.8927 50.7433 45.7486 49.0696 46.0932 49.7327ZM44.5422 51.4502C44.3669 51.8036 44.139 51.9497 43.9317 52.0022C43.5052 51.713 44.1566 50.9741 44.5422 51.4502ZM41.5189 53.629C41.4868 53.3282 41.8402 53.5035 42.2959 53.2114C42.772 52.8259 42.6873 52.3176 43.3299 52.0664C43.7885 52.6565 42.8246 53.0332 42.4215 53.5327C41.8635 54.2921 41.3581 55.259 40.3942 55.6357C39.9035 54.7448 41.6561 54.3447 41.5189 53.629ZM39.9502 56.3221C39.7749 56.6755 39.6318 57.3298 39.1235 57.4145C38.6971 57.1253 39.4712 55.8255 39.9502 56.3221ZM39.9531 57.2042C40.2948 56.9852 40.7417 57.1809 41.0105 56.8479C41.3756 57.4175 41.4515 58.4136 40.5489 58.5099C39.7486 58.1389 40.4526 57.6073 39.9531 57.2042ZM31.9027 64.4537C32.5132 63.9016 32.9543 62.3331 33.8072 62.9115C33.5384 63.2444 32.5161 64.7837 31.9027 64.4537ZM39.0501 66.7031C39.3919 66.484 39.8388 66.6798 40.1075 66.3468C40.2535 66.5747 40.2126 66.7616 40.4521 67.0099C40.1104 67.2289 39.6635 67.0332 39.3948 67.3662C39.2487 67.1383 39.2896 66.9514 39.0501 66.7031ZM41.3547 66.9135C41.086 67.2465 40.8056 67.1852 40.4726 66.9164C40.7618 66.49 41.0422 66.5513 41.3547 66.9135ZM46.8108 72.4168C47.6696 71.6253 48.5722 71.5289 49.4222 71.2252C50.1728 72.2709 47.8302 73.1295 46.8108 72.4168ZM52.3431 72.6478C51.6274 72.785 50.2078 73.4539 50.0384 72.4374C50.7103 71.605 51.5836 72.0899 52.3431 72.6478ZM33.4826 71.5575C33.649 71.6918 33.2869 72.0044 33.1934 71.9839C32.7465 71.7882 33.2635 71.2157 33.4826 71.5575ZM43.8898 74.1284C43.4049 75.0017 42.6863 74.2568 42.1693 74.8293C41.3048 73.8566 43.1099 73.6639 43.8898 74.1284ZM35.4628 74.1455C35.5359 74.2595 35.5154 74.3529 35.5885 74.4668C35.4745 74.5399 35.381 74.5194 35.2671 74.5924C35.1941 74.4785 35.2146 74.385 35.1416 74.2711C35.2555 74.1981 35.4219 74.3325 35.4628 74.1455ZM30.2724 73.6954L30.6755 73.196C30.7485 73.3099 30.842 73.3304 30.915 73.4443L30.5119 73.9437C30.4388 73.8298 30.3454 73.8094 30.2724 73.6954ZM39.5141 75.3258C39.7829 74.9928 40.2823 75.3959 40.3145 75.6968C40.0866 75.8428 39.8793 75.8954 39.6514 76.0414C39.298 75.8661 39.7536 75.5741 39.5141 75.3258ZM31.3852 74.4286C31.7065 74.3031 31.6452 74.5835 31.8116 74.7178C31.5634 74.9573 31.5517 74.563 31.3852 74.4286ZM38.4186 79.8853C38.5851 80.0196 38.2229 80.3322 38.1294 80.3117C37.6825 80.116 38.1061 79.5231 38.4186 79.8853ZM32.5708 81.5441C33.0148 80.8577 33.5026 80.8665 34.0634 80.9892C33.5347 81.1674 33.1754 82.362 32.5708 81.5441ZM37.3144 81.7985C37.4809 81.9328 37.5539 82.0468 37.7408 82.0877C37.6181 82.6485 36.7653 82.0701 37.3144 81.7985ZM32.8539 85.6218C32.4684 85.1457 33.0701 85.0814 33.3914 84.9559C33.6835 85.4115 33.0818 85.4758 32.8539 85.6218ZM34.96 85.397C34.7847 85.7504 34.4926 85.2947 34.2443 85.5342C33.8179 85.245 34.5832 84.4331 34.998 84.3279C35.3309 84.5967 34.7409 85.0552 34.96 85.397ZM43.1004 89.8226C43.6174 89.2501 44.19 89.7671 44.3477 90.3893C43.7576 90.8478 43.1646 90.4243 43.1004 89.8226ZM49.4621 92.9775C49.576 92.9044 49.6695 92.9249 49.7834 92.8519C49.8564 92.9658 49.836 93.0592 49.909 93.1732C49.7951 93.2462 49.7016 93.2257 49.5877 93.2988C49.6082 93.2053 49.6286 93.1118 49.4621 92.9775ZM47.9783 93.0446C48.3317 93.2199 47.876 93.5119 48.1155 93.7602C47.8877 93.9062 47.7007 93.8654 47.5343 93.731C47.4087 93.4097 47.5635 93.1497 47.9783 93.0446ZM45.624 93.5089C45.9132 93.0825 46.36 93.2782 46.3717 93.6725C46.2373 93.839 45.9569 93.7777 45.624 93.5089ZM47.7241 94.654C47.7124 94.2597 47.8584 94.4875 48.1272 94.1545C48.761 94.3912 48.2031 95.1506 47.7241 94.654ZM53.7703 96.5646C53.8959 96.8859 54.042 97.1137 53.7732 97.4467C53.4402 97.1779 53.376 96.5762 53.7703 96.5646ZM55.7682 98.177C55.5404 98.3231 55.3534 98.2822 55.1869 98.1478C55.4236 97.5139 55.7565 97.7827 55.7682 98.177ZM46.6579 95.4981C47.1545 95.0191 47.5108 96.0765 46.8156 96.1203C46.763 95.9129 46.8039 95.726 46.6579 95.4981ZM49.1114 96.8185C49.2779 96.9529 48.9157 97.2654 48.8222 97.2449C48.4688 97.0697 48.8924 96.4767 49.1114 96.8185ZM47.5049 97.4464C47.6188 97.3734 47.7123 97.3938 47.8262 97.3208C47.8992 97.4347 47.8788 97.5282 47.9518 97.6421C47.8379 97.7151 47.7444 97.6947 47.6305 97.7677C47.537 97.7473 47.6714 97.5808 47.5049 97.4464ZM66.8735 101.586C66.9465 101.7 67.04 101.721 67.113 101.835C66.9991 101.908 66.9786 102.001 66.8647 102.074C66.7917 101.96 66.6982 101.94 66.6252 101.826C66.7391 101.753 66.853 101.68 66.8735 101.586ZM56.9979 99.7193C57.3192 99.5938 57.2578 99.8742 57.4243 100.009C57.103 100.134 57.1643 99.8537 56.9979 99.7193ZM68.848 102.41C69.0583 103.24 68.0009 103.596 67.811 102.673C68.1002 102.246 68.4011 102.214 68.848 102.41ZM59.3375 101.113C59.4923 100.853 59.6588 100.987 59.7931 100.821C59.8661 100.935 59.8457 101.028 59.9187 101.142C59.7844 101.308 59.5974 101.268 59.3375 101.113ZM66.4294 102.273C66.1403 102.699 65.7138 102.41 65.6817 102.109C65.8161 101.943 66.0965 102.004 66.4294 102.273ZM52.596 99.246C52.6515 100.335 51.1355 100.102 50.9457 99.1787C51.3488 98.6792 52.0147 99.2167 52.596 99.246ZM66.5054 103.269C66.1841 103.394 66.2454 103.114 66.0789 102.98C66.4207 102.76 66.3593 103.041 66.5054 103.269ZM47.426 98.7024C47.312 98.7754 47.2916 98.8689 47.1777 98.9419C47.1046 98.828 47.0112 98.8076 46.9382 98.6937C47.0521 98.6206 47.0725 98.5271 47.1864 98.4541C47.2595 98.568 47.3325 98.682 47.426 98.7024ZM44.5517 98.8571C44.5079 98.1619 45.4836 98.1795 45.4339 98.8542C45.1126 98.9798 44.8847 99.1258 44.5517 98.8571ZM45.1038 99.4676C45.2586 99.2076 45.4251 99.342 45.5594 99.1755C45.6325 99.2895 45.612 99.3829 45.685 99.4968C45.5507 99.6633 45.3433 99.7159 45.1038 99.4676ZM62.2612 103.417C62.6672 103.8 62.0772 104.259 61.6712 103.876C61.6799 103.388 62.0129 103.657 62.2612 103.417ZM51.7313 101.407C51.8452 101.334 51.9387 101.355 52.0526 101.282C52.1256 101.396 52.1052 101.489 52.1782 101.603C52.0643 101.676 51.9708 101.656 51.8569 101.729C51.8569 101.729 51.8978 101.542 51.7313 101.407ZM53.6561 102.906C53.8519 102.459 54.0797 102.313 54.2871 102.26C54.401 102.187 54.328 102.073 54.2345 102.053C54.3689 101.887 54.6084 102.135 54.7749 102.269C54.7544 102.363 54.6405 102.436 54.547 102.415C54.7135 102.55 54.7661 102.757 54.8187 102.964C54.4565 103.277 54.0621 103.289 53.6561 102.906ZM67.1216 104.481C67.7233 104.417 68.2666 105.515 68.7252 106.105C67.9803 106.824 66.4702 105.22 67.1216 104.481ZM52.254 105.733C52.6804 106.023 53.25 105.657 53.2938 106.353C52.879 106.458 52.5051 106.376 52.1225 106.782C51.8713 106.139 51.4565 106.244 51.0008 106.537C50.6153 106.06 51.1323 105.488 51.3485 104.948C51.9707 104.79 52.2423 105.339 52.254 105.733ZM70.6674 109.762C70.7813 109.689 70.8748 109.71 70.9887 109.637C71.0618 109.75 71.1552 109.771 71.2282 109.885C71.1873 110.072 70.9274 109.917 70.6674 109.762ZM73.9797 110.291C73.6468 110.022 73.9155 109.689 74.2164 109.657C74.5493 109.926 74.2806 110.259 73.9797 110.291ZM71.5467 108.877C71.1202 108.588 71.6168 108.109 71.7921 107.755C72.0111 108.097 72.0228 108.492 71.5467 108.877ZM65.3222 106.438C65.2083 106.511 65.1148 106.49 65.0009 106.563C64.9279 106.45 64.9484 106.356 64.8754 106.242C64.9893 106.169 65.0827 106.19 65.1966 106.117C65.2901 106.137 65.1558 106.304 65.3222 106.438ZM56.7143 105.044C56.837 104.483 57.2927 104.191 57.541 103.952C57.7396 104.387 57.2663 105.655 56.7143 105.044ZM53.3844 105.491C53.1536 104.755 53.8051 104.016 54.0826 103.195C54.5207 103.879 53.7554 104.691 53.3844 105.491ZM75.4958 107.391C75.2271 107.724 74.9262 107.756 74.5933 107.487C74.8094 106.947 75.4842 106.996 75.4958 107.391ZM72.1923 106.374C72.0579 106.54 71.944 106.613 71.7571 106.573C71.7892 106.873 71.2926 107.352 71.3218 106.771L71.3832 106.491C71.2167 106.356 71.1641 106.149 71.0181 105.921C70.8516 105.787 70.7786 105.673 70.726 105.465L70.8399 105.392L70.8604 105.299C71.7922 104.621 72.0346 105.752 72.1923 106.374ZM82.503 111.176C82.2547 111.416 82.0882 111.282 81.7553 111.013C82.0445 110.586 82.4913 110.782 82.503 111.176ZM82.6433 109.64C82.4155 109.786 82.2285 109.745 81.9802 109.985C81.8342 109.757 81.8751 109.57 81.6356 109.322C81.8634 109.176 82.0504 109.216 82.2987 108.977C82.5586 109.132 82.4038 109.392 82.6433 109.64ZM85.0152 108.2L84.612 108.7L84.1126 108.296L84.5157 107.797L85.0152 108.2ZM76.9447 106.14C76.6555 106.567 76.3546 106.599 76.0421 106.237C76.2378 105.79 76.5387 105.758 76.9447 106.14ZM52.891 100.584C53.2211 99.9704 53.6592 100.654 53.9279 100.321C54.1061 100.85 53.183 101.039 52.891 100.584ZM75.5923 105.159C75.3557 105.793 74.8855 104.808 74.6897 105.255C74.3977 104.8 75.6011 104.671 75.5923 105.159ZM73.6383 104.242C73.5244 104.315 73.5039 104.408 73.39 104.481C73.3169 104.367 73.2235 104.347 73.1505 104.233C73.2644 104.16 73.2848 104.066 73.3987 103.993C73.4718 104.107 73.5448 104.221 73.6383 104.242ZM75.2244 103.707C75.0491 104.061 74.7687 103.999 74.5087 103.844C74.684 103.491 74.8914 103.438 75.2244 103.707ZM76.1269 103.611C75.3908 103.842 76.0919 102.428 76.3723 102.489C76.8923 102.799 75.9079 103.269 76.1269 103.611ZM75.3237 102.358C75.7706 102.553 75.4084 102.866 75.6684 103.021C75.4405 103.167 75.274 103.032 75.1397 103.199C74.7862 103.024 75.055 102.691 75.3237 102.358ZM72.6364 102.553C72.3035 102.285 72.2188 101.776 72.6336 101.671C72.7592 101.993 72.8847 102.314 72.6364 102.553ZM94.599 103.343C94.6428 104.038 93.9243 103.293 94.4325 103.209C94.7334 103.176 94.6399 103.156 94.599 103.343ZM89.5897 101.17C89.0172 100.653 89.5342 100.08 90.1564 99.9223C90.7084 100.533 90.1914 101.105 89.5897 101.17ZM83.2777 97.3399C82.784 98.7011 81.6769 99.7321 80.2047 100.194C78.7325 100.655 77.3013 100.929 75.7765 101.184C75.7152 101.464 75.2799 101.663 75.0726 101.715C74.9061 101.581 74.947 101.394 74.9674 101.3C74.0648 101.397 73.2557 101.513 72.3736 101.516C71.5849 101.54 70.7963 101.563 69.9346 101.472C69.9667 101.773 69.958 102.261 69.9696 102.655C70.3844 102.55 70.9043 102.86 70.916 103.254C70.6472 103.587 70.2734 103.505 69.9199 103.33C69.8177 103.798 69.4759 104.017 68.7691 103.666C69.0583 103.24 69.0466 102.845 69.5432 102.366C69.625 101.992 69.5929 101.692 69.6338 101.505C65.7518 101.341 61.9605 100.315 58.5927 98.6971L58.1896 99.1966L57.6902 98.7934C57.8041 98.7204 57.845 98.5335 57.9589 98.4605C57.7924 98.3261 57.6055 98.2852 57.3455 98.1304C57.3046 98.3173 57.0038 98.3494 56.8986 97.9347C55.6718 97.2745 54.3721 96.5004 53.2797 95.6737C52.9583 95.7993 52.7714 95.7584 52.5728 95.3231C52.5933 95.2297 52.5933 95.2296 52.6867 95.2501C52.4268 95.0952 52.1873 94.847 51.9273 94.6922C51.8134 94.7652 51.7929 94.8586 51.679 94.9317C51.752 95.0456 51.939 95.0865 52.012 95.2004C51.8572 95.4604 51.5154 95.6794 51.7754 95.8343C51.568 95.8868 51.3285 95.6385 51.3168 95.2442C50.975 95.4633 50.6742 95.4953 50.2477 95.2061C50.6099 94.8936 51.0131 94.3942 51.3548 94.1751C50.5224 93.5033 49.8039 92.7584 49.0853 92.0135L49.1584 92.1275C48.7962 92.44 48.5975 92.0048 48.6998 91.5374C46.5121 89.0019 44.5932 86.1334 43.3373 82.9204C43.1416 83.3672 42.5078 83.1306 42.1251 83.5366C41.7805 82.8736 41.1583 83.0313 40.9071 82.3886C41.2577 81.6818 41.7367 82.1784 42.1106 82.2602C42.391 82.3216 42.8788 82.3303 43.1387 82.4852C42.8145 81.7286 42.6043 80.899 42.2801 80.1425C41.8916 78.7843 42.1254 77.2683 42.9725 76.0824C43.3961 75.4895 43.9861 75.031 44.5557 74.6659C44.4506 74.2511 44.6463 73.8042 45.1341 73.813C45.3006 73.9473 45.2597 74.1343 45.3123 74.3417C45.727 74.2365 46.1418 74.1314 46.6501 74.0467L57.8052 73.647C57.7731 73.3462 57.8344 73.0657 57.5949 72.8174C58.0506 72.5254 58.3222 73.0745 58.293 73.6558L67.5699 73.3349C69.2407 73.3087 70.8209 74.1442 71.6971 75.5112L80.544 89.6899C80.5645 89.5964 80.6784 89.5234 80.6988 89.4299C80.7719 89.5438 80.8653 89.5642 80.9383 89.6782C80.8244 89.7512 80.804 89.8447 80.6901 89.9177C80.6901 89.9177 80.5966 89.8972 80.617 89.8038L82.7871 93.3149C83.6108 94.4745 83.7714 95.9788 83.2777 97.3399ZM58.442 71.6316C58.1003 71.8507 57.6534 71.6549 57.3846 71.9879C57.2386 71.7601 57.2795 71.5731 57.04 71.3248C57.3817 71.1058 57.8286 71.3015 58.0974 70.9685C58.3369 71.2168 58.1821 71.4768 58.442 71.6316ZM63.5507 72.4555C63.6237 72.5695 63.7172 72.5899 63.7902 72.7038C63.6763 72.7768 63.6559 72.8703 63.5419 72.9433C63.4689 72.8294 63.3755 72.809 63.3024 72.695C63.4164 72.622 63.4368 72.5286 63.5507 72.4555ZM82.6735 87.1195C82.7465 87.2334 82.84 87.2539 82.913 87.3678C82.7991 87.4408 82.7786 87.5343 82.6647 87.6073C82.5917 87.4934 82.4982 87.473 82.4252 87.359C82.5187 87.3795 82.6531 87.213 82.6735 87.1195ZM82.7989 90.575C81.7328 91.4191 81.7475 89.5614 81.1954 88.9509C82.1477 88.1798 82.5478 89.9324 82.7989 90.575ZM94.5702 94.5217C94.9762 94.9044 94.3336 95.1555 94.0853 95.3951C93.5449 95.1789 94.208 94.8342 93.875 94.5655C94.1437 94.2325 94.4153 94.7817 94.5702 94.5217ZM95.4288 96.8644C95.5836 96.6044 95.7501 96.7388 95.8845 96.5723C95.9575 96.6862 95.9371 96.7796 96.0101 96.8936C95.8027 96.9461 95.5953 96.9987 95.4288 96.8644ZM88.9181 95.7337C89.0934 95.3802 89.3738 95.4416 89.6337 95.5964C89.4585 95.9498 89.2511 96.0024 88.9181 95.7337ZM94.056 95.9763C94.2634 95.9237 94.1699 95.9033 94.2225 96.1107C94.2663 96.8059 93.5478 96.061 94.056 95.9763ZM88.1499 95.6635C88.2229 95.7774 88.2024 95.8709 88.2755 95.9848C88.0476 96.1309 87.8607 96.09 87.6942 95.9556C87.7351 95.7687 87.9221 95.8095 88.1499 95.6635ZM93.1504 98.3247C93.3169 98.4591 92.9547 98.7716 92.8612 98.7512C92.4874 98.6694 92.9314 97.983 93.1504 98.3247ZM98.7587 96.4176C99.3312 96.9346 99.6292 96.0204 100.222 96.444C100.181 96.6309 100.14 96.8178 100.307 96.9522C100.038 97.2852 99.673 96.7156 99.4042 97.0485C99.4889 97.5568 100.701 96.9405 100.871 97.957C100.529 98.1761 100.094 98.3747 99.6992 98.3863C99.6057 98.3659 99.4597 98.138 99.2727 98.0971C98.7119 97.9744 97.9963 98.1117 97.5698 97.8225C97.1551 97.9277 96.6673 97.9188 96.232 98.1175C95.9925 97.8692 96.3343 97.6501 95.8874 97.4544C96.1357 97.2149 96.2905 96.9549 96.5592 96.622C97.1726 96.9521 97.5845 95.9648 98.2709 96.4088C98.4053 96.2423 98.4257 96.1489 98.3527 96.0349C98.6215 95.702 98.3848 96.3358 98.7587 96.4176ZM96.7521 95.2929C96.6382 95.3659 96.5447 95.3455 96.4308 95.4185C96.3578 95.3046 96.3782 95.2111 96.3052 95.0972C96.4191 95.0242 96.5126 95.0446 96.6265 94.9716C96.6995 95.0855 96.6791 95.179 96.7521 95.2929ZM99.8249 95.5735C99.711 95.6465 99.6175 95.626 99.5036 95.699C99.4306 95.5851 99.451 95.4917 99.378 95.3777C99.4919 95.3047 99.5854 95.3252 99.6993 95.2521C99.7723 95.3661 99.6584 95.4391 99.8249 95.5735ZM99.7695 94.484C99.6555 94.557 99.6351 94.6504 99.5212 94.7235C99.4481 94.6095 99.3547 94.5891 99.2817 94.4752C99.3956 94.4022 99.416 94.3087 99.5299 94.2357C99.603 94.3496 99.6964 94.37 99.7695 94.484ZM96.6236 94.0895C96.1972 93.8003 96.6733 93.4148 96.2468 93.1256C96.6909 92.4392 97.3364 93.0701 97.8972 93.1929C98.1075 94.0224 96.9011 93.2687 96.6236 94.0895ZM98.9458 93.3243C98.6625 92.3808 98.2009 94.0428 98.9458 93.3243ZM100.471 93.0703C100.181 93.4967 99.8688 93.1345 99.5066 93.447C99.3285 92.9183 100.158 92.7081 100.471 93.0703ZM98.2565 91.9982C98.1017 92.2581 97.9352 92.1238 97.8008 92.2903C97.3218 91.7937 97.7249 91.2942 97.2459 90.7976C98.0229 90.3799 98.0579 91.5629 98.2565 91.9982ZM94.7981 91.2415C94.7251 91.1276 94.7456 91.0341 94.6726 90.9202C94.7865 90.8472 94.88 90.8676 94.9939 90.7946C95.0669 90.9085 95.0464 91.002 95.1195 91.1159C95.026 91.0955 94.9325 91.075 94.7981 91.2415ZM98.1661 89.7257C98.0405 89.4044 98.3209 89.4657 98.4553 89.2992C98.5809 89.6205 98.3004 89.5592 98.1661 89.7257ZM104.154 89.6646C104.04 89.7376 103.947 89.7171 103.833 89.7902C103.76 89.6762 103.78 89.5828 103.707 89.4689C103.821 89.3959 103.914 89.4163 104.028 89.3433C104.101 89.4572 104.081 89.5507 104.154 89.6646ZM108.608 90.3454C108.182 90.0562 108.378 89.6093 108.772 89.5976C109.012 89.8459 108.877 90.0124 108.608 90.3454ZM99.0717 87.3773C98.8964 87.7307 98.6569 87.4824 98.4904 87.348C98.6043 87.275 98.6978 87.2955 98.8117 87.2224C98.9052 87.2429 98.9782 87.3568 99.0717 87.3773ZM103.801 86.3551C103.418 86.7611 102.959 86.1711 103.342 85.7651C103.696 85.9404 103.655 86.1273 103.801 86.3551ZM101.75 84.5353C101.327 85.1283 101.157 84.1118 100.918 83.8635C101.581 83.5188 101.116 84.2987 101.75 84.5353ZM100.658 83.7086C100.348 84.2285 99.8488 83.8255 99.7437 83.4107C100.065 83.2851 100.646 83.3143 100.658 83.7086ZM101.967 80.8608C101.572 80.8725 101.222 81.5793 100.795 81.2901C101.417 81.1324 101.166 80.4898 101.788 80.3321C101.955 80.4665 101.821 80.633 101.967 80.8608ZM110.759 81.4132C110.645 81.4862 110.624 81.5797 110.51 81.6527C110.437 81.5388 110.344 81.5183 110.271 81.4044C110.385 81.3314 110.405 81.238 110.519 81.1649C110.592 81.2789 110.665 81.3928 110.759 81.4132ZM108.659 80.2681C108.772 80.1951 108.793 80.1016 108.907 80.0286C108.98 80.1425 109.094 80.0695 109.114 79.9761C109.468 80.1513 108.857 80.7033 108.659 80.2681ZM106.748 80.0461C106.062 79.602 107.067 79.0384 107.075 78.5506C107.575 78.9537 107.265 79.4736 106.748 80.0461ZM102.113 77.9545C102.373 78.1093 101.856 78.6817 101.657 78.2465C101.771 78.1735 101.791 78.08 101.905 78.007C101.978 78.1209 101.999 78.0275 102.113 77.9545ZM105.79 79.0529C105.539 78.4103 106.62 78.8426 105.79 79.0529ZM112.321 80.0901C111.988 79.8214 112.257 79.4884 112.558 79.4563C112.891 79.725 112.622 80.058 112.321 80.0901ZM111.144 78.7552C110.855 79.1816 110.732 79.7425 110.099 79.5058C110.689 79.0473 110.478 78.2177 111.144 78.7552ZM107.782 78.9011C107.283 78.498 107.487 77.5633 108.109 77.4056C108.495 77.8817 108.393 78.349 107.782 78.9011ZM105.271 72.4749C104.73 72.2587 105.3 71.8936 105.06 71.6453C105.496 71.4467 105.633 72.1624 105.271 72.4749ZM102.881 68.6221C102.268 68.292 103.013 67.5735 103.334 67.4479C103.74 67.8306 103.171 68.1956 102.881 68.6221ZM101.634 68.0554C101.789 67.7954 101.956 67.9298 102.09 67.7633C102.163 67.8772 102.142 67.9707 102.215 68.0846C101.988 68.2306 101.78 68.2832 101.634 68.0554ZM102.835 67.0447C102.551 66.1013 101.996 67.7428 102.835 67.0447ZM101.847 66.6329L101.348 66.2297L101.751 65.7303L102.251 66.1334L101.847 66.6329ZM112.033 67.9799C111.749 67.0364 111.215 68.5845 112.033 67.9799ZM102.657 66.516C102.966 65.9961 103.381 65.891 103.723 65.672C104.129 66.0546 103.083 66.8052 102.657 66.516ZM104.009 64.3634C103.136 63.8784 103.279 63.2242 102.914 62.6546C104.094 61.7374 104.742 63.2505 104.009 64.3634ZM102.108 63.6535L101.608 63.2504L102.011 62.751L102.511 63.1541L102.108 63.6535ZM102.204 61.4219C102.651 61.6176 102.289 61.9301 102.549 62.085C102.146 62.5844 101.915 61.8484 102.204 61.4219ZM106.331 63.5982C106.206 63.2769 106.515 62.757 106.784 62.424C107.097 62.7862 106.746 63.4931 106.331 63.5982ZM109.766 60.432C109.372 60.4437 109.013 61.6384 108.513 61.2353C108.823 60.7154 109.267 60.0289 109.766 60.432ZM104.646 59.2138C104.418 59.3598 104.231 59.3189 104.065 59.1845C104.033 58.8837 104.301 58.5507 104.602 58.5186C104.862 58.6734 104.407 58.9655 104.646 59.2138ZM110.292 59.3717C110.324 59.6726 110.015 60.1925 109.62 60.2042C109.401 59.8624 109.556 59.6025 109.731 59.249C109.939 59.1965 110.126 59.2374 110.292 59.3717ZM109.626 58.8343C109.512 58.9073 109.419 58.8869 109.305 58.9599C109.232 58.846 109.252 58.7525 109.179 58.6385C109.293 58.5655 109.387 58.586 109.501 58.513C109.574 58.6269 109.553 58.7204 109.626 58.8343ZM105.575 57.6541C105.213 57.9666 104.383 58.1769 104.299 57.6686C104.661 57.3561 105.49 57.1458 105.575 57.6541ZM97.6827 56.1231C98.5385 57.5836 99.1868 59.0967 99.8352 60.6098C100.189 60.7851 100.501 61.1473 100.513 61.5416C100.399 61.6146 100.285 61.6876 100.192 61.6672C101.062 64.4042 101.611 67.2667 101.652 70.2139C101.695 70.9091 101.625 71.6773 101.669 72.3725C101.71 72.1856 101.844 72.0191 101.792 71.8117C102.32 71.6336 102.189 72.6822 101.92 73.0152C101.754 72.8808 101.681 72.7668 101.701 72.6733C101.622 73.9293 101.543 75.1854 101.257 76.4939C100.708 79.8997 99.5041 83.1624 97.7602 86.2088C97.8537 86.2293 97.9471 86.2498 98.0202 86.3637C97.2111 86.4805 97.7222 87.2779 97.8273 87.6927C97.3921 87.8913 96.8429 88.1629 96.4077 88.3615C95.5401 89.6408 94.5995 90.8063 93.5859 91.8578C93.5859 91.8578 93.6794 91.8782 93.6589 91.9717C93.9803 91.8461 94.3863 92.2287 94.7806 92.2171C95.1749 92.2054 94.7806 92.2171 95.0727 92.6728C95.3647 93.1285 95.9255 93.2512 95.9168 93.739C95.7415 94.0924 95.5546 94.0515 95.3267 94.1975C94.9733 94.0222 94.2548 93.2774 93.7377 93.8499C93.5187 93.5081 93.7874 93.1751 93.6414 92.9473C93.4954 92.7194 93.2354 92.5646 93.0484 92.5237C92.0757 93.3883 90.811 93.7972 89.5754 93.6248C88.5268 93.4933 87.5395 93.0814 86.821 92.3365C86.5815 92.0882 86.269 91.726 86.0499 91.3843L74.9599 73.5806C74.6678 73.1249 74.4896 72.5962 74.405 72.0879C74.3115 72.0675 74.2911 72.161 74.2911 72.161C74.218 72.0471 74.2385 71.9536 74.1655 71.8397C74.2794 71.7667 74.3728 71.7871 74.4868 71.7141C74.4021 71.2059 74.4109 70.7181 74.5131 70.2507C74.6154 69.7834 74.7176 69.316 75.0068 68.8896L76.8121 65.5627L76.7391 65.4488C76.853 65.3757 76.8735 65.2823 76.9874 65.2093L77.0809 65.2297L85.0236 50.415C85.7042 49.0948 86.9778 48.1982 88.3886 48.0171C89.8199 47.7426 91.2949 48.1633 92.3464 49.1769C94.5429 51.2246 96.3771 53.5848 97.8901 56.0706C98.2202 55.4572 98.6758 55.1651 99.0906 55.06C99.3827 55.5157 98.4217 56.7745 97.6827 56.1231ZM73.4877 74.042C73.1138 73.9602 73.5578 73.2738 73.7769 73.6156C73.9434 73.75 73.6746 74.0829 73.4877 74.042ZM72.5181 69.5204C72.9943 69.1349 73.4119 69.9118 72.9358 70.2973C72.8423 70.2769 72.7693 70.163 72.6759 70.1425C72.9884 70.5048 73.0731 71.013 73.0643 71.5008C72.8598 72.4355 72.0419 73.0401 71.0867 72.9291C70.152 72.7246 69.5475 71.9067 69.6585 70.9515C69.7695 69.9964 70.6809 69.4122 71.636 69.5232C72.0099 69.605 72.4568 69.8008 72.6759 70.1425C72.5298 69.9147 72.6642 69.7482 72.5181 69.5204ZM74.0049 70.3354C74.2444 70.5837 74.0691 70.9371 73.7069 71.2496C73.187 70.94 73.6105 70.3471 74.0049 70.3354ZM74.23 66.173C73.9087 66.2986 73.97 66.0182 73.8035 65.8839C74.1453 65.6648 74.0635 66.0387 74.23 66.173ZM76.0235 65.586C76.0351 65.9803 75.5911 66.6668 75.1121 66.1702C74.9865 65.8489 75.5445 65.0894 76.0235 65.586ZM77.4403 60.9009C77.3673 60.787 77.3878 60.6935 77.3147 60.5796C77.4287 60.5066 77.5221 60.527 77.636 60.454C77.7091 60.5679 77.6886 60.6614 77.7616 60.7753C77.6477 60.8483 77.5542 60.8279 77.4403 60.9009ZM78.0129 58.2838C78.2524 58.532 78.5124 58.6869 78.8454 58.9556C78.5562 59.3821 78.2962 59.2272 78.2641 58.9264C78.1297 59.0928 78.0158 59.1659 77.9749 59.3528C77.455 59.0432 77.7237 58.7102 78.0129 58.2838ZM77.5018 57.4863C77.6479 57.7142 77.5135 57.8806 77.6595 58.1085C77.2769 58.5144 77.0257 57.8719 77.5018 57.4863ZM79.4385 56.245C79.3654 56.1311 79.3859 56.0376 79.3129 55.9237C79.4268 55.8507 79.5203 55.8711 79.6342 55.7981C79.7072 55.912 79.6868 56.0055 79.7598 56.1194C79.6663 56.0989 79.4794 56.058 79.4385 56.245ZM81.7082 52.1382C81.8221 52.0652 81.8426 51.9717 81.9565 51.8987C82.2165 52.0536 82.0821 52.2201 82.2486 52.3544C81.9068 52.5735 81.7403 52.4391 81.7082 52.1382ZM80.7794 50.5638C81.0482 50.2309 81.3812 50.4996 81.4133 50.8004C81.1445 51.1334 80.8115 50.8647 80.7794 50.5638ZM82.938 50.5464C83.6508 49.527 84.4306 49.9915 84.2261 50.9262C83.7909 51.1248 83.0431 50.9612 82.938 50.5464ZM81.9245 48.4637C81.5916 48.195 81.8603 47.862 82.1611 47.8298C82.4941 48.0986 82.2254 48.4316 81.9245 48.4637ZM85.2953 47.83C84.9214 47.7482 85.3655 47.0618 85.5845 47.4036C85.7306 47.6314 85.3888 47.8505 85.2953 47.83ZM97.5718 53.9441C97.9047 54.2129 97.8434 54.4932 97.5747 54.8262C97.1687 54.4435 97.084 53.9353 97.5718 53.9441ZM100.294 54.9315C99.2074 55.8691 98.8249 53.1409 100.101 53.1263C100.767 53.6638 99.7216 54.4144 100.294 54.9315ZM103.653 50.7693C103.385 51.1023 103.136 51.3418 102.824 50.9796C102.812 50.5853 103.32 50.5005 103.653 50.7693ZM100.849 53.2899C99.7363 52.5567 101.536 50.5998 102.272 50.3691C103.084 51.1344 101.354 52.3231 100.849 53.2899ZM100.081 50.0857C99.7481 49.8169 100.017 49.4839 100.318 49.4518C100.651 49.7206 100.382 50.0535 100.081 50.0857ZM91.8529 47.4038C92.069 46.8635 92.402 47.1322 92.6298 46.9862C93.0563 47.2754 92.2793 47.693 91.8529 47.4038ZM95.8487 47.4946C95.9217 47.6085 96.0152 47.629 96.0882 47.7429C95.9743 47.8159 95.9538 47.9094 95.8399 47.9824C95.7669 47.8685 95.6734 47.848 95.6004 47.7341C95.7143 47.6611 95.8283 47.5881 95.8487 47.4946ZM98.8309 48.6368C98.5914 48.3885 98.7667 48.0351 99.0676 48.003C99.4005 48.2717 99.1318 48.6047 98.8309 48.6368ZM95.8049 46.7994C95.691 46.8724 95.6705 46.9659 95.5566 47.0389C95.4836 46.925 95.3901 46.9045 95.3171 46.7906C95.4311 46.7176 95.4515 46.6241 95.5654 46.5511C95.6384 46.665 95.7319 46.6855 95.8049 46.7994ZM75.0402 40.9829C75.268 40.8368 75.455 40.8777 75.6215 41.0121C75.4871 41.1786 75.3001 41.1377 75.0402 40.9829ZM57.0327 37.3367C57.4592 37.6259 56.7143 38.3445 56.4134 38.3766C56.1009 38.0144 56.7319 37.3688 57.0327 37.3367ZM65.372 39.0634C65.445 39.1773 65.5384 39.1977 65.6115 39.3116C65.3427 39.6446 65.6027 39.7995 65.2084 39.8111C65.1353 39.6972 65.0419 39.6768 64.9688 39.5628C64.9572 39.1685 65.1032 39.3964 65.372 39.0634ZM55.9578 38.6686C56.0308 38.7825 56.0103 38.876 56.0834 38.99C55.8555 39.136 55.6686 39.0951 55.5021 38.9607C55.6569 38.7008 55.8234 38.8351 55.9578 38.6686ZM54.3074 38.6014C54.3804 38.7153 54.4739 38.7357 54.547 38.8496C54.433 38.9227 54.4126 39.0162 54.2986 39.0892C54.2256 38.9753 54.1322 38.9548 54.0591 38.8409C54.1731 38.7679 54.287 38.6949 54.3074 38.6014ZM52.3446 38.1719C52.2716 38.058 52.1781 38.0376 52.1051 37.9236C52.4556 37.2168 52.9259 38.2012 52.3446 38.1719ZM49.8648 35.1808C50.2387 35.2626 50.6651 35.5517 51.039 35.6335C50.7089 36.2469 50.2942 36.3521 49.9728 36.4777C49.6603 36.1155 49.1609 35.7124 49.8648 35.1808ZM48.4248 35.9431C49.2748 35.6393 49.8297 37.132 50.1013 37.6811C49.003 38.2244 49.0703 36.574 48.4248 35.9431ZM47.8902 37.4911C48.0041 37.4181 48.0245 37.3247 48.1385 37.2517C48.3984 37.4065 48.2641 37.5729 48.4305 37.7073C48.0888 37.9264 47.9223 37.792 47.8902 37.4911ZM49.8852 38.2215C50.1539 37.8885 50.4869 38.1572 50.519 38.4581C50.2502 38.791 49.9173 38.5223 49.8852 38.2215ZM54.6024 39.9392C54.5001 40.4065 55.207 40.7571 55.4056 41.1923C54.836 41.5574 54.284 40.9469 53.7027 40.9177C53.5246 40.389 54.2081 39.9509 54.6024 39.9392ZM56.8982 40.6374C57.0968 41.0726 56.3082 41.0959 56.0687 40.8477C56.2848 40.3073 56.6295 40.9704 56.8982 40.6374ZM51.658 40.8621C51.8333 40.5086 51.6142 40.1669 52.029 40.0618C52.3824 40.237 52.1342 40.4765 51.9998 40.643C52.6132 40.9731 53.3814 41.0432 53.3317 41.718C53.1769 41.9779 52.9169 41.8231 52.7416 42.1766C52.2422 41.7735 52.4584 41.2331 51.658 40.8621ZM56.0335 42.7988C56.2409 42.7463 56.1475 42.7259 56.2 42.9332C56.2643 43.535 55.5253 42.8835 56.0335 42.7988ZM49.254 42.0011C49.368 41.9281 49.4615 41.9486 49.5754 41.8755C49.6484 41.9895 49.6279 42.0829 49.7009 42.1968C49.587 42.2699 49.4936 42.2494 49.3796 42.3224C49.4001 42.229 49.4205 42.1355 49.254 42.0011ZM51.6346 43.2076C52.0377 42.7081 52.4203 42.3022 52.9198 42.7053C52.4115 42.7899 52.0815 43.4033 51.6346 43.2076ZM54.5029 44.4228C54.5613 43.2603 53.4338 44.3848 54.5029 44.4228ZM50.0894 43.5551C50.3581 43.2222 50.6911 43.4909 50.8167 43.8122C50.951 43.6457 51.1789 43.4997 51.2928 43.4266C51.5528 43.5815 51.3366 44.1218 50.9948 44.3409C50.6647 44.9543 50.2354 43.783 50.0894 43.5551ZM54.9819 44.9194C55.1279 45.1473 54.9936 45.3137 55.1396 45.5416C54.643 46.0206 54.4941 44.9106 54.9819 44.9194ZM50.323 45.1733C50.0221 45.2054 49.7534 45.5384 49.5781 45.8919C49.0991 45.3953 49.7301 44.7498 50.323 45.1733ZM70.3492 40.9359C73.016 40.8338 75.6945 41.126 78.3116 41.6987C79.7137 42.0054 80.9521 43.0599 81.5479 44.3656C82.1437 45.6713 82.0969 47.2282 81.4163 48.5484L75.4746 59.5893L74.9488 60.6496C75.1883 60.8979 75.5008 61.2601 75.6264 61.5814C75.1707 61.8734 74.8377 61.6047 74.6187 61.263L73.8241 62.6562C74.0111 62.6971 74.2185 62.6445 74.3937 62.2911C74.8406 62.4868 74.4784 62.7994 74.7384 62.9542C74.5105 63.1002 74.3031 63.1528 74.0227 63.0914C73.754 63.4244 73.4444 63.9443 73.1435 63.9764L71.5135 66.9499C70.6985 68.4366 69.2175 69.3859 67.5467 69.4121L52.4483 69.9284C52.46 70.3227 52.2643 70.7696 51.683 70.7404C51.537 70.5126 51.5048 70.2117 51.4727 69.9108L46.5334 70.1034C45.0496 70.1705 43.7293 69.4899 42.6983 68.3828C41.8542 67.3167 41.4658 65.9584 41.6586 64.6293L41.72 64.3489C42.1903 62.1992 42.9206 60.2042 43.8174 58.3436C43.724 58.3231 43.5166 58.3757 43.4231 58.3552C42.5498 57.8703 42.5995 57.1956 42.7222 56.6348C43.3852 56.2902 44.2148 56.0799 45.0239 55.9631C50.2878 47.1245 59.7023 41.2509 70.3492 40.9359ZM49.1954 46.2979C49.0406 46.5578 48.8128 46.7038 48.658 46.9638C48.0971 46.8411 48.9238 45.7487 49.1954 46.2979Z"
                fill="white"
              />
              <circle cx="71.1921" cy="71.2351" r="69.86" stroke="white" />
            </svg> */}

            <svg
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.firstGear}
            >
              <path
                d="M14.0402 19.8641C14.1132 19.9781 14.2066 19.9985 14.2796 20.1124C14.1657 20.1855 14.2387 20.2994 14.3322 20.3198C14.3322 20.3198 14.3118 20.4133 14.2183 20.3928L15.0829 21.3655C14.2562 22.4579 13.409 23.6438 12.6554 24.8501L6.48354 22.6182L4.75127 26.0591L8.75578 28.7961L8.9427 28.837L8.92224 28.9305L10.1081 29.7776C9.67576 30.8584 9.22296 32.0326 8.88408 33.1338C9.51503 32.4883 10.2395 31.8632 11.0252 30.9577C11.8577 31.6296 10.5199 31.9246 10.1168 32.424C9.84801 32.757 9.53838 33.2769 9.17617 33.5895C8.81396 33.902 8.35826 34.194 8.10997 34.4335C7.99605 34.5066 7.97561 34.6001 7.84124 34.7665C8.44296 34.7023 9.19072 34.8659 9.79244 34.8017C10.4029 34.2496 11.0134 33.6976 11.7524 34.349C11.5771 34.7024 11.028 34.974 10.9462 35.3479C10.9257 35.4414 11.1769 36.084 11.2908 36.011C10.8468 36.6974 10.2948 36.0869 9.58201 37.1063C8.7379 36.0401 8.01351 36.6651 7.18107 35.9933C7.1694 35.599 7.55205 35.1929 7.23953 34.8307C7.64264 34.3313 8.00484 34.0187 8.29403 33.5923L2.14839 33.0313L1.33036 36.77L1.77726 36.9657C1.89118 36.8927 2.00512 36.8197 2.09859 36.8401C2.17161 36.9541 2.24461 37.068 2.22416 37.1614L7.57523 39.1158C7.36193 40.5383 7.26258 41.8877 7.23622 43.3511L0.815942 44.493L0.953063 48.3428L1.13998 48.3837L1.06698 48.2698C1.1809 48.1967 1.20134 48.1033 1.31526 48.0303C1.57521 48.1851 1.44084 48.3515 1.60733 48.4859L7.47257 48.9857C7.6536 50.3965 7.94858 51.7343 8.22308 53.1655L2.22334 55.9665L3.37695 59.6469L9.81767 58.4116C10.32 59.6969 10.9158 61.0026 11.6256 62.2352L6.59551 66.4237L7.39873 67.6768C7.69959 67.6446 7.82517 67.9659 7.76382 68.2464L8.71304 69.7274L14.6193 66.906C15.37 67.9517 16.2345 68.9244 17.0991 69.8971C17.1604 69.6167 17.5957 69.4181 17.8147 69.7599C17.6599 70.0199 17.4321 70.1659 17.2772 70.4258C17.1838 70.4054 17.1838 70.4053 17.1108 70.2914L13.433 75.4614L16.2955 78.0465L17.496 77.036C17.5165 76.9425 17.423 76.922 17.4434 76.8285C17.5778 76.6621 17.7648 76.703 17.8582 76.7234L21.346 73.7647C22.4384 74.5913 23.6242 75.4385 24.8305 76.1921L22.5987 82.364L26.0395 84.0962L27.909 81.3711C27.649 81.2162 27.4095 80.9679 27.243 80.8336C26.9539 81.26 26.5712 81.666 26.1885 82.072C25.4291 81.5141 26.1535 80.889 25.4876 80.3516C26.0776 79.893 27.8069 78.7042 27.0153 77.8454C27.5849 77.4803 28.2187 77.717 28.9256 78.0675C28.5751 78.7744 28.2245 79.4812 27.801 80.0742C27.9675 80.2086 28.1339 80.3429 28.3209 80.3838C28.2595 80.6642 28.1982 80.9446 28.0434 81.2046L29.758 78.7394C31.0053 79.3061 32.3664 79.7998 33.748 80.2L33.6077 81.7364C33.7216 81.6634 33.8356 81.5904 33.929 81.6109C34.1481 81.9526 34.1802 82.2535 34.0049 82.6069C34.078 82.7208 34.078 82.7208 34.0575 82.8143C33.964 82.7938 33.9436 82.8873 33.8501 82.8669C33.7362 82.9399 33.6018 83.1063 33.4879 83.1794L33.1781 86.8335L36.9169 87.6515L39.1488 81.4796C40.5713 81.6929 41.9207 81.7923 43.3841 81.8187L44.5259 88.2389L47.8879 88.0931C47.555 87.8243 47.6163 87.5439 47.0964 87.2343C47.6134 86.6618 47.6572 87.3569 48.3845 87.614C48.3436 87.801 48.3232 87.8945 48.1684 88.1544L48.3757 88.1018L48.6563 85.029C48.3875 85.362 48.1071 85.3006 47.8793 85.4467C47.4733 85.064 48.2386 84.252 48.7176 84.7486L48.9456 81.4684C50.3564 81.2874 51.6738 81.0859 53.1255 80.7179L55.9264 86.7176L59.6069 85.564L58.3716 79.1233C59.6568 78.621 60.9625 78.0251 62.1952 77.3154L66.3836 82.3455L66.7254 82.1264C66.5793 81.8985 66.8276 81.659 67.035 81.6065L67.1811 81.8343L69.6873 80.2279L66.8659 74.3216C68.0256 73.498 69.1122 72.5604 70.1054 71.6024L73.2365 73.8546C73.2365 73.8546 73.33 73.875 73.4439 73.802C73.4235 73.8954 73.5169 73.9159 73.4965 74.0094L73.9229 74.2986C74.0573 74.1321 74.3377 74.1934 74.4312 74.2139C74.6386 74.1613 74.9803 73.9422 75.3133 74.211C75.769 73.9189 76.2568 73.9277 76.7037 74.1235L78.1204 72.5725L77.6618 71.9824C77.6414 72.0759 77.5275 72.1489 77.507 72.2424C77.101 71.8597 76.7797 71.9853 76.5519 72.1314C76.5607 71.6436 76.882 71.518 77.2763 71.5063L73.932 67.5424C74.7587 66.45 75.6058 65.2642 76.3595 64.0579L81.0767 65.7756L81.4798 65.2761C81.6258 65.5039 81.7719 65.7318 81.7105 66.0122L82.5313 66.2898L84.2636 62.8489L78.8132 59.1099C79.38 57.8627 79.8737 56.5015 80.2739 55.1199L80.7617 55.1288C80.7296 54.8279 80.7179 54.4336 80.8727 54.1736C81.2992 54.4628 81.1239 54.8162 81.156 55.1171L86.7204 55.6489L87.2317 53.3122C87.2317 53.3122 87.1382 53.2917 87.1587 53.1983C87.2726 53.1253 87.1996 53.0113 87.1061 52.9909C87.22 52.9178 87.2404 52.8244 87.3544 52.7514L87.4478 52.7718L87.6523 51.8371L81.4805 49.6052C81.6938 48.1827 81.7932 46.8333 81.8195 45.3699L88.3333 44.2485L88.2807 44.0412C88.1872 44.0207 88.2077 43.9272 88.1142 43.9068C88.1347 43.8133 88.2282 43.8338 88.2486 43.7403L88.2369 43.346C87.9156 43.4716 87.7988 42.6625 88.1931 42.6508L88.1231 40.2848L87.6353 40.276C87.4601 40.6295 87.1913 40.9624 86.7649 40.6732C86.8993 40.5067 87.0132 40.4337 87.0541 40.2468L81.5627 39.8288C81.3817 38.418 81.0867 37.0802 80.8122 35.649L86.812 32.848L85.6583 29.1676L78.7503 30.3006C78.2479 29.0154 77.6521 27.7097 76.9424 26.477L81.9724 22.2886L79.9279 19.0988C78.6456 20.4833 77.9649 21.8036 76.3496 22.9193C75.339 21.7187 77.112 21.2251 77.8773 20.4132C78.1256 20.1737 78.2804 19.9137 78.4353 19.6538L73.9486 21.8063C73.125 20.6467 72.1669 19.6535 71.2294 18.5669L74.9479 13.21L72.0855 10.6249L67.035 14.9067C65.9427 14.0801 64.7568 13.2329 63.5505 12.4793L65.7823 6.30744L62.3415 4.57516L58.6025 10.0254C57.3553 9.45873 55.9941 8.96505 54.6126 8.56482L55.162 2.02486L51.4232 1.20683L49.3666 7.02522C50.684 6.82373 50.9497 8.7428 49.5593 8.83036C49.0598 8.42725 48.8817 7.89859 49.0979 7.35823C48.8175 7.29688 48.4231 7.30852 48.1427 7.24717C48.0814 7.52757 47.8126 7.86053 47.4183 7.8722C47.1788 7.62391 47.1467 7.32307 47.3015 7.06311C46.5333 6.99298 45.8585 6.94331 45.0699 6.96664L44.5092 3.70975L43.9485 0.452862L40.68 0.619234C40.6391 0.806172 40.5047 0.972632 40.3178 0.931731C40.1309 0.890829 40.1513 0.797365 40.1922 0.610427L40.0053 0.569523L39.4559 7.10949C38.045 7.29052 36.7072 7.58549 35.2759 7.86L34.2303 5.47644C34.023 5.52902 33.8156 5.58163 33.7016 5.65465C33.5556 5.42681 33.8039 5.18729 34.0317 5.04125L32.5685 1.8807L28.888 3.03431L30.1233 9.47504C28.8381 9.97738 27.5324 10.5732 26.2997 11.2829L22.1113 6.25288L20.8582 7.05612C20.7969 7.33653 20.642 7.59649 20.3411 7.62861C20.2477 7.60816 20.1747 7.49421 20.0812 7.47376L18.8281 8.277L19.1523 9.03349C19.2457 9.05394 19.3392 9.07442 19.5057 9.20879C19.4852 9.30226 19.3713 9.3753 19.3713 9.3753L21.6495 14.1832C20.4898 15.0069 19.4032 15.9445 18.41 16.9025L16.9642 15.9005C16.8503 15.9736 16.6429 16.0261 16.4034 15.7778C16.4238 15.6844 16.5377 15.6114 16.5377 15.6114L13.2196 13.3183C13.1057 13.3913 13.1057 13.3913 13.0123 13.3709C13.0327 13.2774 12.9597 13.1634 12.8867 13.0495L10.322 15.8185L13.3537 19.4201C13.9262 19.9372 13.9467 19.8437 14.0402 19.8641ZM15.0863 76.4107C14.8672 76.069 15.0308 75.3212 15.5391 75.2365C16.132 75.6601 15.6675 76.44 15.0863 76.4107ZM27.2021 81.0205C27.2752 81.1344 27.3686 81.1549 27.4416 81.2688C27.3277 81.3418 27.4007 81.4558 27.4942 81.4762C27.3189 81.8296 26.6734 81.1987 27.2021 81.0205ZM24.3163 80.7809C23.8898 80.4917 24.1585 80.1587 24.4273 79.8257C24.8537 80.1149 24.8245 80.6962 24.3163 80.7809ZM37.1946 83.6965C36.9025 83.2409 37.6298 83.498 37.7846 83.238C38.0767 83.6937 37.3289 83.5301 37.1946 83.6965ZM34.9805 82.6245C34.8666 82.6975 34.7732 82.6771 34.6592 82.7501C34.5862 82.6362 34.4927 82.6157 34.4197 82.5018C34.6885 82.1688 34.4081 82.1074 34.8228 82.0023C34.9689 82.2301 34.8345 82.3966 34.9805 82.6245ZM35.1412 80.9946C35.0273 81.0676 35.0069 81.1611 34.893 81.2341C34.82 81.1202 34.7265 81.0997 34.6535 80.9858C34.7674 80.9128 34.7878 80.8193 34.9018 80.7463C34.9748 80.8602 35.0478 80.9741 35.1412 80.9946ZM46.9183 86.7056C46.7021 87.2459 46.4304 86.6968 46.1705 86.542C46.3253 86.282 46.5853 86.4368 46.9183 86.7056ZM79.884 21.5378C80.0505 21.6722 79.6883 21.9847 79.5948 21.9643C79.2414 21.789 79.6649 21.1961 79.884 21.5378ZM69.9414 15.0529C70.0962 14.793 70.2306 14.6265 70.3649 14.46L70.2715 14.4395C70.3854 14.3665 70.4789 14.387 70.5928 14.3139L70.5723 14.4074C70.7797 14.3548 71.0601 14.4162 71.3931 14.6849C70.9258 14.5827 70.5255 15.9643 69.9414 15.0529ZM50.7132 6.24249C51.3529 5.1092 52.2438 4.6185 52.9799 4.38777C53.678 5.22612 51.5982 7.12174 50.7132 6.24249ZM53.3946 7.41681C53.7363 7.19775 54.2241 7.20658 54.3088 7.71482C54.0196 8.14127 53.4267 7.71767 53.3946 7.41681ZM43.5132 3.78564C43.6797 3.92001 43.3175 4.23254 43.224 4.21208C42.8706 4.03681 43.2941 3.44388 43.5132 3.78564ZM43.1655 5.37463C43.3729 5.32206 43.2794 5.30159 43.332 5.50898C43.3758 6.20416 42.5638 5.43887 43.1655 5.37463ZM49.8074 11.725C49.6935 11.7981 49.6731 11.8915 49.5592 11.9646C49.4862 11.8506 49.3927 11.8302 49.3197 11.7162C49.4336 11.6432 49.454 11.5498 49.568 11.4768C49.641 11.5907 49.7344 11.6111 49.8074 11.725ZM49.4716 10.5742C48.9955 10.9598 48.8582 10.2441 49.127 9.91111C49.5943 10.0134 49.2321 10.3259 49.4716 10.5742ZM60.0017 9.45012C60.0338 9.75097 59.765 10.0839 59.5167 10.3235C58.582 10.1189 59.4496 8.83962 60.0017 9.45012ZM54.0663 9.71856C53.9699 8.81598 54.5424 9.33303 55.1325 8.87447C55.8714 9.52587 54.8578 10.5774 54.0663 9.71856ZM48.759 8.45942C48.2624 8.93843 47.7425 8.62875 47.7513 8.14095C48.02 7.80798 48.6743 7.95117 48.759 8.45942ZM43.1596 6.74457C43.3991 6.99286 43.2238 7.34629 42.8616 7.65882C42.736 7.33751 42.6718 6.73579 43.1596 6.74457ZM44.3776 7.89252C44.4915 7.81951 44.512 7.72605 44.6259 7.65304C44.6989 7.76696 44.7924 7.78741 44.8654 7.90133C44.7515 7.97435 44.731 8.06781 44.6171 8.14083C44.5441 8.02691 44.4506 8.00644 44.3776 7.89252ZM45.8819 7.73194C46.0279 7.95978 45.8936 8.12627 46.0601 8.26064C45.543 8.83312 45.1867 7.77572 45.8819 7.73194ZM46.1652 8.67544C46.3317 8.80981 46.4047 8.92374 46.5916 8.96464C46.4368 9.2246 46.2703 9.09019 46.1359 9.25668C46.0629 9.14276 46.0834 9.04931 46.0103 8.93538C46.0308 8.84192 46.1447 8.76891 46.1652 8.67544ZM46.0629 9.14278C46.1067 9.83797 45.1252 11.1903 44.3541 10.2381C44.9237 9.87297 45.2918 8.19052 46.0629 9.14278ZM44.1877 10.1037C44.5235 11.2545 42.7564 10.3782 44.1877 10.1037V10.1037ZM36.4823 8.61365C36.6487 8.74802 36.2865 9.06054 36.1931 9.04009C35.8192 8.95829 36.2632 8.27189 36.4823 8.61365ZM31.7387 8.35931C32.0074 8.02633 32.2557 7.78686 32.5682 8.14907C32.3725 8.59596 32.0512 8.72152 31.7387 8.35931ZM33.9001 9.22403C34.014 9.15101 34.1075 9.17144 34.2214 9.09842C34.2944 9.21234 34.274 9.30581 34.347 9.41973C34.2331 9.49274 34.1396 9.4723 34.0257 9.54532C33.9527 9.4314 34.0666 9.3584 33.9001 9.22403ZM50.4121 12.543C50.4851 12.6569 50.5785 12.6773 50.6516 12.7913C50.5376 12.8643 50.5172 12.9577 50.4033 13.0308C50.3303 12.9168 50.2368 12.8964 50.1638 12.7825C50.2572 12.8029 50.3712 12.7299 50.4121 12.543ZM61.5875 15.184C61.4122 15.5374 61.2253 15.4965 60.9974 15.6425C60.6645 15.3738 61.161 14.8948 61.5875 15.184ZM67.663 16.5133C67.809 16.7411 67.6746 16.9076 67.8207 17.1354C67.5724 17.3749 67.3212 16.7324 67.663 16.5133ZM30.7776 9.61819C30.8915 9.54517 30.912 9.45171 31.0259 9.37869C31.0989 9.49261 31.1924 9.51308 31.2654 9.627C31.1515 9.70001 31.131 9.79348 31.0171 9.8665C30.9441 9.75258 30.8711 9.63864 30.7776 9.61819ZM40.6941 11.2982C41.0271 11.5669 40.7584 11.8999 40.4575 11.932C40.1245 11.6633 40.3933 11.3303 40.6941 11.2982ZM19.0932 22.7327C18.991 23.2001 18.2637 22.943 18.5558 23.3987C17.8927 23.7434 18.7486 22.0696 19.0932 22.7327ZM17.5422 24.4502C17.3669 24.8036 17.139 24.9497 16.9317 25.0022C16.5052 24.713 17.1566 23.9741 17.5422 24.4502ZM14.5189 26.629C14.4868 26.3282 14.8402 26.5035 15.2959 26.2114C15.772 25.8259 15.6873 25.3176 16.3299 25.0664C16.7885 25.6565 15.8246 26.0332 15.4215 26.5327C14.8635 27.2921 14.3581 28.259 13.3942 28.6357C12.9035 27.7448 14.6561 27.3447 14.5189 26.629ZM12.9502 29.3221C12.7749 29.6755 12.6318 30.3298 12.1235 30.4145C11.6971 30.1253 12.4712 28.8255 12.9502 29.3221ZM12.9531 30.2042C13.2948 29.9852 13.7417 30.1809 14.0105 29.8479C14.3756 30.4175 14.4515 31.4136 13.5489 31.5099C12.7486 31.1389 13.4526 30.6073 12.9531 30.2042ZM4.90267 37.4537C5.51317 36.9016 5.95428 35.3331 6.80717 35.9115C6.53843 36.2444 5.51605 37.7837 4.90267 37.4537ZM12.0501 39.7031C12.3919 39.484 12.8388 39.6798 13.1075 39.3468C13.2535 39.5747 13.2126 39.7616 13.4521 40.0099C13.1104 40.2289 12.6635 40.0332 12.3948 40.3662C12.2487 40.1383 12.2896 39.9514 12.0501 39.7031ZM14.3547 39.9135C14.086 40.2465 13.8056 40.1852 13.4726 39.9164C13.7618 39.49 14.0422 39.5513 14.3547 39.9135ZM19.8108 45.4168C20.6696 44.6253 21.5722 44.5289 22.4222 44.2252C23.1728 45.2709 20.8302 46.1295 19.8108 45.4168ZM25.3431 45.6478C24.6274 45.785 23.2078 46.4539 23.0384 45.4374C23.7103 44.605 24.5836 45.0899 25.3431 45.6478ZM6.48256 44.5575C6.64905 44.6918 6.28685 45.0044 6.19339 44.9839C5.74649 44.7882 6.26351 44.2157 6.48256 44.5575ZM16.8898 47.1284C16.4049 48.0017 15.6863 47.2568 15.1693 47.8293C14.3048 46.8566 16.1099 46.6639 16.8898 47.1284ZM8.46285 47.1455C8.53587 47.2595 8.51543 47.3529 8.58845 47.4668C8.47453 47.5399 8.38104 47.5194 8.26712 47.5924C8.1941 47.4785 8.21458 47.385 8.14156 47.2711C8.25548 47.1981 8.42195 47.3325 8.46285 47.1455ZM3.27237 46.6954L3.67546 46.196C3.74848 46.3099 3.84197 46.3304 3.91499 46.4443L3.51186 46.9437C3.43884 46.8298 3.34539 46.8094 3.27237 46.6954ZM12.5141 48.3258C12.7829 47.9928 13.2823 48.3959 13.3145 48.6968C13.0866 48.8428 12.8793 48.8954 12.6514 49.0414C12.298 48.8661 12.7536 48.5741 12.5141 48.3258ZM4.3852 47.4286C4.70651 47.3031 4.64516 47.5835 4.81165 47.7178C4.56336 47.9573 4.55169 47.563 4.3852 47.4286ZM11.4186 52.8853C11.5851 53.0196 11.2229 53.3322 11.1294 53.3117C10.6825 53.116 11.1061 52.5231 11.4186 52.8853ZM5.57081 54.5441C6.01482 53.8577 6.50261 53.8665 7.06342 53.9892C6.53472 54.1674 6.17541 55.362 5.57081 54.5441ZM10.3144 54.7985C10.4809 54.9328 10.5539 55.0468 10.7408 55.0877C10.6181 55.6485 9.76525 55.0701 10.3144 54.7985ZM5.85394 58.6218C5.46839 58.1457 6.0701 58.0814 6.39141 57.9559C6.68348 58.4115 6.08178 58.4758 5.85394 58.6218ZM7.95995 58.397C7.78468 58.7504 7.4926 58.2947 7.24431 58.5342C6.81786 58.245 7.58318 57.4331 7.99796 57.3279C8.33093 57.5967 7.7409 58.0552 7.95995 58.397ZM16.1004 62.8226C16.6174 62.2501 17.19 62.7671 17.3477 63.3893C16.7576 63.8478 16.1646 63.4243 16.1004 62.8226ZM22.4621 65.9775C22.576 65.9044 22.6695 65.9249 22.7834 65.8519C22.8564 65.9658 22.836 66.0592 22.909 66.1732C22.7951 66.2462 22.7016 66.2257 22.5877 66.2988C22.6082 66.2053 22.6286 66.1118 22.4621 65.9775ZM20.9783 66.0446C21.3317 66.2199 20.876 66.5119 21.1155 66.7602C20.8877 66.9062 20.7007 66.8654 20.5343 66.731C20.4087 66.4097 20.5635 66.1497 20.9783 66.0446ZM18.624 66.5089C18.9132 66.0825 19.36 66.2782 19.3717 66.6725C19.2373 66.839 18.9569 66.7777 18.624 66.5089ZM20.7241 67.654C20.7124 67.2597 20.8584 67.4875 21.1272 67.1545C21.761 67.3912 21.2031 68.1506 20.7241 67.654ZM26.7703 69.5646C26.8959 69.8859 27.042 70.1137 26.7732 70.4467C26.4402 70.1779 26.376 69.5762 26.7703 69.5646ZM28.7682 71.177C28.5404 71.3231 28.3534 71.2821 28.1869 71.1478C28.4236 70.5139 28.7565 70.7827 28.7682 71.177ZM19.6579 68.4981C20.1545 68.0191 20.5108 69.0765 19.8156 69.1203C19.763 68.9129 19.8039 68.726 19.6579 68.4981ZM22.1114 69.8185C22.2779 69.9529 21.9157 70.2654 21.8222 70.2449C21.4688 70.0697 21.8924 69.4767 22.1114 69.8185ZM20.5049 70.4464C20.6188 70.3734 20.7123 70.3938 20.8262 70.3208C20.8992 70.4347 20.8788 70.5282 20.9518 70.6421C20.8379 70.7151 20.7444 70.6947 20.6305 70.7677C20.537 70.7473 20.6714 70.5808 20.5049 70.4464ZM39.8735 74.5863C39.9465 74.7002 40.04 74.7206 40.113 74.8345C39.9991 74.9075 39.9786 75.001 39.8647 75.0741C39.7917 74.9601 39.6982 74.9397 39.6252 74.8258C39.7391 74.7527 39.853 74.6797 39.8735 74.5863ZM29.9978 72.7193C30.3192 72.5938 30.2578 72.8742 30.4243 73.0085C30.103 73.1341 30.1643 72.8537 29.9978 72.7193ZM41.848 75.41C42.0583 76.2396 41.0009 76.5959 40.811 75.6729C41.1002 75.2464 41.4011 75.2143 41.848 75.41ZM32.3375 74.1127C32.4923 73.8527 32.6588 73.9871 32.7931 73.8207C32.8661 73.9346 32.8457 74.028 32.9187 74.142C32.7844 74.3084 32.5974 74.2675 32.3375 74.1127ZM39.4294 75.2727C39.1403 75.6991 38.7138 75.4099 38.6817 75.1091C38.8161 74.9426 39.0965 75.0039 39.4294 75.2727ZM25.596 72.246C25.6515 73.3355 24.1355 73.1017 23.9457 72.1787C24.3488 71.6792 25.0147 72.2167 25.596 72.246ZM39.5054 76.2687C39.1841 76.3943 39.2454 76.1139 39.0789 75.9795C39.4207 75.7605 39.3593 76.0409 39.5054 76.2687ZM20.426 71.7024C20.312 71.7754 20.2916 71.8689 20.1777 71.9419C20.1046 71.828 20.0112 71.8076 19.9382 71.6937C20.0521 71.6206 20.0725 71.5271 20.1864 71.4541C20.2595 71.568 20.3325 71.682 20.426 71.7024ZM17.5517 71.8571C17.5079 71.1619 18.4836 71.1795 18.4339 71.8542C18.1126 71.9798 17.8847 72.1258 17.5517 71.8571ZM18.1038 72.4676C18.2586 72.2076 18.4251 72.342 18.5594 72.1755C18.6325 72.2895 18.612 72.3829 18.685 72.4968C18.5507 72.6633 18.3433 72.7159 18.1038 72.4676ZM35.2612 76.4175C35.6672 76.8001 35.0772 77.2587 34.6712 76.8761C34.6799 76.3883 35.0129 76.657 35.2612 76.4175ZM24.7313 74.4074C24.8452 74.3344 24.9387 74.3549 25.0526 74.2818C25.1256 74.3958 25.1052 74.4892 25.1782 74.6031C25.0643 74.6762 24.9708 74.6557 24.8569 74.7287C24.8569 74.7287 24.8978 74.5418 24.7313 74.4074ZM26.6561 75.9059C26.8519 75.459 27.0797 75.313 27.2871 75.2605C27.401 75.1874 27.328 75.0735 27.2345 75.053C27.3689 74.8866 27.6084 75.1348 27.7749 75.2692C27.7544 75.3627 27.6405 75.4357 27.547 75.4152C27.7135 75.5496 27.7661 75.757 27.8187 75.9644C27.4565 76.2769 27.0621 76.2886 26.6561 75.9059ZM40.1216 77.4809C40.7233 77.4167 41.2666 78.515 41.7252 79.105C40.9803 79.8235 39.4702 78.2199 40.1216 77.4809ZM25.254 78.7334C25.6804 79.0226 26.25 78.6574 26.2938 79.3526C25.879 79.4577 25.5051 79.376 25.1225 79.782C24.8713 79.1393 24.4565 79.2445 24.0008 79.5365C23.6153 79.0604 24.1323 78.4879 24.3485 77.9476C24.9707 77.7899 25.2423 78.339 25.254 78.7334ZM43.6674 82.7622C43.7813 82.6891 43.8748 82.7096 43.9887 82.6366C44.0617 82.7505 44.1552 82.7709 44.2282 82.8849C44.1873 83.0718 43.9274 82.917 43.6674 82.7622ZM46.9797 83.291C46.6468 83.0222 46.9155 82.6893 47.2164 82.6571C47.5493 82.9259 47.2806 83.2589 46.9797 83.291ZM44.5467 81.8771C44.1202 81.5879 44.6168 81.1089 44.7921 80.7555C45.0111 81.0972 45.0228 81.4916 44.5467 81.8771ZM38.3222 79.4379C38.2083 79.5109 38.1148 79.4905 38.0009 79.5635C37.9279 79.4496 37.9484 79.356 37.8754 79.2421C37.9893 79.1691 38.0827 79.1896 38.1966 79.1166C38.2901 79.137 38.1558 79.3035 38.3222 79.4379ZM29.7143 78.0442C29.837 77.4834 30.2927 77.1913 30.541 76.9518C30.7396 77.3871 30.2663 78.6547 29.7143 78.0442ZM26.3844 78.491C26.1536 77.7549 26.8051 77.0159 27.0826 76.1951C27.5207 76.8787 26.7554 77.6907 26.3844 78.491ZM48.4958 80.3906C48.2271 80.7235 47.9262 80.7556 47.5933 80.4869C47.8094 79.9465 48.4842 79.9962 48.4958 80.3906ZM45.1923 79.3739C45.0579 79.5404 44.944 79.6134 44.757 79.5725C44.7892 79.8734 44.2926 80.3524 44.3218 79.7711L44.3832 79.4907C44.2167 79.3564 44.1641 79.149 44.0181 78.9211C43.8516 78.7868 43.7786 78.6728 43.726 78.4654L43.8399 78.3924L43.8604 78.2989C44.7922 77.6213 45.0346 78.7517 45.1923 79.3739ZM55.503 84.1764C55.2547 84.4159 55.0882 84.2815 54.7553 84.0128C55.0444 83.5864 55.4913 83.7821 55.503 84.1764ZM55.6433 82.64C55.4155 82.786 55.2285 82.7451 54.9802 82.9846C54.8342 82.7568 54.8751 82.5699 54.6356 82.3216C54.8634 82.1755 55.0504 82.2164 55.2987 81.9769C55.5586 82.1317 55.4038 82.3917 55.6433 82.64ZM58.0152 81.2L57.612 81.6995L57.1126 81.2964L57.5157 80.7969L58.0152 81.2ZM49.9447 79.1404C49.6555 79.5669 49.3546 79.599 49.0421 79.2368C49.2378 78.7899 49.5387 78.7578 49.9447 79.1404ZM25.891 73.5837C26.2211 72.9704 26.6592 73.6539 26.9279 73.3209C27.1061 73.8496 26.183 74.0394 25.891 73.5837ZM48.5923 78.1589C48.3557 78.7928 47.8855 77.8084 47.6897 78.2553C47.3977 77.7996 48.6011 77.6711 48.5923 78.1589ZM46.6383 77.2417C46.5244 77.3147 46.5039 77.4082 46.39 77.4812C46.3169 77.3673 46.2235 77.3468 46.1505 77.2329C46.2644 77.1599 46.2848 77.0664 46.3987 76.9934C46.4718 77.1073 46.5448 77.2212 46.6383 77.2417ZM48.2244 76.7072C48.0491 77.0607 47.7687 76.9993 47.5087 76.8445C47.684 76.491 47.8914 76.4385 48.2244 76.7072ZM49.1269 76.6109C48.3908 76.8416 49.0919 75.4279 49.3723 75.4893C49.8923 75.7989 48.9079 76.2691 49.1269 76.6109ZM48.3237 75.3577C48.7706 75.5535 48.4084 75.866 48.6684 76.0208C48.4405 76.1669 48.274 76.0325 48.1397 76.199C47.7862 76.0237 48.055 75.6907 48.3237 75.3577ZM45.6364 75.5533C45.3035 75.2846 45.2188 74.7764 45.6336 74.6712C45.7592 74.9925 45.8847 75.3138 45.6364 75.5533ZM67.599 76.343C67.6428 77.0381 66.9243 76.2933 67.4325 76.2086C67.7334 76.1765 67.6399 76.156 67.599 76.343ZM62.5897 74.1696C62.0172 73.6525 62.5342 73.08 63.1564 72.9223C63.7084 73.5328 63.1914 74.1053 62.5897 74.1696ZM56.2777 70.3399C55.784 71.7011 54.6769 72.7321 53.2047 73.1935C51.7325 73.655 50.3013 73.9295 48.7765 74.1836C48.7152 74.464 48.2799 74.6626 48.0726 74.7151C47.9061 74.5808 47.947 74.3938 47.9674 74.3003C47.0648 74.3967 46.2557 74.5135 45.3736 74.5164C44.5849 74.5397 43.7963 74.563 42.9346 74.4724C42.9667 74.7733 42.958 75.2611 42.9696 75.6554C43.3844 75.5503 43.9043 75.86 43.916 76.2543C43.6472 76.5873 43.2734 76.5055 42.9199 76.3302C42.8177 76.7975 42.4759 77.0166 41.7691 76.666C42.0583 76.2396 42.0466 75.8452 42.5432 75.3662C42.625 74.9924 42.5929 74.6915 42.6338 74.5046C38.7518 74.3409 34.9605 73.3154 31.5927 71.6971L31.1896 72.1966L30.6902 71.7934C30.8041 71.7204 30.845 71.5335 30.9589 71.4605C30.7924 71.3261 30.6055 71.2852 30.3455 71.1304C30.3046 71.3173 30.0037 71.3494 29.8986 70.9347C28.6718 70.2745 27.372 69.5004 26.2797 68.6737C25.9583 68.7993 25.7714 68.7584 25.5728 68.3231C25.5933 68.2297 25.5933 68.2296 25.6867 68.2501C25.4268 68.0952 25.1873 67.847 24.9273 67.6922C24.8134 67.7652 24.7929 67.8586 24.679 67.9317C24.752 68.0456 24.939 68.0865 25.012 68.2004C24.8572 68.4604 24.5154 68.6794 24.7754 68.8343C24.568 68.8868 24.3285 68.6385 24.3168 68.2442C23.975 68.4633 23.6742 68.4953 23.2477 68.2061C23.6099 67.8936 24.0131 67.3942 24.3548 67.1751C23.5224 66.5033 22.8039 65.7584 22.0853 65.0135L22.1584 65.1275C21.7962 65.44 21.5975 65.0048 21.6998 64.5374C19.5121 62.0019 17.5932 59.1334 16.3373 55.9204C16.1416 56.3672 15.5078 56.1306 15.1251 56.5366C14.7805 55.8736 14.1583 56.0312 13.9071 55.3886C14.2577 54.6818 14.7367 55.1784 15.1106 55.2602C15.391 55.3216 15.8788 55.3303 16.1387 55.4852C15.8145 54.7286 15.6043 53.899 15.2801 53.1425C14.8916 51.7843 15.1254 50.2683 15.9725 49.0824C16.3961 48.4895 16.9861 48.031 17.5557 47.6659C17.4506 47.2511 17.6463 46.8042 18.1341 46.813C18.3006 46.9473 18.2597 47.1343 18.3123 47.3417C18.727 47.2365 19.1418 47.1314 19.6501 47.0467L30.8052 46.647C30.7731 46.3462 30.8344 46.0657 30.5949 45.8174C31.0506 45.5254 31.3222 46.0745 31.293 46.6558L40.5699 46.3349C42.2407 46.3087 43.8209 47.1442 44.6971 48.5112L53.544 62.6899C53.5645 62.5964 53.6784 62.5234 53.6988 62.4299C53.7719 62.5438 53.8653 62.5642 53.9383 62.6782C53.8244 62.7512 53.804 62.8447 53.6901 62.9177C53.6901 62.9177 53.5966 62.8972 53.617 62.8038L55.7871 66.3149C56.6108 67.4745 56.7714 68.9788 56.2777 70.3399ZM31.442 44.6316C31.1003 44.8507 30.6534 44.6549 30.3846 44.9879C30.2386 44.7601 30.2795 44.5731 30.04 44.3248C30.3817 44.1058 30.8286 44.3015 31.0974 43.9685C31.3369 44.2168 31.1821 44.4768 31.442 44.6316ZM36.5507 45.4555C36.6237 45.5695 36.7172 45.5899 36.7902 45.7038C36.6763 45.7768 36.6558 45.8703 36.5419 45.9433C36.4689 45.8294 36.3755 45.809 36.3024 45.695C36.4164 45.622 36.4368 45.5286 36.5507 45.4555ZM55.6735 60.1195C55.7465 60.2334 55.84 60.2539 55.913 60.3678C55.7991 60.4408 55.7786 60.5343 55.6647 60.6073C55.5917 60.4934 55.4982 60.473 55.4252 60.359C55.5187 60.3795 55.6531 60.213 55.6735 60.1195ZM55.7989 63.575C54.7328 64.4191 54.7474 62.5614 54.1954 61.9509C55.1477 61.1798 55.5478 62.9324 55.7989 63.575ZM67.5702 67.5217C67.9762 67.9044 67.3336 68.1555 67.0853 68.3951C66.5449 68.1789 67.208 67.8342 66.875 67.5655C67.1437 67.2325 67.4153 67.7817 67.5702 67.5217ZM68.4288 69.8644C68.5836 69.6044 68.7502 69.7388 68.8845 69.5723C68.9575 69.6862 68.9371 69.7796 69.0101 69.8936C68.8027 69.9461 68.5953 69.9987 68.4288 69.8644ZM61.9181 68.7336C62.0934 68.3802 62.3738 68.4416 62.6337 68.5964C62.4585 68.9498 62.2511 69.0024 61.9181 68.7336ZM67.056 68.9763C67.2634 68.9237 67.1699 68.9033 67.2225 69.1107C67.2663 69.8059 66.5478 69.061 67.056 68.9763ZM61.1499 68.6635C61.2229 68.7774 61.2024 68.8709 61.2755 68.9848C61.0476 69.1309 60.8607 69.09 60.6942 68.9556C60.7351 68.7687 60.9221 68.8095 61.1499 68.6635ZM66.1504 71.3247C66.3169 71.4591 65.9547 71.7716 65.8612 71.7512C65.4874 71.6694 65.9314 70.983 66.1504 71.3247ZM71.7587 69.4176C72.3312 69.9346 72.6292 69.0204 73.2221 69.444C73.1812 69.6309 73.1403 69.8178 73.3068 69.9522C73.038 70.2852 72.673 69.7156 72.4042 70.0485C72.4889 70.5568 73.7011 69.9405 73.8705 70.957C73.5287 71.1761 73.0935 71.3747 72.6992 71.3863C72.6057 71.3659 72.4597 71.138 72.2727 71.0971C71.7119 70.9744 70.9963 71.1117 70.5698 70.8225C70.1551 70.9277 69.6673 70.9188 69.232 71.1175C68.9925 70.8692 69.3343 70.6501 68.8874 70.4544C69.1357 70.2149 69.2905 69.9549 69.5592 69.622C70.1726 69.9521 70.5845 68.9648 71.2709 69.4088C71.4053 69.2423 71.4258 69.1489 71.3527 69.0349C71.6215 68.702 71.3849 69.3358 71.7587 69.4176ZM69.7521 68.2929C69.6382 68.3659 69.5447 68.3455 69.4308 68.4185C69.3578 68.3046 69.3782 68.2111 69.3052 68.0972C69.4191 68.0242 69.5126 68.0446 69.6265 67.9716C69.6995 68.0855 69.6791 68.179 69.7521 68.2929ZM72.8249 68.5735C72.711 68.6465 72.6175 68.626 72.5036 68.699C72.4306 68.5851 72.451 68.4917 72.378 68.3777C72.4919 68.3047 72.5854 68.3252 72.6993 68.2521C72.7723 68.3661 72.6584 68.4391 72.8249 68.5735ZM72.7695 67.484C72.6556 67.557 72.6351 67.6504 72.5212 67.7235C72.4481 67.6095 72.3547 67.5891 72.2817 67.4752C72.3956 67.4022 72.416 67.3087 72.5299 67.2357C72.603 67.3496 72.6965 67.37 72.7695 67.484ZM69.6236 67.0895C69.1972 66.8003 69.6733 66.4148 69.2468 66.1256C69.6909 65.4392 70.3364 66.0701 70.8972 66.1929C71.1075 67.0224 69.9011 66.2687 69.6236 67.0895ZM71.9458 66.3243C71.2009 67.0428 71.6625 65.3808 71.9458 66.3243V66.3243ZM73.4705 66.0703C73.1814 66.4967 72.8688 66.1345 72.5066 66.447C72.3285 65.9183 73.158 65.7081 73.4705 66.0703ZM71.2565 64.9982C71.1017 65.2581 70.9352 65.1238 70.8008 65.2903C70.3218 64.7937 70.7249 64.2942 70.2459 63.7976C71.0229 63.3799 71.0579 64.5629 71.2565 64.9982ZM67.7982 64.2415C67.7251 64.1276 67.7456 64.0341 67.6726 63.9202C67.7865 63.8472 67.88 63.8676 67.9939 63.7946C68.0669 63.9085 68.0464 64.002 68.1195 64.1159C68.026 64.0955 67.9325 64.075 67.7982 64.2415ZM71.1661 62.7257C71.0405 62.4044 71.3209 62.4657 71.4553 62.2992C71.5809 62.6205 71.3004 62.5592 71.1661 62.7257ZM77.154 62.6646C77.0401 62.7376 76.9466 62.7171 76.8327 62.7902C76.7597 62.6762 76.7801 62.5828 76.7071 62.4689C76.821 62.3959 76.9145 62.4163 77.0284 62.3433C77.1014 62.4572 77.081 62.5507 77.154 62.6646ZM81.6084 63.3454C81.182 63.0562 81.3777 62.6093 81.772 62.5976C82.0115 62.8459 81.8771 63.0124 81.6084 63.3454ZM72.0717 60.3773C71.8964 60.7307 71.6569 60.4824 71.4904 60.348C71.6043 60.275 71.6978 60.2955 71.8117 60.2224C71.9052 60.2429 71.9782 60.3568 72.0717 60.3773ZM76.8007 59.3551C76.4181 59.7611 75.9595 59.1711 76.3422 58.7651C76.6956 58.9404 76.6547 59.1273 76.8007 59.3551ZM74.7503 57.5353C74.3267 58.1283 74.1574 57.1118 73.9179 56.8635C74.5809 56.5188 74.1165 57.2987 74.7503 57.5353ZM73.6579 56.7086C73.3483 57.2285 72.8488 56.8255 72.7437 56.4107C73.065 56.2851 73.6462 56.3143 73.6579 56.7086ZM74.9666 53.8608C74.5723 53.8725 74.2217 54.5793 73.7953 54.2901C74.4174 54.1324 74.1663 53.4898 74.7885 53.3321C74.9549 53.4665 74.8206 53.633 74.9666 53.8608ZM83.7586 54.4132C83.6447 54.4863 83.6242 54.5797 83.5103 54.6527C83.4373 54.5388 83.3438 54.5183 83.2708 54.4044C83.3847 54.3314 83.4052 54.238 83.5191 54.1649C83.5921 54.2789 83.6652 54.3928 83.7586 54.4132ZM81.6585 53.2681C81.7724 53.1951 81.7929 53.1016 81.9068 53.0286C81.9798 53.1425 82.0937 53.0695 82.1142 52.9761C82.4676 53.1513 81.8571 53.7033 81.6585 53.2681ZM79.7482 53.0461C79.0618 52.602 80.0667 52.0384 80.0754 51.5506C80.5749 51.9537 80.2653 52.4736 79.7482 53.0461ZM75.1128 50.9545C75.3727 51.1093 74.8557 51.6817 74.6571 51.2465C74.771 51.1735 74.7915 51.08 74.9054 51.007C74.9784 51.1209 74.9989 51.0275 75.1128 50.9545ZM78.7902 52.0529C79.6197 51.8426 78.539 51.4103 78.7902 52.0529V52.0529ZM85.3214 53.0901C84.9884 52.8214 85.2571 52.4884 85.558 52.4563C85.891 52.725 85.6222 53.058 85.3214 53.0901ZM84.1443 51.7552C83.8551 52.1816 83.7324 52.7425 83.0986 52.5058C83.6886 52.0473 83.4783 51.2177 84.1443 51.7552ZM80.7823 51.9011C80.2828 51.498 80.4873 50.5633 81.1095 50.4056C81.495 50.8817 81.3928 51.349 80.7823 51.9011ZM78.2706 45.4749C77.7302 45.2587 78.2998 44.8936 78.0603 44.6453C78.4955 44.4467 78.6328 45.1624 78.2706 45.4749ZM75.8814 41.6221C75.268 41.292 76.0129 40.5735 76.3342 40.4479C76.7402 40.8306 76.1706 41.1956 75.8814 41.6221ZM74.6342 41.0554C74.789 40.7954 74.9555 40.9298 75.0899 40.7633C75.1629 40.8772 75.1424 40.9707 75.2154 41.0846C74.9876 41.2306 74.7802 41.2832 74.6342 41.0554ZM75.8348 40.0447C74.9964 40.7428 75.5515 39.1013 75.8348 40.0447V40.0447ZM74.8475 39.6329L74.348 39.2297L74.7511 38.7303L75.2506 39.1334L74.8475 39.6329ZM85.0327 40.9799C84.2148 41.5845 84.7494 40.0364 85.0327 40.9799V40.9799ZM75.6566 39.516C75.9662 38.9961 76.381 38.891 76.7228 38.672C77.1287 39.0546 76.083 39.8052 75.6566 39.516ZM77.0091 37.3634C76.1357 36.8784 76.2789 36.2242 75.9138 35.6546C77.0939 34.7374 77.7423 36.2505 77.0091 37.3634ZM75.1076 36.6535L74.6081 36.2504L75.0112 35.751L75.5107 36.1541L75.1076 36.6535ZM75.2041 34.4219C75.6509 34.6176 75.2887 34.9301 75.5487 35.085C75.1456 35.5844 74.9149 34.8484 75.2041 34.4219ZM79.3313 36.5982C79.2057 36.2769 79.5153 35.757 79.7841 35.424C80.0966 35.7862 79.746 36.4931 79.3313 36.5982ZM82.7664 33.432C82.3721 33.4437 82.0128 34.6384 81.5133 34.2353C81.823 33.7154 82.267 33.0289 82.7664 33.432ZM77.6461 32.2138C77.4182 32.3598 77.2313 32.3189 77.0648 32.1845C77.0327 31.8837 77.3014 31.5507 77.6023 31.5186C77.8622 31.6734 77.4066 31.9655 77.6461 32.2138ZM83.2923 32.3717C83.3244 32.6726 83.0147 33.1925 82.6204 33.2042C82.4013 32.8624 82.5562 32.6025 82.7314 32.249C82.9388 32.1965 83.1258 32.2374 83.2923 32.3717ZM82.6263 31.8343C82.5124 31.9073 82.4189 31.8869 82.305 31.9599C82.232 31.846 82.2524 31.7525 82.1794 31.6385C82.2933 31.5655 82.3868 31.586 82.5007 31.513C82.5737 31.6269 82.5533 31.7204 82.6263 31.8343ZM78.575 30.6541C78.2128 30.9666 77.3832 31.1769 77.2986 30.6686C77.6608 30.3561 78.4903 30.1458 78.575 30.6541ZM70.6827 29.1231C71.5385 30.5836 72.1868 32.0967 72.8352 33.6098C73.1886 33.7851 73.5012 34.1473 73.5128 34.5416C73.3989 34.6146 73.285 34.6876 73.1915 34.6672C74.0618 37.4042 74.6109 40.2667 74.6516 43.2139C74.6954 43.9091 74.6253 44.6773 74.6691 45.3725C74.71 45.1856 74.8443 45.0191 74.7918 44.8117C75.3205 44.6336 75.189 45.6822 74.9202 46.0152C74.7537 45.8808 74.6807 45.7668 74.7012 45.6733C74.6222 46.9293 74.5433 48.1854 74.257 49.4939C73.7077 52.8997 72.5041 56.1624 70.7602 59.2088C70.8537 59.2293 70.9472 59.2498 71.0202 59.3637C70.2111 59.4805 70.7222 60.2779 70.8273 60.6927C70.3921 60.8913 69.8429 61.1629 69.4077 61.3615C68.5401 62.6408 67.5995 63.8063 66.5859 64.8578C66.5859 64.8578 66.6794 64.8782 66.6589 64.9717C66.9803 64.8461 67.3863 65.2287 67.7806 65.2171C68.1749 65.2054 67.7806 65.2171 68.0727 65.6728C68.3647 66.1285 68.9255 66.2512 68.9168 66.739C68.7415 67.0924 68.5546 67.0515 68.3267 67.1975C67.9733 67.0222 67.2548 66.2774 66.7377 66.8499C66.5187 66.5081 66.7874 66.1751 66.6414 65.9473C66.4954 65.7194 66.2354 65.5646 66.0484 65.5237C65.0757 66.3883 63.811 66.7972 62.5754 66.6248C61.5268 66.4933 60.5395 66.0814 59.821 65.3365C59.5815 65.0882 59.269 64.726 59.0499 64.3843L47.9599 46.5806C47.6678 46.1249 47.4896 45.5962 47.405 45.0879C47.3115 45.0675 47.2911 45.161 47.2911 45.161C47.218 45.0471 47.2385 44.9536 47.1655 44.8397C47.2794 44.7667 47.3728 44.7871 47.4868 44.7141C47.4021 44.2059 47.4109 43.7181 47.5131 43.2507C47.6154 42.7834 47.7176 42.316 48.0068 41.8896L49.8121 38.5627L49.7391 38.4488C49.853 38.3757 49.8735 38.2823 49.9874 38.2093L50.0809 38.2297L58.0236 23.415C58.7042 22.0948 59.9778 21.1982 61.3886 21.0171C62.8199 20.7426 64.2949 21.1633 65.3464 22.1769C67.5429 24.2246 69.3771 26.5848 70.8901 29.0706C71.2202 28.4572 71.6759 28.1651 72.0906 28.06C72.3827 28.5157 71.4217 29.7745 70.6827 29.1231ZM46.4877 47.042C46.1138 46.9602 46.5578 46.2738 46.7769 46.6156C46.9434 46.75 46.6746 47.0829 46.4877 47.042ZM45.5181 42.5204C45.9943 42.1349 46.4119 42.9118 45.9358 43.2973C45.8423 43.2769 45.7693 43.163 45.6759 43.1425C45.9884 43.5048 46.0731 44.013 46.0643 44.5008C45.8598 45.4355 45.0419 46.0401 44.0867 45.9291C43.152 45.7246 42.5475 44.9067 42.6585 43.9515C42.7695 42.9964 43.6809 42.4122 44.636 42.5232C45.0099 42.605 45.4568 42.8008 45.6759 43.1425C45.5298 42.9147 45.6642 42.7482 45.5181 42.5204ZM47.0049 43.3354C47.2444 43.5837 47.0691 43.9371 46.7069 44.2497C46.187 43.94 46.6105 43.3471 47.0049 43.3354ZM47.23 39.173C46.9087 39.2986 46.97 39.0182 46.8035 38.8839C47.1453 38.6648 47.0635 39.0387 47.23 39.173ZM49.0235 38.586C49.0351 38.9803 48.5911 39.6668 48.1121 39.1702C47.9865 38.8489 48.5445 38.0894 49.0235 38.586ZM50.4403 33.9009C50.3673 33.787 50.3878 33.6935 50.3147 33.5796C50.4287 33.5066 50.5221 33.527 50.636 33.454C50.7091 33.5679 50.6886 33.6614 50.7616 33.7753C50.6477 33.8483 50.5542 33.8279 50.4403 33.9009ZM51.0129 31.2838C51.2524 31.532 51.5124 31.6869 51.8454 31.9556C51.5562 32.3821 51.2962 32.2272 51.2641 31.9264C51.1297 32.0928 51.0158 32.1659 50.9749 32.3528C50.455 32.0432 50.7237 31.7102 51.0129 31.2838ZM50.5018 30.4863C50.6479 30.7142 50.5135 30.8806 50.6595 31.1085C50.2769 31.5144 50.0257 30.8719 50.5018 30.4863ZM52.4385 29.245C52.3654 29.1311 52.3859 29.0376 52.3129 28.9237C52.4268 28.8507 52.5203 28.8711 52.6342 28.7981C52.7072 28.912 52.6868 29.0055 52.7598 29.1194C52.6663 29.0989 52.4794 29.058 52.4385 29.245ZM54.7082 25.1382C54.8221 25.0652 54.8426 24.9717 54.9565 24.8987C55.2165 25.0536 55.0821 25.2201 55.2486 25.3544C54.9068 25.5735 54.7403 25.4391 54.7082 25.1382ZM53.7794 23.5638C54.0482 23.2309 54.3812 23.4996 54.4133 23.8004C54.1445 24.1334 53.8115 23.8647 53.7794 23.5638ZM55.938 23.5464C56.6508 22.527 57.4306 22.9915 57.2261 23.9262C56.7909 24.1248 56.0431 23.9612 55.938 23.5464ZM54.9245 21.4637C54.5916 21.195 54.8603 20.862 55.1611 20.8299C55.4941 21.0986 55.2254 21.4316 54.9245 21.4637ZM58.2953 20.83C57.9214 20.7482 58.3655 20.0618 58.5845 20.4036C58.7306 20.6314 58.3888 20.8505 58.2953 20.83ZM70.5718 26.9441C70.9047 27.2129 70.8434 27.4932 70.5747 27.8262C70.1687 27.4435 70.084 26.9353 70.5718 26.9441ZM73.2941 27.9315C72.2074 28.8691 71.8249 26.1409 73.1013 26.1263C73.7673 26.6638 72.7216 27.4144 73.2941 27.9315ZM76.6533 23.7693C76.3846 24.1023 76.1363 24.3418 75.8238 23.9796C75.8121 23.5853 76.3203 23.5005 76.6533 23.7693ZM73.8491 26.2899C72.7363 25.5567 74.5356 23.5998 75.2717 23.3691C76.0837 24.1344 74.3545 25.3231 73.8491 26.2899ZM73.081 23.0857C72.7481 22.8169 73.0168 22.4839 73.3177 22.4518C73.6506 22.7206 73.3819 23.0535 73.081 23.0857ZM64.8529 20.4038C65.069 19.8635 65.402 20.1322 65.6298 19.9862C66.0563 20.2754 65.2793 20.693 64.8529 20.4038ZM68.8487 20.4946C68.9217 20.6085 69.0152 20.629 69.0882 20.7429C68.9743 20.8159 68.9538 20.9094 68.8399 20.9824C68.7669 20.8685 68.6734 20.848 68.6004 20.7341C68.7143 20.6611 68.8283 20.5881 68.8487 20.4946ZM71.8309 21.6368C71.5914 21.3885 71.7667 21.0351 72.0676 21.003C72.4005 21.2717 72.1318 21.6047 71.8309 21.6368ZM68.8049 19.7994C68.691 19.8724 68.6705 19.9659 68.5566 20.0389C68.4836 19.925 68.3901 19.9045 68.3171 19.7906C68.431 19.7176 68.4515 19.6241 68.5654 19.5511C68.6384 19.665 68.7319 19.6855 68.8049 19.7994ZM48.0402 13.9829C48.268 13.8368 48.455 13.8777 48.6215 14.0121C48.4871 14.1786 48.3001 14.1377 48.0402 13.9829ZM30.0327 10.3367C30.4592 10.6259 29.7143 11.3445 29.4134 11.3766C29.1009 11.0144 29.7319 10.3688 30.0327 10.3367ZM38.372 12.0634C38.445 12.1773 38.5384 12.1977 38.6115 12.3116C38.3427 12.6446 38.6027 12.7995 38.2084 12.8111C38.1353 12.6972 38.0419 12.6768 37.9688 12.5628C37.9572 12.1685 38.1032 12.3964 38.372 12.0634ZM28.9578 11.6686C29.0308 11.7825 29.0103 11.876 29.0834 11.99C28.8555 12.136 28.6686 12.0951 28.5021 11.9607C28.6569 11.7008 28.8234 11.8351 28.9578 11.6686ZM27.3074 11.6014C27.3804 11.7153 27.4739 11.7357 27.547 11.8496C27.433 11.9227 27.4126 12.0162 27.2986 12.0892C27.2256 11.9753 27.1322 11.9548 27.0591 11.8409C27.1731 11.7679 27.287 11.6949 27.3074 11.6014ZM25.3446 11.1719C25.2716 11.058 25.1781 11.0376 25.1051 10.9236C25.4556 10.2168 25.9259 11.2012 25.3446 11.1719ZM22.8648 8.18078C23.2387 8.26258 23.6651 8.55173 24.039 8.63353C23.7089 9.24691 23.2942 9.35209 22.9728 9.47767C22.6603 9.11546 22.1609 8.71236 22.8648 8.18078ZM21.4248 8.94307C22.2748 8.63932 22.8297 10.132 23.1013 10.6811C22.003 11.2244 22.0703 9.57402 21.4248 8.94307ZM20.8902 10.4912C21.0041 10.4181 21.0245 10.3247 21.1385 10.2517C21.3984 10.4065 21.2641 10.5729 21.4305 10.7073C21.0888 10.9264 20.9223 10.792 20.8902 10.4912ZM22.8852 11.2215C23.1539 10.8885 23.4869 11.1572 23.519 11.4581C23.2502 11.791 22.9173 11.5223 22.8852 11.2215ZM27.6024 12.9392C27.5001 13.4065 28.207 13.7571 28.4056 14.1923C27.836 14.5574 27.284 13.9469 26.7027 13.9177C26.5246 13.389 27.2081 12.9509 27.6024 12.9392ZM29.8982 13.6374C30.0968 14.0726 29.3082 14.0959 29.0687 13.8477C29.2848 13.3073 29.6295 13.9704 29.8982 13.6374ZM24.658 13.8621C24.8333 13.5086 24.6142 13.1669 25.029 13.0618C25.3824 13.237 25.1342 13.4765 24.9998 13.643C25.6132 13.9731 26.3814 14.0432 26.3317 14.718C26.1769 14.9779 25.9169 14.8231 25.7416 15.1766C25.2422 14.7735 25.4584 14.2331 24.658 13.8621ZM29.0335 15.7988C29.2409 15.7463 29.1475 15.7259 29.2 15.9332C29.2643 16.535 28.5253 15.8835 29.0335 15.7988ZM22.254 15.0011C22.368 14.9281 22.4615 14.9486 22.5754 14.8755C22.6484 14.9895 22.6279 15.0829 22.7009 15.1968C22.587 15.2699 22.4936 15.2494 22.3796 15.3224C22.4001 15.229 22.4205 15.1355 22.254 15.0011ZM24.6346 16.2076C25.0377 15.7081 25.4203 15.3022 25.9198 15.7053C25.4115 15.7899 25.0815 16.4033 24.6346 16.2076ZM27.5029 17.4228C26.4338 17.3848 27.5613 16.2603 27.5029 17.4228V17.4228ZM23.0894 16.5551C23.3581 16.2222 23.6911 16.4909 23.8167 16.8122C23.951 16.6457 24.1789 16.4997 24.2928 16.4266C24.5528 16.5815 24.3366 17.1218 23.9948 17.3409C23.6648 17.9543 23.2354 16.783 23.0894 16.5551ZM27.9819 17.9194C28.1279 18.1473 27.9936 18.3137 28.1396 18.5416C27.643 19.0206 27.4941 17.9106 27.9819 17.9194ZM23.323 18.1733C23.0221 18.2054 22.7534 18.5384 22.5781 18.8919C22.0991 18.3953 22.7301 17.7498 23.323 18.1733ZM43.3492 13.9359C46.016 13.8338 48.6945 14.126 51.3116 14.6987C52.7137 15.0054 53.9521 16.0599 54.5479 17.3656C55.1437 18.6713 55.0969 20.2282 54.4163 21.5484L48.4746 32.5893L47.9488 33.6496C48.1883 33.8979 48.5008 34.2601 48.6264 34.5814C48.1707 34.8734 47.8377 34.6047 47.6187 34.263L46.8241 35.6562C47.0111 35.6971 47.2185 35.6445 47.3937 35.2911C47.8406 35.4868 47.4784 35.7994 47.7384 35.9542C47.5105 36.1002 47.3031 36.1528 47.0227 36.0914C46.754 36.4244 46.4444 36.9443 46.1435 36.9764L44.5135 39.9499C43.6985 41.4366 42.2175 42.3859 40.5467 42.4121L25.4483 42.9284C25.46 43.3227 25.2643 43.7696 24.683 43.7404C24.537 43.5126 24.5048 43.2117 24.4727 42.9109L19.5334 43.1034C18.0496 43.1705 16.7293 42.4899 15.6983 41.3828C14.8542 40.3167 14.4658 38.9584 14.6586 37.6293L14.72 37.3489C15.1903 35.1992 15.9206 33.2042 16.8174 31.3436C16.724 31.3231 16.5166 31.3757 16.4231 31.3552C15.5498 30.8703 15.5995 30.1956 15.7222 29.6348C16.3852 29.2902 17.2148 29.0799 18.0239 28.9631C23.2878 20.1245 32.7023 14.2509 43.3492 13.9359ZM22.1954 19.2979C22.0406 19.5578 21.8128 19.7038 21.658 19.9638C21.0971 19.8411 21.9238 18.7487 22.1954 19.2979Z"
                fill="white"
              />
            </svg>

            {/* <img
              className={styles.firstGearArc}
              src={firstGearArc}
              alt="second arc"
            /> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="73"
              viewBox="0 0 61 73"
              fill="none"
              className={styles.firstGearArc}
            >
              <path
                d="M58.9002 70.4501C58.9002 31.5914 29.4031 6.85496 2.88281 1.98441"
                stroke="white"
                stroke-width="3.78862"
                stroke-linecap="round"
                className={styles.firstGearPath}
              />
            </svg> */}

            <svg
              width="144"
              height="142"
              viewBox="0 0 144 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.firstGearArc}
            >
              <circle cx="71.1921" cy="71.2351" r="69.86" stroke="white" />
              <path
                d="M141.553 71.2353C141.553 32.3765 112.055 7.64011 85.5352 2.76956"
                stroke="white"
                stroke-width="3.78862"
                stroke-linecap="round"
              />
            </svg>

            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.secondCircle}
            >
              <circle
                cx="15.1523"
                cy="15.2852"
                r="13.8776"
                stroke="white"
                stroke-width="1.24488"
              />
            </svg>

            {/* <img
              className={styles.secondArc}
              src={secondArc}
              alt="second arc"
            /> */}
            <svg
              width="519"
              height="318"
              viewBox="0 0 519 318"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.secondArc}
            >
              <path
                // d="M2 151.521C7.21976 164.01 13.4089 176.16 20.5495 187.855M20.55 187.854C57.6137 248.56 117.274 292.056 186.408 308.773C255.541 325.49 328.484 314.06 389.189 276.996C449.895 239.932 493.39 180.271 510.107 111.138C518.919 74.7005 519.91 37.2046 513.451 1"
                d="M513.451 1C519.91 37.2046 518.919 74.7005 510.107 111.138C493.39 180.271 449.895 239.932 389.189 276.996C328.484 314.06 255.541 325.49 186.408 308.773C117.274 292.056 57.6137 248.56 20.55 187.854M20.5495 187.855C13.4089 176.16 7.21976 164.01 2 151.521"
                stroke="white"
                stroke-width="2.5"
              />
            </svg>

            {/* <img className={styles.wedge} src={wedge} alt="wedge" /> */}
            {/* <svg
              width="204"
              height="224"
              viewBox="0 0 204 224"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.wedge}
            >
              <circle
                cx="26.6523"
                cy="26.7852"
                r="9.5"
                fill="#D9D9D9"
                stroke="#444444"
              />
              <path d="M16.6523 27.2852H36.6523" stroke="#444444" />
              <path d="M26.6523 37.2852L26.6523 17.2852" stroke="#444444" />
              <circle
                cx="26.6523"
                cy="26.7852"
                r="23"
                stroke="white"
                stroke-width="6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M203.652 19.7852C146.749 52.4679 112.855 57.3093 51.6523 21.2852C50.8998 35.8396 48.7154 42.07 40.1523 47.4721C36.9539 49.4899 33.0051 51.1828 28.1523 52.7852L23.6523 205.285V223.785C114.152 193.789 185.152 114.285 203.652 19.7852ZM40.1523 47.4721C49.3288 56.6485 58.0557 64.6852 65.9437 71.9495C112.12 114.474 129.552 130.527 40.1523 193.789V47.4721ZM171.652 62.2852C171.652 67.5319 167.399 71.7852 162.152 71.7852C156.906 71.7852 152.652 67.5319 152.652 62.2852C152.652 57.0385 156.906 52.7852 162.152 52.7852C167.399 52.7852 171.652 57.0385 171.652 62.2852ZM120.152 150.785C125.399 150.785 129.652 146.532 129.652 141.285C129.652 136.038 125.399 131.785 120.152 131.785C114.906 131.785 110.652 136.038 110.652 141.285C110.652 146.532 114.906 150.785 120.152 150.785ZM144.652 70.2852C144.652 74.4273 141.294 77.7852 137.152 77.7852C133.01 77.7852 129.652 74.4273 129.652 70.2852C129.652 66.1431 133.01 62.7852 137.152 62.7852C141.294 62.7852 144.652 66.1431 144.652 70.2852ZM152.152 88.7852C155.19 88.7852 157.652 86.3228 157.652 83.2852C157.652 80.2476 155.19 77.7852 152.152 77.7852C149.115 77.7852 146.652 80.2476 146.652 83.2852C146.652 86.3228 149.115 88.7852 152.152 88.7852ZM124.652 122.285C124.652 125.323 122.19 127.785 119.152 127.785C116.115 127.785 113.652 125.323 113.652 122.285C113.652 119.248 116.115 116.785 119.152 116.785C122.19 116.785 124.652 119.248 124.652 122.285ZM113.152 160.785C115.085 160.785 116.652 159.218 116.652 157.285C116.652 155.352 115.085 153.785 113.152 153.785C111.219 153.785 109.652 155.352 109.652 157.285C109.652 159.218 111.219 160.785 113.152 160.785Z"
                fill="#D9D9D9"
              />
            </svg> */}

            {/* <svg
              width="402"
              height="402"
              viewBox="0 0 402 402"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.wedge}
            >
              <circle
                cx="202"
                cy="203"
                r="9.5"
                fill="#D9D9D9"
                stroke="#444444"
              />
              <path d="M192 203.5H212" stroke="#444444" />
              <path d="M202 213.5V193.5" stroke="#444444" />
              <circle
                cx="202"
                cy="203"
                r="23"
                stroke="white"
                stroke-width="6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M379 196C322.097 228.683 288.203 233.524 227 197.5C226.247 212.054 224.063 218.285 215.5 223.687C212.302 225.705 208.353 227.398 203.5 229L199 381.5V400C289.5 370.003 360.5 290.5 379 196ZM215.5 223.687C224.676 232.863 233.403 240.9 241.291 248.164C287.468 290.689 304.9 306.742 215.5 370.003V223.687ZM347 238.5C347 243.747 342.747 248 337.5 248C332.253 248 328 243.747 328 238.5C328 233.253 332.253 229 337.5 229C342.747 229 347 233.253 347 238.5ZM295.5 327C300.747 327 305 322.747 305 317.5C305 312.253 300.747 308 295.5 308C290.253 308 286 312.253 286 317.5C286 322.747 290.253 327 295.5 327ZM320 246.5C320 250.642 316.642 254 312.5 254C308.358 254 305 250.642 305 246.5C305 242.358 308.358 239 312.5 239C316.642 239 320 242.358 320 246.5ZM327.5 265C330.538 265 333 262.538 333 259.5C333 256.462 330.538 254 327.5 254C324.462 254 322 256.462 322 259.5C322 262.538 324.462 265 327.5 265ZM300 298.5C300 301.538 297.538 304 294.5 304C291.462 304 289 301.538 289 298.5C289 295.462 291.462 293 294.5 293C297.538 293 300 295.462 300 298.5ZM288.5 337C290.433 337 292 335.433 292 333.5C292 331.567 290.433 330 288.5 330C286.567 330 285 331.567 285 333.5C285 335.433 286.567 337 288.5 337Z"
                fill="white"
              />
            </svg> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              className={styles.wedgeCircle}
            >
              <circle cx="26" cy="26" r="9.5" fill="#D9D9D9" stroke="#444444" />
              <path d="M16 26.5H36" stroke="#444444" />
              <path d="M26 36.5L26 16.5" stroke="#444444" />
              <circle cx="26" cy="26" r="23" stroke="white" stroke-width="6" />
            </svg>

            <svg
              width="535"
              height="535"
              viewBox="0 0 535 535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.wedge}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M532 318C475.097 350.683 441.203 355.524 380 319.5C379.247 334.054 377.063 340.285 368.5 345.687C365.302 347.705 361.353 349.398 356.5 351L352 503.5V522C442.5 492.003 513.5 412.5 532 318ZM368.5 345.687C377.676 354.863 386.403 362.9 394.291 370.164C440.468 412.689 457.9 428.742 368.5 492.003V345.687ZM500 360.5C500 365.747 495.747 370 490.5 370C485.253 370 481 365.747 481 360.5C481 355.253 485.253 351 490.5 351C495.747 351 500 355.253 500 360.5ZM448.5 449C453.747 449 458 444.747 458 439.5C458 434.253 453.747 430 448.5 430C443.253 430 439 434.253 439 439.5C439 444.747 443.253 449 448.5 449ZM473 368.5C473 372.642 469.642 376 465.5 376C461.358 376 458 372.642 458 368.5C458 364.358 461.358 361 465.5 361C469.642 361 473 364.358 473 368.5ZM480.5 387C483.538 387 486 384.538 486 381.5C486 378.462 483.538 376 480.5 376C477.462 376 475 378.462 475 381.5C475 384.538 477.462 387 480.5 387ZM453 420.5C453 423.538 450.538 426 447.5 426C444.462 426 442 423.538 442 420.5C442 417.462 444.462 415 447.5 415C450.538 415 453 417.462 453 420.5ZM441.5 459C443.433 459 445 457.433 445 455.5C445 453.567 443.433 452 441.5 452C439.567 452 438 453.567 438 455.5C438 457.433 439.567 459 441.5 459Z"
                fill="#D9D9D9"
              />
            </svg>

            {/* <img className={styles.thirdArc} src={thirdArc} alt="third arc" /> */}
            <svg
              width="261"
              height="374"
              viewBox="0 0 261 374"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.thirdArc}
            >
              <path
                // d="M260.15 2C214.676 3.70335 169.96 16.969 130.432 41.1026C69.7265 78.1663 26.2309 137.827 9.51362 206.96C-3.98295 262.775 0.86727 321.072 22.741 373.408"
                d="M22.741 373.408C0.86727 321.072 -3.98295 262.775 9.51362 206.96C26.2309 137.827 69.7265 78.1663 130.432 41.1026C169.96 16.969 214.676 3.70335 260.15 2"
                stroke="white"
                stroke-width="2.5"
              />
            </svg>

            {/* <img
              className={styles.secondGear}
              src={secondGear}
              alt="second arc"
            /> */}

            {/* <svg
              width="198"
              height="205"
              viewBox="0 0 198 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.secondGear}
            >
              <path
                d="M61.7368 58.9388C61.0055 59.4097 60.2851 59.8922 59.5699 60.4013C58.8565 60.9091 58.1642 61.4349 57.4821 61.9673L62.0854 69.6732C60.5886 70.904 59.159 72.1944 57.8472 73.5691L50.5175 68.4405C49.338 69.7376 48.2233 71.0794 47.1841 72.4613L53.6262 78.7123C52.5049 80.2849 51.495 81.9132 50.5795 83.5928L42.1485 80.5296C41.3512 82.0811 40.6285 83.6676 39.9801 85.2811L47.7687 89.6256C47.095 91.428 46.5722 93.28 46.1228 95.146L37.1862 94.3692C36.819 96.0719 36.527 97.7873 36.319 99.52L45.0179 101.709C44.831 103.622 44.7203 105.542 44.7681 107.468L35.985 109.021C36.0649 110.755 36.2301 112.49 36.4781 114.22L45.4454 114.088C45.7605 115.975 46.1797 117.845 46.7279 119.695L38.5942 123.493C39.125 125.14 39.7375 126.771 40.4242 128.383L49.0305 125.939C49.8179 127.668 50.7449 129.354 51.7606 131.009L44.8853 136.779C45.3563 137.511 45.8388 138.231 46.3465 138.945C46.8543 139.658 47.3802 140.35 47.9138 141.034L55.6198 136.431C56.8506 137.928 58.1392 139.359 59.5144 140.667L54.3871 147.999C55.6847 149.175 57.026 150.293 58.4084 151.329L64.6607 144.889C66.2296 146.013 67.8598 147.021 69.5381 147.935L66.4749 156.366C68.0295 157.164 69.6141 157.888 71.2295 158.535L75.574 150.746C77.3764 151.42 79.2271 151.941 81.0944 152.392L80.3158 161.33C82.0167 161.699 83.7357 161.988 85.4653 162.195L87.6574 153.497C89.5721 153.686 91.4888 153.796 93.4125 153.75L94.9672 162.531C96.7023 162.448 98.438 162.285 100.169 162.042L100.033 153.069C101.923 152.755 103.793 152.335 105.642 151.788L109.439 159.922C111.085 159.393 112.718 158.779 114.33 158.089L111.885 149.486C113.614 148.697 115.301 147.768 116.954 146.757L122.727 153.628C123.454 153.159 124.178 152.678 124.891 152.17C125.606 151.661 126.296 151.134 126.981 150.599L122.376 142.898C123.875 141.663 125.302 140.377 126.616 139.001L133.946 144.126C135.124 142.83 136.238 141.492 137.278 140.107L130.837 133.854C131.961 132.285 132.97 130.655 133.882 128.975L142.316 132.042C143.11 130.487 143.833 128.9 144.481 127.287L136.691 122.944C137.367 121.14 137.891 119.29 138.339 117.422L147.275 118.199C147.645 116.5 147.935 114.781 148.144 113.05L139.444 110.859C139.629 108.947 139.743 107.024 139.698 105.103L148.48 103.548C148.397 101.813 148.233 100.077 147.987 98.3451L139.016 98.4802C138.701 96.5934 138.28 94.7241 137.735 92.8743L145.869 89.0741C145.339 87.4312 144.726 85.7953 144.037 84.1853L135.431 86.6293C134.643 84.9028 133.717 83.2141 132.702 81.5636L139.576 75.7884C139.107 75.0589 138.623 74.3367 138.115 73.6233C137.607 72.9099 137.083 72.2195 136.548 71.5337L128.843 76.1419C127.611 74.6401 126.322 73.2124 124.947 71.9007L130.075 64.5691C128.779 63.3914 127.438 62.2786 126.051 61.2401L119.802 67.6809C118.23 66.5565 116.602 65.5466 114.923 64.6329L117.987 56.2019C116.434 55.4028 114.847 54.6801 113.235 54.0335L108.892 61.8239C107.088 61.1484 105.234 60.627 103.367 60.1757L104.147 51.2397C102.443 50.8707 100.727 50.5817 98.9963 50.3724L96.8041 59.0708C94.8939 58.8844 92.9728 58.7719 91.0473 58.8197L89.4944 50.0366C87.7593 50.1196 86.0237 50.283 84.2949 50.5297L84.4286 59.4989C82.5418 59.8139 80.6725 60.235 78.8214 60.7782L75.0225 52.6458C73.376 53.1784 71.7437 53.7891 70.1337 54.4776L72.5777 63.0839C70.8475 63.8745 69.1625 64.7983 67.5071 65.814L61.7368 58.9388ZM98.7449 101.65C101.305 105.246 100.464 110.237 96.8664 112.798C93.272 115.357 88.2809 114.517 85.7211 110.92C83.1613 107.324 84.0016 102.333 87.596 99.7745C91.194 97.2135 96.1851 98.0537 98.7449 101.65Z"
                fill="#272727"
              />
              <path
                d="M61.6026 60.1643C60.8713 60.6353 60.1509 61.1177 59.4356 61.6268C58.7223 62.1346 58.03 62.6605 57.3479 63.1928L61.9511 70.8988C60.4543 72.1296 59.0247 73.42 57.7148 74.7934L50.3832 69.6661C49.2037 70.9632 48.0891 72.305 47.0511 73.6888L53.4919 79.9379C52.3707 81.5105 51.3589 83.1401 50.4471 84.8171L42.0143 81.7552C41.217 83.3066 40.4942 84.8931 39.8459 86.5067L47.6363 90.8498C46.9607 92.6536 46.4393 94.5075 45.9899 96.3734L37.052 95.5948C36.6848 97.2975 36.3959 99.0134 36.1866 100.744L44.885 102.936C44.6968 104.848 44.5843 106.769 44.6338 108.693L35.8507 110.246C35.9337 111.981 36.0953 113.718 36.342 115.447L45.313 115.312C45.6263 117.2 46.0473 119.069 46.5924 120.919L38.46 124.718C38.9908 126.366 39.6033 127.997 40.2912 129.61L48.8962 127.164C49.6842 128.891 50.6106 130.579 51.6251 132.233L44.7511 138.005C45.2239 138.735 45.7045 139.457 46.2123 140.17C46.7214 140.885 47.2478 141.575 47.7796 142.26L55.4843 137.655C56.7164 139.153 58.0068 140.583 59.3814 141.895L54.2528 149.224C55.5518 150.403 56.8905 151.517 58.2755 152.557L64.5265 146.114C66.0972 147.237 67.7268 148.249 69.4057 149.159L66.342 157.593C67.8934 158.391 69.4817 159.112 71.0939 159.759L75.4397 151.972C77.2417 152.649 79.0942 153.168 80.9602 153.618L80.1846 162.556C81.8842 162.923 83.6014 163.214 85.3311 163.421L87.5232 154.723C89.4379 154.911 91.3558 155.023 93.2814 154.976L94.8343 163.759C96.568 163.674 98.3037 163.511 100.035 163.267L99.9006 154.293C101.787 153.981 103.658 153.559 105.508 153.014L109.305 161.148C110.951 160.618 112.584 160.004 114.195 159.315L111.753 150.71C113.479 149.922 115.167 148.994 116.82 147.983L122.592 154.853C123.32 154.385 124.045 153.902 124.757 153.395C125.472 152.886 126.161 152.36 126.847 151.825L122.241 144.123C123.741 142.888 125.168 141.602 126.481 140.226L133.812 145.352C134.989 144.056 136.104 142.717 137.143 141.332L130.701 135.081C131.824 133.51 132.835 131.881 133.748 130.201L142.181 133.268C142.978 131.711 143.699 130.126 144.349 128.514L136.558 124.171C137.234 122.367 137.756 120.515 138.206 118.646L147.141 119.424C147.513 117.724 147.8 116.006 148.011 114.277L139.309 112.084C139.498 110.173 139.61 108.252 139.564 106.328L148.344 104.772C148.262 103.038 148.099 101.303 147.854 99.5726L138.882 99.7058C138.568 97.8208 138.146 95.9497 137.601 94.0999L145.736 90.3015C145.205 88.6537 144.593 87.0227 143.903 85.4109L135.298 87.8567C134.509 86.1283 133.582 84.4397 132.568 82.7861L139.442 77.014C138.972 76.2845 138.49 75.5641 137.981 74.8489C137.473 74.1355 136.948 73.4451 136.414 72.7593L128.709 77.3644C127.479 75.8644 126.186 74.4362 124.813 73.1262L129.942 65.7965C128.644 64.617 127.306 63.5029 125.919 62.4644L119.667 68.9046C118.096 67.7821 116.468 66.7722 114.789 65.8585L117.852 57.4276C116.301 56.6302 114.715 55.9075 113.101 55.2591L108.758 63.0495C106.954 62.374 105.1 61.8525 103.234 61.4032L104.013 52.4652C102.31 52.0981 100.596 51.8079 98.8621 51.598L96.673 60.2969C94.7597 60.11 92.8386 59.9975 90.913 60.0452L89.3601 51.2621C87.6251 51.3452 85.8894 51.5086 84.1606 51.7553L84.2943 60.7245C82.4075 61.0395 80.5383 61.4606 78.6853 62.0051L74.8896 53.8732C73.2417 54.404 71.6094 55.0147 69.9995 55.7032L72.4435 64.3095C70.7132 65.1001 69.0282 66.0239 67.3728 67.0396L61.6026 60.1643ZM98.6089 102.877C101.169 106.473 100.33 111.463 96.7322 114.024C93.1378 116.582 88.1466 115.742 85.5869 112.146C83.0271 108.55 83.8687 103.56 87.463 101.002C91.061 98.4409 96.0491 99.2806 98.6089 102.877Z"
                fill="#D9D9D9"
              />
              <path
                d="M59.9649 130.382C72.5971 148.129 97.2241 152.275 114.969 139.644C132.716 127.012 136.862 102.385 124.23 84.6379C111.597 66.8911 86.9718 62.7468 69.225 75.3791C51.4788 88.0082 47.3326 112.635 59.9649 130.382ZM98.6083 102.875C101.168 106.472 100.33 111.461 96.7316 114.022C93.1372 116.581 88.1461 115.741 85.5863 112.144C83.0265 108.548 83.8681 103.559 87.4625 101C91.0605 98.4394 96.0485 99.2792 98.6083 102.875Z"
                fill="#8B8B8B"
              />
              <path
                d="M61.8692 129.027C73.7528 145.722 96.9207 149.623 113.614 137.741C130.309 125.857 134.209 102.689 122.326 85.9943C110.443 69.3011 87.2743 65.3988 70.5793 77.2824C53.8848 89.1628 49.9869 112.334 61.8692 129.027ZM98.6085 102.876C101.168 106.473 100.33 111.462 96.7318 114.023C93.1374 116.582 88.1462 115.742 85.5865 112.145C83.0267 108.549 83.8683 103.56 87.4626 101.001C91.0607 98.4404 96.0487 99.2801 98.6085 102.876Z"
                fill="#D9D9D9"
              />
              <path
                d="M77.2482 118.079C83.0852 126.279 94.4672 128.195 102.666 122.36C110.866 116.523 112.78 105.142 106.943 96.9418C101.108 88.7434 89.7275 86.8258 81.5272 92.6628C73.3288 98.4985 71.4113 109.879 77.2482 118.079ZM98.6077 102.875C101.167 106.471 100.329 111.461 96.731 114.022C93.1366 116.581 88.1455 115.74 85.5857 112.144C83.0259 108.548 83.8675 103.559 87.4618 101C91.0599 98.4392 96.0479 99.279 98.6077 102.875Z"
                fill="#8B8B8B"
              />
              <path
                d="M79.0335 116.813C84.17 124.029 94.1867 125.715 101.401 120.58C108.617 115.443 110.307 105.427 105.169 98.2093C100.034 90.995 90.017 89.3086 82.799 94.4464C75.5847 99.5815 73.897 109.596 79.0335 116.813ZM98.6095 102.878C101.169 106.475 100.331 111.464 96.7328 114.025C93.1384 116.584 88.1473 115.744 85.5875 112.147C83.0277 108.551 83.8693 103.562 87.4637 101.003C91.0617 98.4424 96.0497 99.2822 98.6095 102.878Z"
                fill="#D9D9D9"
              />
              <path
                d="M60.3482 33.3593C59.9151 33.7034 59.7636 34.3927 60.0111 34.8836L62.713 40.294C61.6356 41.3281 60.6934 42.4591 59.9071 43.6775L54.0898 42.0445C53.5576 41.8969 52.9195 42.1775 52.6736 42.6722L52.1044 43.9207C51.8914 44.4306 52.0943 45.0991 52.5566 45.404L57.5972 48.7336C57.1882 50.1491 56.9418 51.6033 56.867 53.0703L51.0105 54.5685C50.4752 54.707 50.065 55.269 50.0993 55.8206L50.2284 57.1867C50.3 57.7365 50.8079 58.21 51.361 58.2435L57.393 58.6102C57.7389 60.0176 58.2558 61.3943 58.9382 62.7247L54.6155 66.9508C54.2186 67.338 54.1366 68.0358 54.4344 68.5046C54.4344 68.5046 54.4961 68.6067 54.8255 69.0695C55.1549 69.5323 55.2313 69.624 55.2313 69.624C55.5753 70.0571 56.2628 70.2099 56.7599 69.9635L62.1672 67.2611C63.1996 68.3397 64.3323 69.2806 65.5502 70.0701L63.919 75.8861C63.7701 76.4164 64.0507 77.0545 64.5467 77.3022L65.7953 77.8715C66.3052 78.0845 66.9705 77.881 67.2767 77.4205L70.6099 72.3774C72.0205 72.7871 73.4752 73.0304 74.9467 73.1075L76.4436 78.9623C76.5802 79.4988 77.1441 79.9077 77.6957 79.8734L79.0617 79.7444C79.6097 79.674 80.0845 79.1679 80.1199 78.6136L80.4804 72.5805C81.889 72.2365 83.2657 71.7196 84.5974 71.039L88.8236 75.3617C89.2076 75.758 89.9073 75.8388 90.3742 75.5422C90.3742 75.5422 90.475 75.4787 90.9396 75.148C91.4042 74.8173 91.4973 74.7428 91.4973 74.7428C91.9303 74.3987 92.0831 73.7112 91.8344 73.2185L89.1338 67.81C90.2092 66.7771 91.1521 65.643 91.9384 64.4246L97.7569 66.0594C98.2891 66.207 98.9259 65.9246 99.1718 65.4299L99.7411 64.1814C99.9541 63.6715 99.7529 63.0017 99.2901 62.7L94.2483 59.3685C94.6585 57.9548 94.9037 56.4988 94.9784 55.0318L100.835 53.5336C101.368 53.3964 101.779 52.8343 101.746 52.2815L101.617 50.9154C101.545 50.3656 101.037 49.8921 100.484 49.8586L94.455 49.4955C94.1079 48.0863 93.591 46.7097 92.9085 45.3792L97.2326 41.1549C97.6281 40.7659 97.7083 40.0694 97.4123 39.5993C97.4123 39.5993 97.3488 39.4985 97.0194 39.0357C96.69 38.5729 96.6155 38.4799 96.6155 38.4799C96.2696 38.0481 95.5839 37.894 95.0881 38.1422L89.6795 40.8429C88.6472 39.7642 87.5144 38.8233 86.2979 38.0356L87.9264 32.216C88.0753 31.6857 87.7947 31.0476 87.2987 30.7998L86.0502 30.2306C85.5384 30.0189 84.8731 30.2224 84.5688 30.6815L81.2355 35.7247C79.8249 35.315 78.3702 35.0717 76.8988 34.9946L75.4032 29.1417C75.2683 28.6038 74.7013 28.1944 74.1498 28.2287L72.7837 28.3578C72.2357 28.4281 71.7622 28.936 71.7269 29.4903L71.3651 35.5216C69.9564 35.8656 68.5792 36.3857 67.2493 37.065L63.0219 32.7404C62.6391 32.346 61.9382 32.2634 61.4713 32.5599C61.4713 32.5599 61.3704 32.6234 60.9058 32.9541C60.4412 33.2848 60.3482 33.3593 60.3482 33.3593ZM69.3698 46.8661C68.7916 47.3934 68.2919 47.9806 67.8675 48.6079C67.8395 48.6499 67.8078 48.6945 67.7798 48.7365C67.6608 48.9177 67.5537 49.1041 67.4479 49.2924C67.4178 49.3469 67.3846 49.4009 67.354 49.4585C67.2514 49.6473 67.1558 49.8421 67.0683 50.0367C67.0473 50.0847 67.0269 50.1295 67.0059 50.1775C66.505 51.3361 66.2346 52.5786 66.2046 53.8374C66.204 53.8598 66.2035 53.8822 66.2022 53.8997C66.2017 54.1508 66.205 54.3993 66.2189 54.6512C66.2189 54.6512 66.2192 54.6593 66.2218 54.6629C66.3016 55.9676 66.6472 57.2622 67.2679 58.4712C67.2679 58.4712 67.2679 58.4712 67.2705 58.4748L62.2805 62.0268C58.381 55.3715 59.8771 46.8296 65.8322 41.8962L69.3698 46.8661ZM73.988 51.3369C75.488 50.2692 77.5671 50.6193 78.6335 52.1174C79.7011 53.6173 79.3511 55.6965 77.8511 56.7641C76.3512 57.8318 74.2721 57.4817 73.2044 55.9818C72.1381 54.4837 72.4881 52.4046 73.988 51.3369ZM63.9184 64.3279L68.9085 60.776L68.9098 60.7778C69.852 61.7607 70.9621 62.5111 72.1655 63.0132C72.1681 63.0168 72.1744 63.0179 72.177 63.0216C72.4123 63.1159 72.6442 63.2016 72.8816 63.2835C72.8985 63.2879 72.9199 63.2948 72.94 63.2997C74.1392 63.6836 75.4017 63.8349 76.6604 63.741C76.7127 63.7369 76.7617 63.7323 76.8139 63.7282C77.0264 63.7092 77.2418 63.6827 77.4538 63.6475C77.5183 63.6375 77.5801 63.6237 77.6428 63.6149C77.8553 63.5767 78.0653 63.5347 78.2755 63.4816C78.3256 63.4707 78.3781 63.4554 78.4243 63.439C79.156 63.2434 79.8744 62.9635 80.562 62.5898L84.0983 67.5579C77.4864 71.5725 68.9282 70.1929 63.9184 64.3279ZM82.8215 60.8933C82.9998 60.7141 83.171 60.5288 83.3316 60.3401C83.3436 60.326 83.3575 60.3106 83.3664 60.296C84.1857 59.3214 84.7915 58.2095 85.1698 57.0335C85.1743 57.0165 85.1801 57.0014 85.1827 56.9858C85.5563 55.7993 85.7043 54.5475 85.61 53.3C85.61 53.3 85.6111 53.2937 85.6085 53.2901C85.5135 52.0376 85.1694 50.7916 84.5705 49.6249L84.571 49.6218L89.561 46.0698C93.379 52.5875 92.0329 60.9179 86.3857 65.8967L82.8233 60.892L82.8215 60.8933ZM87.9252 43.7755L82.9351 47.3274C82.9325 47.3238 82.9307 47.3251 82.9307 47.3251C82.0245 46.3772 80.961 45.6459 79.8074 45.1442C79.8048 45.1405 79.803 45.1419 79.7986 45.1395C78.6525 44.6407 77.4213 44.3706 76.1761 44.3364C76.1604 44.3338 76.1455 44.3361 76.1281 44.3348C74.893 44.3071 73.644 44.5155 72.4536 44.9687C72.4364 44.9755 72.416 44.9817 72.4019 44.989C72.1697 45.0771 71.9373 45.1764 71.7108 45.288L68.1484 40.2833C74.7055 36.575 83.017 38.0339 87.9252 43.7755Z"
                fill="black"
              />
              <path
                d="M69.2417 47.6612C65.9956 50.6083 65.1444 55.3867 67.1374 59.2707L60.4462 64.0335L62.0842 66.3346L68.7753 61.5718C71.7921 64.7297 76.5845 65.4882 80.4365 63.3885L85.3152 70.2425L87.6145 68.6058L82.6915 61.6897C85.6429 58.7235 86.3593 54.1623 84.4423 50.4199L91.5268 45.3772L89.8888 43.0761L82.8044 48.1188C79.8991 45.0827 75.3543 44.2692 71.5826 46.083L66.6597 39.1669L64.3604 40.8035L69.2417 47.6612ZM78.5035 52.9138C79.5711 54.4137 79.2211 56.4928 77.7212 57.5605C76.2249 58.6255 74.1439 58.2768 73.0763 56.7769C72.0099 55.2788 72.3618 53.1983 73.8581 52.1333C75.3567 51.0638 77.4358 51.4138 78.5035 52.9138Z"
                fill="#8B8B8B"
              />
              <path
                d="M60.2162 34.1525C59.7845 34.4984 59.6354 35.1833 59.8786 35.6799L62.581 41.0872C61.5037 42.1213 60.5596 43.2536 59.7733 44.472L53.9561 42.839C53.4257 42.6901 52.787 42.9738 52.5411 43.4685L51.9706 44.7152C51.7589 45.2269 51.9637 45.8942 52.4215 46.1967L57.4647 49.5299C57.0531 50.9418 56.8098 52.3965 56.7346 53.8666L50.878 55.3648C50.3432 55.5002 49.9344 56.0641 49.9669 56.617L50.0977 57.9817C50.1663 58.531 50.6755 59.0063 51.2285 59.0399L57.2598 59.4016C57.6038 60.8103 58.1238 62.1874 58.8044 63.5192L54.4804 67.7435C54.0854 68.1294 54.0047 68.829 54.2981 69.2954C54.2981 69.2954 54.3647 69.3968 54.6941 69.8596C55.0248 70.3242 55.0975 70.4185 55.0975 70.4185C55.4434 70.8503 56.1309 71.0031 56.6249 70.7562L62.0335 68.0556C63.0676 69.1329 64.1973 70.0733 65.417 70.8615L63.7839 76.6787C63.6364 77.2109 63.9169 77.849 64.4135 78.0936L65.6602 78.6642C66.1706 78.8741 66.8404 78.6729 67.1416 78.2132L70.4749 73.1701C71.8873 73.5785 73.3415 73.8249 74.8116 73.9002L76.3085 79.7549C76.447 80.2902 77.0091 80.7004 77.5606 80.6661L78.928 80.5389C79.4746 80.4667 79.9513 79.9593 79.9848 79.4062L80.3466 73.375C81.754 73.0291 83.1324 72.5109 84.4642 71.8303L88.6885 76.1543C89.0762 76.548 89.7753 76.6319 90.2422 76.3354C90.2422 76.3354 90.3431 76.2719 90.8059 75.9425C91.2705 75.6118 91.3635 75.5373 91.3635 75.5373C91.7966 75.1932 91.948 74.5039 91.7012 74.0099L89.0005 68.6013C90.0779 67.5672 91.017 66.4357 91.8064 65.2178L97.6237 66.8508C98.1559 66.9984 98.7927 66.716 99.0417 66.2218L99.6078 64.9728C99.819 64.4642 99.6192 63.7961 99.1569 63.4913L94.115 60.1599C94.5235 58.7475 94.7686 57.2915 94.8451 55.8232L100.702 54.325C101.238 54.1883 101.644 53.6239 101.611 53.0742L101.484 51.7068C101.412 51.1601 100.904 50.6835 100.351 50.6499L94.32 50.2882C93.9728 48.879 93.4572 47.5042 92.7766 46.1725L97.1011 41.945C97.4943 41.5604 97.5751 40.8608 97.2804 40.3926C97.2804 40.3926 97.2169 40.2917 96.8862 39.8271C96.5568 39.3643 96.4809 39.2694 96.4809 39.2694C96.1363 38.8395 95.4501 38.6886 94.9567 38.9323L89.5476 41.636C88.5134 40.5587 87.3793 39.616 86.1628 38.8283L87.7958 33.0111C87.9447 32.4807 87.6609 31.8421 87.168 31.5949L85.9177 31.027C85.4078 30.8139 84.7411 31.0156 84.4381 31.4766L81.1049 36.5198C79.6911 36.1095 78.2351 35.8643 76.7681 35.7896L75.2699 29.933C75.1346 29.3983 74.5688 28.9907 74.0178 29.0219L72.6549 29.1515C72.1051 29.2231 71.6303 29.7292 71.5949 30.2835L71.2331 36.3148C69.8226 36.6601 68.4492 37.1776 67.1174 37.8582L62.8912 33.5355C62.5053 33.1405 61.8057 33.0597 61.3375 33.3544C61.3375 33.3544 61.2367 33.4179 60.7721 33.7486C60.3093 34.078 60.2162 34.1525 60.2162 34.1525ZM88.6694 45.6758C93.733 52.7895 92.0696 62.6604 84.9559 67.724C77.844 72.7862 67.9726 71.1259 62.909 64.0122C57.8454 56.8985 59.5089 47.0276 66.6208 41.9653C73.7326 36.9031 83.6059 38.5621 88.6694 45.6758Z"
                fill="#D9D9D9"
              />
              <path
                d="M62.1703 64.5348C67.5229 72.0546 77.9579 73.8098 85.4759 68.4585C92.9957 63.1059 94.754 52.6714 89.4014 45.1516C84.0514 37.6355 73.6137 35.8766 66.0939 41.2292C58.5747 46.5787 56.819 57.0169 62.1703 64.5348ZM88.6679 45.6737C93.7314 52.7874 92.068 62.6583 84.9543 67.7219C77.8424 72.7842 67.971 71.1238 62.9074 64.0101C57.8439 56.8964 59.5073 47.0255 66.6192 41.9633C73.7311 36.901 83.6043 38.56 88.6679 45.6737Z"
                fill="#8B8B8B"
              />
              <path
                d="M67.867 60.4875C70.984 64.8666 77.0568 65.8906 81.434 62.7748C85.8131 59.6578 86.8358 53.5833 83.7187 49.2042C80.603 44.8269 74.5297 43.8061 70.1507 46.9231C65.7734 50.0389 64.7512 56.1103 67.867 60.4875ZM78.5055 52.915C79.5732 54.4149 79.2232 56.494 77.7232 57.5617C76.227 58.6267 74.146 58.278 73.0783 56.7781C72.012 55.28 72.3639 53.1995 73.8601 52.1345C75.3588 51.065 77.4379 51.415 78.5055 52.915Z"
                fill="#8B8B8B"
              />
              <path
                d="M68.5998 59.9617C71.4278 63.9347 76.9388 64.8625 80.9081 62.0371C84.8811 59.2091 85.8089 53.6982 82.9809 49.7252C80.1555 45.7558 74.6446 44.828 70.6716 47.656C66.7022 50.4814 65.7744 55.9924 68.5998 59.9617ZM78.503 52.9125C79.5707 54.4125 79.2207 56.4916 77.7207 57.5592C76.2245 58.6243 74.1435 58.2756 73.0759 56.7756C72.0095 55.2775 72.3614 53.1971 73.8576 52.132C75.3563 51.0626 77.4354 51.4126 78.503 52.9125Z"
                fill="#D9D9D9"
              />
              <path
                d="M130.046 93.5834L134.532 96.5169C134.141 99.077 134.378 101.733 135.266 104.243L131.416 107.967C131.928 109.028 132.527 110.059 133.234 111.052C133.939 112.042 134.719 112.948 135.553 113.779L140.333 111.36C142.411 113.025 144.844 114.113 147.392 114.584L148.694 119.781C151.061 119.962 153.46 119.748 155.791 119.111L156.088 113.749C157.281 113.283 158.443 112.682 159.535 111.904C160.627 111.127 161.574 110.227 162.406 109.252L167.569 110.728C168.933 108.734 169.925 106.534 170.527 104.24L166.043 101.308C166.432 98.7465 166.198 96.094 165.308 93.5824L169.157 89.8592C168.646 88.7977 168.046 87.7644 167.341 86.7748C166.634 85.7816 165.856 84.8777 165.02 84.0479L160.242 86.4651C158.162 84.8011 155.729 83.7105 153.182 83.2415L151.879 78.0424C149.516 77.8619 147.113 78.0756 144.783 78.712L144.485 84.0747C143.291 84.5417 142.13 85.1417 141.038 85.919C139.946 86.6963 138.998 87.5976 138.167 88.5719L133.003 87.097C131.64 89.0894 130.651 91.2896 130.046 93.5834ZM155.821 94.975C157.996 98.0297 157.28 102.271 154.225 104.445C151.171 106.619 146.928 105.905 144.755 102.852C142.578 99.7938 143.295 95.5546 146.349 93.3803C149.404 91.2059 153.644 91.9166 155.821 94.975Z"
                fill="black"
              />
              <path
                d="M129.797 94.249L134.283 97.1794C133.895 99.7431 134.128 102.397 135.019 104.907L131.169 108.632C131.679 109.69 132.281 110.725 132.986 111.715C133.691 112.706 134.471 113.612 135.304 114.441L140.084 112.023C142.163 113.69 144.595 114.775 147.145 115.248L148.444 120.447C150.813 120.626 153.213 120.412 155.546 119.776L155.842 114.415C157.035 113.946 158.195 113.346 159.287 112.569C160.379 111.791 161.326 110.891 162.16 109.918L167.323 111.394C168.688 109.397 169.677 107.199 170.279 104.904L165.795 101.973C166.183 99.4089 165.951 96.7551 165.059 94.2449L168.91 90.5203C168.399 89.4619 167.798 88.4286 167.093 87.4372C166.388 86.4476 165.607 85.5401 164.774 84.7108L159.995 87.1293C157.914 85.4654 155.483 84.3766 152.934 83.9039L151.632 78.7067C149.267 78.5243 146.867 78.7417 144.532 79.3757L144.236 84.7371C143.043 85.206 141.884 85.8078 140.792 86.5851C139.7 87.3624 138.752 88.2606 137.918 89.2343L132.754 87.7595C131.392 89.7568 130.401 91.9534 129.797 94.249ZM155.572 95.6374C157.748 98.6939 157.034 102.934 153.978 105.109C150.921 107.285 146.68 106.569 144.506 103.515C142.331 100.46 143.044 96.2184 146.1 94.0427C149.155 91.8683 153.398 92.5826 155.572 95.6374Z"
                fill="#D9D9D9"
              />
              <path
                d="M140.279 106.522C144.113 111.909 151.592 113.17 156.981 109.334C162.368 105.499 163.627 98.0188 159.793 92.6319C155.958 87.2449 148.478 85.9855 143.091 89.82C137.702 93.6557 136.444 101.135 140.279 106.522ZM155.571 95.6369C157.747 98.6935 157.033 102.933 153.976 105.109C150.92 107.285 146.679 106.569 144.504 103.514C142.33 100.459 143.042 96.218 146.099 94.0423C149.154 91.8679 153.397 92.5822 155.571 95.6369Z"
                fill="#8B8B8B"
              />
              <path
                d="M141.432 105.705C144.814 110.457 151.412 111.568 156.164 108.185C160.916 104.803 162.027 98.2053 158.644 93.453C155.262 88.7008 148.666 87.5919 143.913 90.9746C139.163 94.3559 138.049 100.953 141.432 105.705ZM155.573 95.6391C157.749 98.6957 157.035 102.935 153.979 105.111C150.922 107.287 146.681 106.571 144.507 103.516C142.332 100.462 143.045 96.2202 146.101 94.0445C149.156 91.8701 153.399 92.5844 155.573 95.6391Z"
                fill="#D9D9D9"
              />
              <path
                d="M130.439 113.817C130.11 114.029 129.78 114.247 129.46 114.475C129.14 114.703 128.824 114.945 128.518 115.184L130.599 118.673C129.921 119.23 129.274 119.808 128.682 120.436L125.365 118.115C124.835 118.702 124.33 119.309 123.86 119.934L126.772 122.763C126.262 123.471 125.806 124.209 125.392 124.967L121.581 123.581C121.219 124.285 120.892 125.003 120.599 125.73L124.123 127.695C123.816 128.511 123.58 129.352 123.377 130.193L119.335 129.843C119.167 130.613 119.038 131.388 118.943 132.172L122.877 133.162C122.794 134.028 122.743 134.897 122.762 135.768L118.791 136.47C118.831 137.254 118.906 138.041 119.016 138.823L123.07 138.76C123.212 139.615 123.405 140.458 123.649 141.296L119.971 143.013C120.211 143.757 120.492 144.497 120.802 145.227L124.693 144.122C125.054 144.904 125.473 145.667 125.927 146.413L122.819 149.028C123.032 149.358 123.249 149.686 123.478 150.008C123.707 150.33 123.947 150.644 124.187 150.95L127.674 148.868C128.233 149.548 128.815 150.192 129.435 150.784L127.118 154.1C127.705 154.631 128.311 155.137 128.935 155.607L131.763 152.696C132.476 153.202 133.212 153.663 133.97 154.074L132.583 157.886C133.289 158.246 134.004 158.57 134.732 158.864L136.696 155.344C137.512 155.646 138.35 155.883 139.195 156.087L138.843 160.13C139.614 160.295 140.39 160.429 141.173 160.522L142.164 156.587C143.027 156.672 143.896 156.72 144.768 156.698L145.47 160.671C146.256 160.636 147.041 160.559 147.823 160.449L147.761 156.392C148.615 156.25 149.459 156.06 150.297 155.813L152.017 159.492C152.761 159.251 153.5 158.973 154.227 158.663L153.122 154.772C153.906 154.413 154.669 153.994 155.414 153.535L158.03 156.645C158.359 156.433 158.687 156.213 159.007 155.985C159.327 155.757 159.645 155.518 159.951 155.278L157.867 151.789C158.55 151.231 159.194 150.649 159.786 150.029L163.102 152.345C163.635 151.762 164.138 151.156 164.607 150.53L161.695 147.7C162.201 146.99 162.66 146.253 163.071 145.494L166.885 146.88C167.247 146.176 167.574 145.459 167.865 144.73L164.344 142.764C164.648 141.949 164.885 141.113 165.091 140.267L169.132 140.621C169.3 139.85 169.43 139.072 169.524 138.291L165.589 137.3C165.673 136.435 165.721 135.566 165.705 134.695L169.673 133.993C169.636 133.209 169.564 132.423 169.452 131.642L165.397 131.704C165.256 130.851 165.063 130.007 164.82 129.166L168.495 127.448C168.255 126.704 167.977 125.965 167.666 125.238L163.774 126.341C163.418 125.561 162.999 124.799 162.542 124.049L165.651 121.436C165.439 121.107 165.221 120.778 164.993 120.457C164.763 120.134 164.524 119.821 164.283 119.514L160.795 121.594C160.239 120.918 159.657 120.274 159.032 119.679L161.35 116.365C160.765 115.83 160.157 115.324 159.531 114.854L156.706 117.766C155.992 117.263 155.257 116.803 154.497 116.39L155.884 112.58C155.182 112.218 154.462 111.892 153.732 111.598L151.771 115.119C150.952 114.817 150.116 114.58 149.27 114.375L149.624 110.334C148.854 110.165 148.077 110.035 147.294 109.941L146.304 113.874C145.438 113.792 144.567 113.741 143.699 113.76L142.994 109.789C142.21 109.826 141.424 109.903 140.643 110.013L140.702 114.069C139.85 114.212 139.004 114.401 138.17 114.65L136.45 110.972C135.706 111.212 134.969 111.489 134.24 111.798L135.346 115.693C134.564 116.046 133.803 116.469 133.052 116.927L130.439 113.817ZM141.289 137.33C140.131 135.704 140.511 133.447 142.138 132.289C143.764 131.132 146.021 131.515 147.177 133.139C148.335 134.765 147.953 137.021 146.329 138.177C144.704 139.337 142.446 138.957 141.289 137.33ZM136.604 140.665C137.563 142.011 137.247 143.884 135.899 144.843C134.551 145.803 132.679 145.488 131.72 144.141C130.76 142.791 131.075 140.919 132.423 139.959C133.771 139 135.643 139.315 136.604 140.665ZM142.426 147.826C142.267 146.178 143.478 144.715 145.126 144.56C146.774 144.401 148.235 145.609 148.39 147.257C148.549 148.905 147.341 150.366 145.694 150.524C144.046 150.683 142.583 149.475 142.426 147.826ZM154.235 143.097C152.728 142.409 152.067 140.633 152.754 139.127C153.443 137.622 155.22 136.958 156.727 137.647C158.231 138.334 158.891 140.11 158.205 141.616C157.52 143.12 155.742 143.785 154.235 143.097ZM151.867 129.801C150.906 128.451 151.223 126.577 152.57 125.619C153.918 124.659 155.79 124.974 156.751 126.324C157.709 127.671 157.394 129.543 156.046 130.503C154.698 131.462 152.827 131.149 151.867 129.801ZM146.045 122.64C146.205 124.29 144.993 125.75 143.347 125.908C141.7 126.064 140.235 124.854 140.081 123.209C139.923 121.563 141.13 120.098 142.779 119.941C144.425 119.786 145.889 120.992 146.045 122.64ZM134.234 127.368C135.741 128.057 136.402 129.834 135.716 131.34C135.026 132.845 133.25 133.509 131.745 132.819C130.239 132.129 129.577 130.355 130.265 128.848C130.951 127.34 132.731 126.682 134.234 127.368Z"
                fill="black"
              />
              <path
                d="M130.302 114.19C129.973 114.402 129.645 114.619 129.323 114.848C129.001 115.077 128.687 115.317 128.381 115.557L130.463 119.044C129.782 119.601 129.138 120.183 128.545 120.806L125.23 118.487C124.698 119.072 124.195 119.681 123.724 120.305L126.634 123.131C126.126 123.843 125.669 124.582 125.258 125.337L121.444 123.951C121.082 124.655 120.755 125.373 120.464 126.101L123.987 128.066C123.684 128.88 123.448 129.72 123.243 130.563L119.202 130.213C119.033 130.983 118.903 131.76 118.808 132.541L122.743 133.532C122.659 134.397 122.61 135.264 122.63 136.137L118.659 136.839C118.698 137.624 118.771 138.413 118.881 139.191L122.937 139.132C123.079 139.985 123.27 140.827 123.515 141.667L119.838 143.385C120.077 144.127 120.357 144.865 120.669 145.597L124.559 144.492C124.917 145.274 125.336 146.037 125.793 146.787L122.683 149.399C122.897 149.73 123.112 150.056 123.343 150.38C123.572 150.702 123.809 151.012 124.052 151.322L127.539 149.24C128.097 149.92 128.679 150.563 129.301 151.154L126.985 154.471C127.57 155.002 128.174 155.506 128.802 155.977L131.629 153.066C132.343 153.573 133.077 154.031 133.837 154.444L132.451 158.255C133.153 158.618 133.871 158.942 134.6 159.233L136.564 155.713C137.38 156.015 138.217 156.254 139.062 156.457L138.71 160.5C139.478 160.666 140.255 160.797 141.039 160.892L142.03 156.957C142.894 157.039 143.761 157.092 144.632 157.07L145.335 161.042C146.119 161.005 146.906 160.93 147.688 160.82L147.627 156.762C148.478 156.622 149.323 156.431 150.162 156.185L151.88 159.861C152.624 159.621 153.364 159.343 154.092 159.034L152.986 155.142C153.769 154.786 154.531 154.367 155.28 153.908L157.894 157.019C158.223 156.808 158.551 156.588 158.871 156.36C159.195 156.129 159.509 155.892 159.815 155.652L157.731 152.164C158.412 151.607 159.054 151.026 159.644 150.402L162.961 152.721C163.495 152.134 163.998 151.528 164.469 150.901L161.556 148.074C162.064 147.363 162.523 146.625 162.934 145.867L166.746 147.254C167.108 146.55 167.434 145.833 167.728 145.103L164.204 143.138C164.509 142.323 164.745 141.485 164.952 140.641L168.993 140.995C169.16 140.223 169.29 139.446 169.385 138.665L165.45 137.674C165.534 136.809 165.584 135.939 165.566 135.069L169.537 134.365C169.499 133.582 169.426 132.796 169.315 132.015L165.26 132.076C165.116 131.223 164.928 130.378 164.677 129.542L168.356 127.822C168.114 127.077 167.836 126.341 167.529 125.611L163.635 126.715C163.279 125.936 162.86 125.173 162.403 124.423L165.512 121.81C165.298 121.478 165.082 121.152 164.854 120.832C164.622 120.506 164.385 120.196 164.144 119.888L160.657 121.97C160.098 121.29 159.516 120.646 158.893 120.053L161.213 116.738C160.623 116.204 160.018 115.698 159.393 115.23L156.565 118.142C155.857 117.631 155.119 117.175 154.363 116.763L155.747 112.95C155.046 112.589 154.327 112.263 153.599 111.969L151.634 115.492C150.816 115.187 149.978 114.951 149.133 114.748L149.485 110.705C148.716 110.538 147.94 110.407 147.157 110.314L146.167 114.246C145.301 114.165 144.431 114.112 143.561 114.133L142.859 110.16C142.073 110.199 141.286 110.274 140.504 110.384L140.567 114.44C139.715 114.584 138.868 114.773 138.03 115.019L136.314 111.343C135.569 111.585 134.83 111.86 134.101 112.172L135.205 116.065C134.426 116.422 133.665 116.84 132.916 117.298L130.302 114.19ZM145.554 150.896C143.906 151.055 142.442 149.846 142.285 148.201C142.13 146.551 143.339 145.089 144.987 144.931C146.631 144.774 148.096 145.984 148.251 147.631C148.411 149.276 147.201 150.74 145.554 150.896ZM156.59 138.019C158.093 138.707 158.754 140.483 158.069 141.988C157.38 143.493 155.603 144.156 154.097 143.47C152.592 142.78 151.931 141.002 152.617 139.5C153.304 137.991 155.083 137.331 156.59 138.019ZM131.583 144.514C130.622 143.164 130.938 141.292 132.286 140.332C133.634 139.373 135.506 139.688 136.467 141.038C137.425 142.384 137.11 144.256 135.762 145.216C134.412 146.177 132.541 145.86 131.583 144.514ZM156.612 126.699C157.57 128.045 157.255 129.917 155.907 130.877C154.559 131.836 152.686 131.521 151.728 130.175C150.767 128.825 151.082 126.953 152.43 125.993C153.779 125.033 155.651 125.349 156.612 126.699ZM147.043 133.509C148.201 135.136 147.818 137.393 146.193 138.549C144.565 139.708 142.312 139.325 141.155 137.701C139.997 136.073 140.375 133.816 142.001 132.659C143.625 131.503 145.885 131.881 147.043 133.509ZM142.638 120.313C144.288 120.156 145.75 121.367 145.907 123.011C146.062 124.658 144.854 126.125 143.207 126.28C141.559 126.436 140.097 125.225 139.939 123.579C139.784 121.932 140.989 120.47 142.638 120.313ZM134.095 127.739C135.602 128.428 136.264 130.205 135.578 131.708C134.889 133.215 133.11 133.875 131.606 133.19C130.099 132.502 129.44 130.725 130.127 129.219C130.813 127.713 132.591 127.051 134.095 127.739Z"
                fill="#D9D9D9"
              />
              <path
                d="M129.563 145.954C135.277 153.982 146.415 155.854 154.442 150.141C162.468 144.427 164.347 133.287 158.634 125.261C152.919 117.232 141.777 115.358 133.75 121.071C125.724 126.784 123.848 137.925 129.563 145.954ZM131.605 133.192C130.098 132.504 129.439 130.727 130.126 129.221C130.814 127.714 132.592 127.052 134.094 127.741C135.601 128.43 136.263 130.207 135.577 131.71C134.891 133.217 133.11 133.879 131.605 133.192ZM131.584 144.515C130.623 143.165 130.938 141.293 132.286 140.333C133.634 139.373 135.507 139.689 136.468 141.039C137.426 142.385 137.111 144.257 135.763 145.217C134.413 146.178 132.542 145.861 131.584 144.515ZM145.555 150.897C143.907 151.056 142.442 149.846 142.286 148.202C142.131 146.551 143.34 145.09 144.988 144.931C146.632 144.775 148.096 145.984 148.252 147.632C148.411 149.277 147.202 150.741 145.555 150.897ZM156.59 138.02C158.094 138.708 158.755 140.484 158.07 141.988C157.38 143.493 155.604 144.157 154.098 143.471C152.593 142.781 151.931 141.003 152.617 139.501C153.304 137.992 155.083 137.332 156.59 138.02ZM156.613 126.699C157.571 128.046 157.256 129.918 155.908 130.878C154.559 131.837 152.687 131.522 151.729 130.176C150.768 128.826 151.083 126.953 152.431 125.994C153.779 125.034 155.652 125.349 156.613 126.699ZM147.044 133.51C148.202 135.136 147.818 137.393 146.194 138.55C144.566 139.708 142.312 139.326 141.156 137.701C139.997 136.073 140.375 133.817 142.002 132.66C143.626 131.503 145.885 131.882 147.044 133.51ZM142.639 120.314C144.288 120.157 145.751 121.367 145.907 123.012C146.063 124.659 144.855 126.125 143.207 126.281C141.56 126.437 140.097 125.226 139.94 123.58C139.784 121.933 140.99 120.471 142.639 120.314Z"
                fill="#8B8B8B"
              />
              <path
                d="M130.424 145.339C135.799 152.89 146.283 154.652 153.832 149.278C161.384 143.902 163.149 133.422 157.774 125.871C152.398 118.318 141.916 116.552 134.364 121.928C126.813 127.303 125.048 137.786 130.424 145.339ZM131.605 133.191C130.098 132.502 129.439 130.725 130.126 129.219C130.814 127.712 132.592 127.051 134.094 127.74C135.601 128.428 136.263 130.206 135.577 131.708C134.891 133.216 133.11 133.877 131.605 133.191ZM131.584 144.513C130.623 143.163 130.938 141.291 132.286 140.331C133.634 139.372 135.507 139.687 136.468 141.037C137.426 142.383 137.111 144.256 135.763 145.215C134.413 146.176 132.542 145.86 131.584 144.513ZM145.555 150.895C143.907 151.054 142.442 149.845 142.286 148.201C142.131 146.55 143.34 145.089 144.988 144.93C146.632 144.774 148.096 145.983 148.252 147.63C148.411 149.275 147.202 150.74 145.555 150.895ZM156.59 138.019C158.094 138.707 158.755 140.482 158.07 141.987C157.38 143.492 155.604 144.156 154.098 143.469C152.593 142.779 151.931 141.002 152.617 139.499C153.304 137.99 155.083 137.33 156.59 138.019ZM156.612 126.698C157.571 128.044 157.256 129.917 155.907 130.876C154.559 131.836 152.687 131.521 151.729 130.174C150.768 128.824 151.083 126.952 152.431 125.992C153.779 125.033 155.652 125.348 156.612 126.698ZM147.044 133.509C148.202 135.135 147.818 137.392 146.194 138.548C144.566 139.707 142.312 139.324 141.156 137.7C139.997 136.072 140.375 133.816 142.001 132.658C143.626 131.502 145.885 131.881 147.044 133.509ZM142.639 120.312C144.288 120.155 145.751 121.366 145.907 123.01C146.063 124.658 144.855 126.124 143.207 126.28C141.56 126.435 140.097 125.225 139.94 123.579C139.784 121.931 140.99 120.469 142.639 120.312Z"
                fill="#D9D9D9"
              />
              <path
                d="M137.381 140.386C140.02 144.094 145.168 144.961 148.876 142.321C152.585 139.681 153.452 134.533 150.813 130.825C148.172 127.116 143.024 126.249 139.315 128.89C135.607 131.529 134.74 136.677 137.381 140.386ZM147.043 133.509C148.2 135.135 147.817 137.392 146.193 138.548C144.565 139.707 142.311 139.324 141.155 137.7C139.996 136.072 140.374 133.816 142 132.658C143.624 131.502 145.884 131.881 147.043 133.509Z"
                fill="#8B8B8B"
              />
              <path
                d="M138.19 139.814C140.512 143.076 145.039 143.841 148.304 141.517C151.568 139.194 152.332 134.662 150.011 131.4C147.687 128.135 143.154 127.374 139.891 129.697C136.626 132.021 135.866 136.549 138.19 139.814ZM147.046 133.511C148.203 135.137 147.82 137.394 146.196 138.55C144.568 139.709 142.314 139.327 141.157 137.702C139.999 136.074 140.377 133.818 142.003 132.66C143.627 131.504 145.887 131.883 147.046 133.511Z"
                fill="#D9D9D9"
              />
            </svg> */}

            <svg
              width="159"
              height="160"
              viewBox="0 0 159 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearOne}
            >
              <path
                d="M48.7368 31.9388C48.0055 32.4097 47.2851 32.8922 46.5699 33.4013C45.8565 33.9091 45.1642 34.4349 44.4821 34.9673L49.0854 42.6732C47.5886 43.904 46.159 45.1944 44.8472 46.5691L37.5175 41.4405C36.338 42.7376 35.2233 44.0794 34.1841 45.4613L40.6262 51.7123C39.5049 53.2849 38.495 54.9132 37.5795 56.5928L29.1485 53.5296C28.3512 55.0811 27.6285 56.6676 26.9801 58.2811L34.7687 62.6256C34.095 64.428 33.5722 66.28 33.1228 68.146L24.1862 67.3692C23.819 69.0719 23.527 70.7873 23.319 72.52L32.0179 74.709C31.831 76.6224 31.7203 78.5422 31.7681 80.4677L22.985 82.0206C23.0649 83.7551 23.2301 85.4896 23.4781 87.2202L32.4454 87.0877C32.7605 88.9746 33.1797 90.8451 33.7279 92.6955L25.5942 96.4925C26.125 98.1403 26.7375 99.7714 27.4242 101.383L36.0305 98.9386C36.8179 100.668 37.7449 102.354 38.7606 104.009L31.8853 109.779C32.3563 110.511 32.8388 111.231 33.3465 111.945C33.8543 112.658 34.3802 113.35 34.9138 114.034L42.6198 109.431C43.8506 110.928 45.1392 112.359 46.5144 113.667L41.3871 120.999C42.6847 122.175 44.026 123.293 45.4084 124.329L51.6607 117.889C53.2296 119.013 54.8598 120.021 56.5381 120.935L53.4749 129.366C55.0295 130.164 56.6141 130.888 58.2295 131.535L62.574 123.746C64.3764 124.42 66.2271 124.941 68.0944 125.392L67.3158 134.33C69.0167 134.699 70.7357 134.988 72.4653 135.195L74.6574 126.497C76.5721 126.686 78.4888 126.796 80.4125 126.75L81.9672 135.531C83.7023 135.448 85.438 135.285 87.1694 135.042L87.033 126.069C88.9229 125.755 90.7935 125.335 92.6421 124.788L96.4391 132.922C98.0851 132.393 99.7179 131.779 101.33 131.089L98.8852 122.486C100.614 121.697 102.301 120.768 103.954 119.757L109.727 126.628C110.454 126.159 111.178 125.678 111.891 125.17C112.606 124.661 113.296 124.134 113.981 123.599L109.376 115.898C110.875 114.663 112.302 113.377 113.616 112.001L120.946 117.126C122.124 115.83 123.238 114.492 124.278 113.107L117.837 106.854C118.961 105.285 119.97 103.655 120.882 101.975L129.316 105.042C130.11 103.487 130.833 101.9 131.481 100.287L123.691 95.9437C124.367 94.1399 124.891 92.2897 125.339 90.4219L134.275 91.1987C134.645 89.4997 134.935 87.7806 135.144 86.0497L126.444 83.8589C126.629 81.9468 126.743 80.0244 126.698 78.1025L135.48 76.5478C135.397 74.8127 135.233 73.077 134.987 71.3451L126.016 71.4802C125.701 69.5934 125.28 67.7241 124.735 65.8743L132.869 62.0741C132.339 60.4312 131.726 58.7953 131.037 57.1853L122.431 59.6293C121.643 57.9028 120.717 56.2141 119.702 54.5636L126.576 48.7884C126.107 48.0589 125.623 47.3367 125.115 46.6233C124.607 45.9099 124.083 45.2195 123.548 44.5337L115.843 49.1419C114.611 47.6401 113.322 46.2124 111.947 44.9007L117.075 37.5691C115.779 36.3914 114.438 35.2786 113.051 34.2401L106.802 40.6809C105.23 39.5565 103.602 38.5466 101.923 37.6329L104.987 29.2019C103.434 28.4028 101.847 27.6801 100.235 27.0335L95.8921 34.8239C94.0883 34.1484 92.2345 33.627 90.3672 33.1757L91.1471 24.2397C89.4431 23.8707 87.7272 23.5817 85.9963 23.3724L83.8041 32.0708C81.8939 31.8844 79.9728 31.7719 78.0473 31.8197L76.4944 23.0366C74.7593 23.1196 73.0237 23.283 71.2949 23.5297L71.4286 32.4989C69.5418 32.8139 67.6725 33.235 65.8214 33.7782L62.0225 25.6458C60.376 26.1784 58.7437 26.7891 57.1337 27.4776L59.5777 36.0839C57.8475 36.8745 56.1625 37.7983 54.5071 38.814L48.7368 31.9388ZM85.7449 74.6499C88.3047 78.2461 87.4644 83.2373 83.8664 85.7983C80.272 88.3568 75.2809 87.5165 72.7211 83.9203C70.1613 80.3242 71.0016 75.333 74.596 72.7745C78.194 70.2135 83.1851 71.0537 85.7449 74.6499Z"
                fill="#272727"
              />
              <path
                d="M48.6026 33.1643C47.8713 33.6353 47.1509 34.1177 46.4356 34.6268C45.7223 35.1346 45.03 35.6605 44.3479 36.1928L48.9511 43.8988C47.4543 45.1296 46.0247 46.42 44.7148 47.7934L37.3832 42.6661C36.2037 43.9632 35.0891 45.305 34.0511 46.6888L40.4919 52.9379C39.3707 54.5105 38.3589 56.1401 37.4471 57.8171L29.0143 54.7552C28.217 56.3066 27.4942 57.8931 26.8459 59.5067L34.6363 63.8498C33.9607 65.6536 33.4393 67.5075 32.9899 69.3734L24.052 68.5948C23.6848 70.2975 23.3959 72.0134 23.1866 73.7443L31.885 75.9364C31.6968 77.848 31.5843 79.7691 31.6338 81.6933L22.8507 83.2462C22.9337 84.9813 23.0953 86.7183 23.342 88.4471L32.313 88.312C32.6263 90.2001 33.0473 92.0694 33.5924 93.9192L25.46 97.7181C25.9908 99.3659 26.6033 100.997 27.2912 102.61L35.8962 100.164C36.6842 101.891 37.6106 103.579 38.6251 105.233L31.7511 111.005C32.2239 111.735 32.7045 112.457 33.2123 113.17C33.7214 113.885 34.2478 114.575 34.7796 115.26L42.4843 110.655C43.7164 112.153 45.0068 113.583 46.3814 114.895L41.2528 122.224C42.5518 123.403 43.8905 124.517 45.2755 125.557L51.5265 119.114C53.0972 120.237 54.7268 121.249 56.4057 122.159L53.342 130.593C54.8934 131.391 56.4817 132.112 58.0939 132.759L62.4397 124.972C64.2417 125.649 66.0942 126.168 67.9602 126.618L67.1846 135.556C68.8842 135.923 70.6014 136.214 72.3311 136.421L74.5232 127.723C76.4379 127.911 78.3558 128.023 80.2814 127.976L81.8343 136.759C83.568 136.674 85.3037 136.511 87.0351 136.267L86.9006 127.293C88.7869 126.981 90.6579 126.559 92.5078 126.014L96.3049 134.148C97.9509 133.618 99.5837 133.004 101.195 132.315L98.7528 123.71C100.479 122.922 102.167 121.994 103.82 120.983L109.592 127.853C110.32 127.385 111.045 126.902 111.757 126.395C112.472 125.886 113.161 125.36 113.847 124.825L109.241 117.123C110.741 115.888 112.168 114.602 113.481 113.226L120.812 118.352C121.989 117.056 123.104 115.717 124.143 114.332L117.701 108.081C118.824 106.51 119.835 104.881 120.748 103.201L129.181 106.268C129.978 104.711 130.699 103.126 131.349 101.514L123.558 97.1711C124.234 95.3673 124.756 93.5153 125.206 91.6462L134.141 92.4243C134.513 90.724 134.8 89.0062 135.011 87.2771L126.309 85.0845C126.498 83.1729 126.61 81.2518 126.564 79.3281L135.344 77.7716C135.262 76.0384 135.099 74.3027 134.854 72.5726L125.882 72.7058C125.568 70.8208 125.146 68.9497 124.601 67.0999L132.736 63.3015C132.205 61.6537 131.593 60.0227 130.903 58.4109L122.298 60.8567C121.509 59.1283 120.582 57.4397 119.568 55.7861L126.442 50.014C125.972 49.2845 125.49 48.5641 124.981 47.8489C124.473 47.1355 123.948 46.4451 123.414 45.7593L115.709 50.3644C114.479 48.8644 113.186 47.4362 111.813 46.1262L116.942 38.7965C115.644 37.617 114.306 36.5029 112.919 35.4644L106.667 41.9046C105.096 40.7821 103.468 39.7722 101.789 38.8585L104.852 30.4276C103.301 29.6302 101.715 28.9075 100.101 28.2591L95.7578 36.0495C93.9541 35.374 92.1002 34.8525 90.2342 34.4032L91.0129 25.4652C89.3102 25.0981 87.5961 24.8079 85.8621 24.598L83.673 33.2969C81.7597 33.11 79.8386 32.9975 77.913 33.0452L76.3601 24.2621C74.6251 24.3452 72.8894 24.5086 71.1606 24.7553L71.2943 33.7245C69.4075 34.0395 67.5383 34.4606 65.6853 35.0051L61.8896 26.8732C60.2417 27.404 58.6094 28.0147 56.9995 28.7032L59.4435 37.3095C57.7132 38.1001 56.0282 39.0239 54.3728 40.0396L48.6026 33.1643ZM85.6089 75.8768C88.1686 79.473 87.3302 84.4628 83.7322 87.0239C80.1378 89.5824 75.1466 88.7421 72.5869 85.1459C70.0271 81.5498 70.8687 76.5604 74.463 74.0019C78.061 71.4409 83.0491 72.2806 85.6089 75.8768Z"
                fill="#D9D9D9"
              />
              <path
                d="M46.9649 103.382C59.5971 121.129 84.2241 125.275 101.969 112.644C119.716 100.012 123.862 75.3847 111.23 57.6379C98.5975 39.8911 73.9718 35.7468 56.225 48.3791C38.4788 61.0082 34.3326 85.6351 46.9649 103.382ZM85.6083 75.8753C88.168 79.4715 87.3296 84.4614 83.7316 87.0225C80.1372 89.5809 75.1461 88.7406 72.5863 85.1445C70.0265 81.5483 70.8681 76.5589 74.4625 74.0005C78.0605 71.4394 83.0485 72.2792 85.6083 75.8753Z"
                fill="#8B8B8B"
              />
              <path
                d="M48.8692 102.027C60.7528 118.722 83.9207 122.623 100.614 110.741C117.309 98.8571 121.209 75.6893 109.326 58.9943C97.4434 42.3011 74.2743 38.3988 57.5793 50.2824C40.8848 62.1628 36.9869 85.3343 48.8692 102.027ZM85.6085 75.8763C88.1682 79.4725 87.3298 84.4624 83.7318 87.0234C80.1374 89.5819 75.1462 88.7416 72.5865 85.1454C70.0267 81.5493 70.8683 76.5599 74.4626 74.0014C78.0607 71.4404 83.0487 72.2801 85.6085 75.8763Z"
                fill="#D9D9D9"
              />
              <path
                d="M64.2482 91.0789C70.0852 99.2791 81.4672 101.195 89.6656 95.3597C97.8658 89.5227 99.7802 78.1421 93.9433 69.9418C88.1076 61.7434 76.7275 59.8258 68.5272 65.6628C60.3288 71.4985 58.4113 82.8786 64.2482 91.0789ZM85.6077 75.8751C88.1674 79.4713 87.329 84.4612 83.731 87.0222C80.1366 89.5807 75.1455 88.7404 72.5857 85.1443C70.0259 81.5481 70.8675 76.5587 74.4618 74.0003C78.0599 71.4392 83.0479 72.279 85.6077 75.8751Z"
                fill="#8B8B8B"
              />
              <path
                d="M66.0335 89.8126C71.17 97.0287 81.1867 98.7151 88.4011 93.58C95.6172 88.4435 97.3067 78.4273 92.1689 71.2093C87.0338 63.995 77.017 62.3086 69.799 67.4464C62.5847 72.5815 60.897 82.5965 66.0335 89.8126ZM85.6095 75.8783C88.1693 79.4745 87.3308 84.4644 83.7328 87.0254C80.1384 89.5839 75.1473 88.7436 72.5875 85.1475C70.0277 81.5513 70.8693 76.5619 74.4637 74.0034C78.0617 71.4424 83.0497 72.2822 85.6095 75.8783Z"
                fill="#D9D9D9"
              />
            </svg>

            <svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearTwo}
            >
              <path
                d="M21.3482 16.3593C20.9151 16.7034 20.7636 17.3927 21.0111 17.8836L23.713 23.294C22.6356 24.3281 21.6934 25.4591 20.9071 26.6775L15.0898 25.0445C14.5576 24.8969 13.9195 25.1775 13.6736 25.6722L13.1044 26.9207C12.8914 27.4306 13.0943 28.0991 13.5566 28.404L18.5972 31.7336C18.1882 33.1491 17.9418 34.6033 17.867 36.0703L12.0105 37.5685C11.4752 37.707 11.065 38.269 11.0993 38.8206L11.2284 40.1867C11.3 40.7365 11.8079 41.21 12.361 41.2435L18.393 41.6102C18.7389 43.0176 19.2558 44.3943 19.9382 45.7247L15.6155 49.9508C15.2186 50.338 15.1366 51.0358 15.4344 51.5046C15.4344 51.5046 15.4961 51.6067 15.8255 52.0695C16.1549 52.5323 16.2313 52.624 16.2313 52.624C16.5753 53.0571 17.2628 53.2099 17.7599 52.9635L23.1672 50.2611C24.1996 51.3397 25.3323 52.2806 26.5502 53.0701L24.919 58.8861C24.7701 59.4164 25.0507 60.0545 25.5467 60.3022L26.7953 60.8715C27.3052 61.0845 27.9705 60.881 28.2767 60.4205L31.6099 55.3774C33.0205 55.7871 34.4752 56.0304 35.9467 56.1075L37.4436 61.9623C37.5802 62.4988 38.1441 62.9077 38.6957 62.8734L40.0617 62.7444C40.6097 62.674 41.0845 62.1679 41.1199 61.6136L41.4804 55.5805C42.889 55.2365 44.2657 54.7196 45.5974 54.039L49.8236 58.3617C50.2076 58.758 50.9073 58.8388 51.3742 58.5422C51.3742 58.5422 51.475 58.4787 51.9396 58.148C52.4042 57.8173 52.4973 57.7428 52.4973 57.7428C52.9303 57.3987 53.0831 56.7112 52.8344 56.2185L50.1338 50.81C51.2092 49.7771 52.1521 48.643 52.9384 47.4246L58.7569 49.0594C59.2891 49.207 59.9259 48.9246 60.1718 48.4299L60.7411 47.1814C60.9541 46.6715 60.7529 46.0017 60.2901 45.7L55.2483 42.3685C55.6585 40.9548 55.9037 39.4988 55.9784 38.0318L61.835 36.5336C62.3684 36.3964 62.7786 35.8343 62.7461 35.2815L62.6171 33.9154C62.5454 33.3656 62.0375 32.8921 61.4845 32.8586L55.455 32.4955C55.1079 31.0863 54.591 29.7097 53.9085 28.3792L58.2326 24.1549C58.6281 23.7659 58.7083 23.0694 58.4123 22.5993C58.4123 22.5993 58.3488 22.4985 58.0194 22.0357C57.69 21.5729 57.6155 21.4799 57.6155 21.4799C57.2696 21.0481 56.5839 20.894 56.0881 21.1422L50.6795 23.8429C49.6472 22.7642 48.5144 21.8233 47.2979 21.0356L48.9264 15.216C49.0753 14.6857 48.7947 14.0476 48.2987 13.7998L47.0502 13.2306C46.5384 13.0189 45.8731 13.2224 45.5688 13.6815L42.2355 18.7247C40.8249 18.315 39.3702 18.0717 37.8988 17.9946L36.4032 12.1417C36.2683 11.6038 35.7013 11.1944 35.1498 11.2287L33.7837 11.3578C33.2357 11.4281 32.7622 11.936 32.7269 12.4903L32.3651 18.5216C30.9564 18.8656 29.5792 19.3857 28.2493 20.065L24.0219 15.7404C23.6391 15.346 22.9382 15.2634 22.4713 15.5599C22.4713 15.5599 22.3704 15.6234 21.9058 15.9541C21.4412 16.2848 21.3482 16.3593 21.3482 16.3593ZM30.3698 29.8661C29.7916 30.3934 29.2919 30.9806 28.8675 31.6079C28.8395 31.6499 28.8078 31.6945 28.7798 31.7365C28.6608 31.9177 28.5537 32.1041 28.4479 32.2924C28.4178 32.3469 28.3846 32.4009 28.354 32.4585C28.2514 32.6473 28.1558 32.8421 28.0683 33.0367C28.0473 33.0847 28.0269 33.1295 28.0059 33.1775C27.505 34.3361 27.2346 35.5786 27.2046 36.8374C27.204 36.8598 27.2035 36.8822 27.2022 36.8997C27.2017 37.1508 27.205 37.3993 27.2189 37.6512C27.2189 37.6512 27.2192 37.6593 27.2218 37.6629C27.3016 38.9676 27.6472 40.2622 28.2679 41.4712C28.2679 41.4712 28.2679 41.4712 28.2705 41.4748L23.2805 45.0268C19.381 38.3715 20.8771 29.8296 26.8322 24.8962L30.3698 29.8661ZM34.988 34.3369C36.488 33.2692 38.5671 33.6193 39.6335 35.1174C40.7011 36.6173 40.3511 38.6965 38.8511 39.7641C37.3512 40.8318 35.2721 40.4817 34.2044 38.9818C33.1381 37.4837 33.4881 35.4046 34.988 34.3369ZM24.9184 47.3279L29.9085 43.776L29.9098 43.7778C30.852 44.7607 31.9621 45.5111 33.1655 46.0132C33.1681 46.0168 33.1744 46.0179 33.177 46.0216C33.4123 46.1159 33.6442 46.2016 33.8816 46.2835C33.8985 46.2879 33.9199 46.2948 33.94 46.2997C35.1392 46.6836 36.4017 46.8349 37.6604 46.741C37.7127 46.7369 37.7617 46.7323 37.8139 46.7282C38.0264 46.7092 38.2418 46.6827 38.4538 46.6475C38.5183 46.6375 38.5801 46.6237 38.6428 46.6149C38.8553 46.5767 39.0653 46.5347 39.2755 46.4816C39.3256 46.4707 39.3781 46.4554 39.4243 46.439C40.156 46.2434 40.8744 45.9635 41.562 45.5898L45.0983 50.5579C38.4864 54.5725 29.9282 53.1929 24.9184 47.3279ZM43.8215 43.8933C43.9998 43.7141 44.171 43.5288 44.3316 43.3401C44.3436 43.326 44.3575 43.3106 44.3664 43.296C45.1857 42.3214 45.7915 41.2095 46.1698 40.0335C46.1743 40.0165 46.1801 40.0014 46.1827 39.9858C46.5563 38.7993 46.7043 37.5475 46.61 36.3C46.61 36.3 46.6111 36.2937 46.6085 36.2901C46.5135 35.0376 46.1694 33.7916 45.5705 32.6249L45.571 32.6218L50.561 29.0698C54.379 35.5875 53.0329 43.9179 47.3857 48.8967L43.8233 43.892L43.8215 43.8933ZM48.9252 26.7755L43.9351 30.3274C43.9325 30.3238 43.9307 30.3251 43.9307 30.3251C43.0245 29.3772 41.961 28.6459 40.8074 28.1442C40.8048 28.1405 40.803 28.1419 40.7986 28.1395C39.6525 27.6407 38.4213 27.3706 37.1761 27.3364C37.1604 27.3338 37.1455 27.3361 37.1281 27.3348C35.893 27.3071 34.644 27.5155 33.4536 27.9687C33.4364 27.9755 33.416 27.9817 33.4019 27.989C33.1697 28.0771 32.9373 28.1764 32.7108 28.288L29.1484 23.2833C35.7055 19.575 44.017 21.0339 48.9252 26.7755Z"
                fill="black"
              />
              <path
                d="M30.2417 30.6612C26.9956 33.6083 26.1444 38.3867 28.1374 42.2707L21.4462 47.0335L23.0842 49.3346L29.7753 44.5718C32.7921 47.7297 37.5845 48.4882 41.4365 46.3885L46.3152 53.2425L48.6145 51.6058L43.6915 44.6897C46.6429 41.7235 47.3593 37.1623 45.4423 33.4199L52.5268 28.3772L50.8888 26.0761L43.8044 31.1188C40.8991 28.0827 36.3543 27.2692 32.5826 29.083L27.6597 22.1669L25.3604 23.8035L30.2417 30.6612ZM39.5035 35.9138C40.5711 37.4137 40.2211 39.4928 38.7212 40.5605C37.2249 41.6255 35.1439 41.2768 34.0763 39.7769C33.0099 38.2788 33.3618 36.1983 34.8581 35.1333C36.3567 34.0638 38.4358 34.4138 39.5035 35.9138Z"
                fill="#8B8B8B"
              />
              <path
                d="M21.2162 17.1525C20.7845 17.4984 20.6354 18.1833 20.8786 18.6799L23.581 24.0872C22.5037 25.1213 21.5596 26.2536 20.7733 27.472L14.9561 25.839C14.4257 25.6901 13.787 25.9738 13.5411 26.4685L12.9706 27.7152C12.7589 28.2269 12.9637 28.8942 13.4215 29.1967L18.4647 32.5299C18.0531 33.9418 17.8098 35.3965 17.7346 36.8666L11.878 38.3648C11.3432 38.5002 10.9344 39.0641 10.9669 39.617L11.0977 40.9817C11.1663 41.531 11.6755 42.0063 12.2285 42.0399L18.2598 42.4016C18.6038 43.8103 19.1238 45.1874 19.8044 46.5192L15.4804 50.7435C15.0854 51.1294 15.0047 51.829 15.2981 52.2954C15.2981 52.2954 15.3647 52.3968 15.6941 52.8596C16.0248 53.3242 16.0975 53.4185 16.0975 53.4185C16.4434 53.8503 17.1309 54.0031 17.6249 53.7562L23.0335 51.0556C24.0676 52.1329 25.1973 53.0733 26.417 53.8615L24.7839 59.6787C24.6364 60.2109 24.9169 60.849 25.4135 61.0936L26.6602 61.6642C27.1706 61.8741 27.8404 61.6729 28.1416 61.2132L31.4749 56.1701C32.8873 56.5785 34.3415 56.8249 35.8116 56.9002L37.3085 62.7549C37.447 63.2902 38.0091 63.7004 38.5606 63.6661L39.928 63.5389C40.4746 63.4667 40.9513 62.9593 40.9848 62.4062L41.3466 56.375C42.754 56.0291 44.1324 55.5109 45.4642 54.8303L49.6885 59.1543C50.0762 59.548 50.7753 59.6319 51.2422 59.3354C51.2422 59.3354 51.3431 59.2719 51.8059 58.9425C52.2705 58.6118 52.3635 58.5373 52.3635 58.5373C52.7966 58.1932 52.948 57.5039 52.7012 57.0099L50.0005 51.6013C51.0779 50.5672 52.017 49.4357 52.8064 48.2178L58.6237 49.8508C59.1559 49.9984 59.7927 49.716 60.0417 49.2218L60.6078 47.9728C60.819 47.4642 60.6192 46.7961 60.1569 46.4913L55.115 43.1599C55.5235 41.7475 55.7686 40.2915 55.8451 38.8232L61.7017 37.325C62.2383 37.1883 62.6441 36.6239 62.611 36.0742L62.4838 34.7068C62.4116 34.1601 61.9043 33.6835 61.3512 33.6499L55.32 33.2882C54.9728 31.879 54.4572 30.5042 53.7766 29.1725L58.1011 24.945C58.4943 24.5604 58.5751 23.8608 58.2804 23.3926C58.2804 23.3926 58.2169 23.2917 57.8862 22.8271C57.5568 22.3643 57.4809 22.2694 57.4809 22.2694C57.1363 21.8395 56.4501 21.6886 55.9567 21.9323L50.5476 24.636C49.5134 23.5587 48.3793 22.616 47.1628 21.8283L48.7958 16.0111C48.9447 15.4807 48.6609 14.8421 48.168 14.5949L46.9177 14.027C46.4078 13.8139 45.7411 14.0156 45.4381 14.4766L42.1049 19.5198C40.6911 19.1095 39.2351 18.8643 37.7681 18.7896L36.2699 12.933C36.1346 12.3983 35.5688 11.9907 35.0178 12.0219L33.6549 12.1515C33.1051 12.2231 32.6303 12.7292 32.5949 13.2835L32.2331 19.3148C30.8226 19.6601 29.4492 20.1776 28.1174 20.8582L23.8912 16.5355C23.5053 16.1405 22.8057 16.0597 22.3375 16.3544C22.3375 16.3544 22.2367 16.4179 21.7721 16.7486C21.3093 17.078 21.2162 17.1525 21.2162 17.1525ZM49.6694 28.6758C54.733 35.7895 53.0696 45.6604 45.9559 50.724C38.844 55.7862 28.9726 54.1259 23.909 47.0122C18.8454 39.8985 20.5089 30.0276 27.6208 24.9653C34.7326 19.9031 44.6059 21.5621 49.6694 28.6758Z"
                fill="#D9D9D9"
              />
              <path
                d="M23.1703 47.5348C28.5229 55.0546 38.9579 56.8098 46.4759 51.4585C53.9957 46.1059 55.754 35.6714 50.4014 28.1516C45.0514 20.6355 34.6137 18.8766 27.0939 24.2292C19.5747 29.5787 17.819 40.0169 23.1703 47.5348ZM49.6679 28.6737C54.7314 35.7874 53.068 45.6583 45.9543 50.7219C38.8424 55.7842 28.971 54.1238 23.9074 47.0101C18.8439 39.8964 20.5073 30.0255 27.6192 24.9633C34.7311 19.901 44.6043 21.56 49.6679 28.6737Z"
                fill="#8B8B8B"
              />
              <path
                d="M28.867 43.4875C31.984 47.8666 38.0568 48.8906 42.434 45.7748C46.8131 42.6578 47.8358 36.5833 44.7187 32.2042C41.603 27.8269 35.5297 26.8061 31.1507 29.9231C26.7734 33.0389 25.7512 39.1103 28.867 43.4875ZM39.5055 35.915C40.5732 37.4149 40.2232 39.494 38.7232 40.5617C37.227 41.6267 35.146 41.278 34.0783 39.7781C33.012 38.28 33.3639 36.1995 34.8601 35.1345C36.3588 34.065 38.4379 34.415 39.5055 35.915Z"
                fill="#8B8B8B"
              />
              <path
                d="M29.5998 42.9617C32.4278 46.9347 37.9388 47.8625 41.9081 45.0371C45.8811 42.2091 46.8089 36.6982 43.9809 32.7252C41.1555 28.7558 35.6446 27.828 31.6716 30.656C27.7022 33.4814 26.7744 38.9924 29.5998 42.9617ZM39.503 35.9125C40.5707 37.4125 40.2207 39.4916 38.7207 40.5592C37.2245 41.6243 35.1435 41.2756 34.0759 39.7756C33.0095 38.2775 33.3614 36.1971 34.8576 35.132C36.3563 34.0626 38.4354 34.4126 39.503 35.9125Z"
                fill="#D9D9D9"
              />
            </svg>

            <svg
              width="72"
              height="73"
              viewBox="0 0 72 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearThree}
            >
              <path
                d="M22.4389 14.8173C22.1102 15.0292 21.7804 15.2474 21.4603 15.4753C21.1402 15.7031 20.8243 15.9445 20.5182 16.1844L22.5987 19.6725C21.9205 20.2297 21.2741 20.8084 20.6821 21.4364L17.3652 19.115C16.8349 19.702 16.3301 20.3093 15.8595 20.9336L18.7722 23.7633C18.2618 24.4711 17.8059 25.2089 17.3917 25.9668L13.5807 24.5813C13.2191 25.2852 12.8922 26.0029 12.5992 26.7296L16.1227 28.6945C15.8162 29.5107 15.5797 30.3516 15.3768 31.1933L11.3352 30.8428C11.1668 31.6131 11.0379 32.3883 10.943 33.1725L14.877 34.1616C14.7939 35.0283 14.7426 35.8971 14.7618 36.7681L10.791 37.4697C10.8312 38.2541 10.9064 39.0411 11.0163 39.8228L15.0696 39.7597C15.2123 40.6145 15.4051 41.4584 15.6488 42.2964L11.9707 44.0132C12.2109 44.7572 12.4921 45.4969 12.8023 46.2269L16.6928 45.1222C17.0538 45.9042 17.4728 46.6671 17.9268 47.4132L14.8188 50.0279C15.0321 50.3584 15.2489 50.6863 15.4781 51.0082C15.7072 51.3302 15.9474 51.6443 16.1873 51.9503L19.6741 49.868C20.2326 50.5481 20.8149 51.1919 21.4348 51.7841L19.1184 55.1003C19.7053 55.6306 20.3108 56.1366 20.9351 56.6072L23.763 53.6959C24.4763 54.2024 25.2118 54.6627 25.9702 55.0737L24.5829 58.886C25.2886 59.2463 26.0037 59.5696 26.7317 59.8645L28.6961 56.3441C29.5115 56.6456 30.3505 56.8834 31.1953 57.0868L30.8431 61.1298C31.6138 61.2949 32.3899 61.4288 33.1727 61.522L34.1637 57.5866C35.0267 57.6723 35.896 57.7205 36.7676 57.6982L37.4705 61.6708C38.2556 61.6355 39.0414 61.5585 39.823 61.4486L39.7605 57.3922C40.6153 57.2495 41.4587 57.0599 42.2972 56.813L44.0171 60.4916C44.7611 60.2514 45.5003 59.9733 46.2271 59.6626L45.1224 55.7721C45.9058 55.4129 46.6686 54.9939 47.414 54.535L50.0299 57.6448C50.3586 57.4329 50.6871 57.2129 51.0072 56.985C51.3273 56.7572 51.6446 56.5175 51.9506 56.2777L49.867 52.789C50.5501 52.2311 51.194 51.6488 51.7862 51.0288L55.1024 53.3452C55.6353 52.7619 56.1382 52.1559 56.6074 51.5298L53.6948 48.7001C54.2008 47.99 54.6598 47.2526 55.0708 46.4943L58.885 47.8802C59.2466 47.1763 59.5735 46.4586 59.8652 45.7301L56.3435 43.7639C56.6482 42.949 56.8855 42.1131 57.0907 41.267L61.1318 41.6205C61.3001 40.8503 61.4296 40.0719 61.524 39.2909L57.5887 38.2999C57.6731 37.4351 57.7212 36.5658 57.7052 35.6953L61.6729 34.9932C61.6358 34.2093 61.5637 33.4228 61.452 32.6424L57.3974 32.7036C57.2561 31.8507 57.0633 31.0068 56.8201 30.1657L60.495 28.4483C60.2548 27.7043 59.9767 26.9652 59.666 26.2383L55.7742 27.3412C55.4176 26.5615 54.9986 25.7987 54.5421 25.0488L57.6513 22.436C57.4394 22.1074 57.2212 21.7776 56.9933 21.4575C56.7629 21.1337 56.5241 20.8214 56.2829 20.5136L52.7947 22.594C52.2389 21.9176 51.6566 21.2738 51.0322 20.6793L53.3499 17.3649C52.7653 16.8302 52.1567 16.3236 51.5305 15.8543L48.7059 18.7662C47.9921 18.2628 47.2565 17.8025 46.4969 17.3896L47.8836 13.5804C47.1816 13.2175 46.462 12.892 45.7322 12.5984L43.7709 16.1193C42.9524 15.8173 42.1165 15.58 41.2704 15.3747L41.6239 11.3336C40.8537 11.1653 40.0771 11.0346 39.2943 10.9414L38.3038 14.8737C37.4385 14.7924 36.5665 14.7406 35.6986 14.7603L34.9939 10.7889C34.2101 10.826 33.4243 10.903 32.6427 11.0129L32.702 15.0688C31.8504 15.212 31.0039 15.4012 30.1698 15.6504L28.4499 11.9718C27.7059 12.212 26.9686 12.4887 26.2404 12.7976L27.3459 16.6931C26.5636 17.046 25.8033 17.4687 25.0517 17.9265L22.4389 14.8173ZM33.2889 38.3304C32.1314 36.7043 32.5115 34.4467 34.1376 33.2892C35.7638 32.1317 38.0208 32.5149 39.177 34.1392C40.3345 35.7653 39.9532 38.0211 38.3289 39.1773C36.704 40.3367 34.4464 39.9566 33.2889 38.3304ZM28.6043 41.6649C29.5626 43.0112 29.2474 44.8836 27.8993 45.8432C26.5512 46.8028 24.6787 46.4876 23.7204 45.1413C22.7595 43.7914 23.0748 41.9189 24.4229 40.9593C25.771 39.9997 27.6434 40.315 28.6043 41.6649ZM34.4263 48.8258C34.2675 47.1778 35.4781 45.7153 37.1256 45.5596C38.7735 45.4007 40.2348 46.6095 40.3905 48.257C40.5493 49.905 39.3405 51.3662 37.6944 51.5237C36.0464 51.6826 34.5833 50.4751 34.4263 48.8258ZM46.2347 44.097C44.7278 43.4086 44.0672 41.6327 44.7538 40.127C45.4435 38.6219 47.22 37.9582 48.7269 38.6466C50.2308 39.3344 50.8913 41.1104 50.2047 42.6161C49.52 44.1204 47.7417 44.7854 46.2347 44.097ZM43.8671 30.8008C42.9062 29.4509 43.2233 27.5771 44.5695 26.6188C45.9177 25.6592 47.7901 25.9745 48.751 27.3244C49.7093 28.6707 49.3941 30.5431 48.0459 31.5027C46.6978 32.4623 44.8267 32.1489 43.8671 30.8008ZM38.0451 23.6399C38.2053 25.2897 36.9933 26.7504 35.3472 26.908C33.6997 27.0637 32.2354 25.8544 32.081 24.2088C31.9234 22.5626 33.1296 21.0977 34.7789 20.9407C36.4245 20.7863 37.8894 21.9924 38.0451 23.6399ZM26.2336 28.3682C27.7405 29.0566 28.4024 30.8344 27.7158 32.34C27.0261 33.8452 25.2497 34.5089 23.7445 33.8192C22.2394 33.1295 21.577 31.3548 22.2654 29.8479C22.9507 28.3404 24.731 27.6822 26.2336 28.3682Z"
                fill="black"
              />
              <path
                d="M22.3016 15.1901C21.9729 15.402 21.645 15.6189 21.3231 15.8481C21.0012 16.0772 20.687 16.3173 20.381 16.5572L22.4633 20.044C21.7819 20.6007 21.1381 21.183 20.5454 21.8061L17.2297 19.4865C16.6981 20.0716 16.1947 20.6808 15.7241 21.3051L18.6341 24.1311C18.1263 24.8426 17.6686 25.5818 17.2581 26.337L13.444 24.951C13.0824 25.6549 12.7555 26.3727 12.4638 27.1012L15.9873 29.0661C15.6845 29.8797 15.4479 30.7205 15.2432 31.5634L11.2016 31.2131C11.0332 31.9833 10.9025 32.7598 10.8081 33.5409L14.7434 34.5318C14.659 35.3967 14.6096 36.2642 14.63 37.137L10.6593 37.8386C10.6976 38.6243 10.771 39.4127 10.8814 40.1912L14.9373 40.1318C15.0786 40.9847 15.2702 41.8268 15.5152 42.6666L11.8384 44.3853C12.0773 45.1275 12.3572 45.8653 12.6687 46.5971L16.5593 45.4924C16.9171 46.2739 17.3361 47.0367 17.7926 47.7866L14.6834 50.3994C14.8966 50.7299 15.1122 51.056 15.3427 51.3798C15.5718 51.7017 15.8094 52.0121 16.0519 52.3218L19.5387 50.2395C20.0971 50.9196 20.6795 51.5634 21.3012 52.1543L18.9848 55.4705C19.5699 56.0021 20.1741 56.5063 20.8016 56.9774L23.6294 54.0661C24.3427 54.5726 25.0769 55.0311 25.8365 55.4439L24.4511 59.255C25.1532 59.6179 25.8714 59.9416 26.5999 60.2333L28.5643 56.713C29.3797 57.0145 30.2169 57.2536 31.0617 57.457L30.7095 61.5C31.4784 61.6665 32.2549 61.7972 33.0391 61.8922L34.0301 57.9568C34.8936 58.0394 35.7606 58.092 36.6322 58.0697L37.335 62.0423C38.1189 62.0052 38.906 61.9301 39.6876 61.8201L39.6269 57.7624C40.478 57.6224 41.3232 57.4314 42.1617 57.1845L43.8804 60.8613C44.6244 60.6211 45.3635 60.343 46.0917 60.0342L44.9857 56.1418C45.7685 55.7857 46.5314 55.3668 47.2799 54.9084L49.894 58.0194C50.2227 57.8075 50.5511 57.5875 50.8712 57.3597C51.195 57.1292 51.5086 56.8922 51.8146 56.6523L49.731 53.1637C50.4124 52.607 51.0544 52.026 51.644 51.4024L54.9614 53.7206C55.4949 53.1343 55.9978 52.5282 56.4689 51.9008L53.5557 49.0742C54.0635 48.3628 54.5226 47.6254 54.9336 46.8671L58.7459 48.2543C59.1075 47.5505 59.4344 46.8327 59.728 46.1029L56.2045 44.138C56.5091 43.3231 56.7451 42.4854 56.9517 41.6411L60.9928 41.9947C61.1598 41.2226 61.2905 40.4461 61.385 39.665L57.4496 38.674C57.534 37.8092 57.584 36.9386 57.5661 36.0694L61.5374 35.3647C61.4985 34.5821 61.4265 33.7956 61.3147 33.0153L57.2601 33.0764C57.1156 32.223 56.9278 31.3783 56.6773 30.5424L60.3559 28.8224C60.1144 28.0766 59.8358 27.3406 59.5288 26.6111L55.6351 27.7153C55.2785 26.9356 54.8595 26.1728 54.403 25.4229L57.5122 22.8101C57.2977 22.4778 57.0821 22.1517 56.8543 21.8316C56.6225 21.506 56.385 21.1955 56.1438 20.8877L52.657 22.97C52.0985 22.2899 51.5162 21.6461 50.8931 21.0534L53.2127 17.7377C52.6231 17.2038 52.0176 16.6978 51.3928 16.2303L48.5649 19.1416C47.8571 18.6312 47.1192 18.1753 46.3627 17.763L47.7469 13.9501C47.0461 13.5891 46.3266 13.2635 45.5986 12.9686L43.6337 16.4921C42.8156 16.187 41.9779 15.9509 41.1331 15.7475L41.4854 11.7046C40.7164 11.5381 39.9399 11.4074 39.157 11.3142L38.1666 15.2465C37.3012 15.1652 36.4311 15.1121 35.5614 15.1331L34.8585 11.1605C34.0728 11.1989 33.2858 11.274 32.5041 11.3839L32.5666 15.4403C31.715 15.5835 30.8685 15.7727 30.03 16.0195L28.3144 12.3433C27.5686 12.5848 26.83 12.8597 26.1013 13.1717L27.2055 17.0654C26.4258 17.422 25.6648 17.8396 24.9163 18.298L22.3016 15.1901ZM37.554 51.896C35.906 52.0549 34.4417 50.8456 34.2854 49.2012C34.1302 47.5506 35.339 46.0894 36.987 45.9306C38.6313 45.7743 40.0957 46.9836 40.2514 48.6311C40.4108 50.276 39.2015 51.7403 37.554 51.896ZM48.5897 39.0194C50.0935 39.7073 50.7541 41.4832 50.0693 42.9876C49.3796 44.4927 47.6032 45.1564 46.0975 44.4698C44.5924 43.7801 43.9305 42.0024 44.6166 40.4998C45.3037 38.991 47.0827 38.331 48.5897 39.0194ZM23.5832 45.5141C22.6223 44.1642 22.9375 42.2917 24.2856 41.3322C25.6337 40.3726 27.5062 40.6878 28.4671 42.0377C29.4254 43.384 29.1101 45.2565 27.762 46.2161C26.4121 47.177 24.5415 46.8604 23.5832 45.5141ZM48.6119 27.6985C49.5702 29.0448 49.255 30.9173 47.9069 31.8769C46.5588 32.8365 44.6863 32.5212 43.728 31.1749C42.7671 29.825 43.0824 27.9525 44.4305 26.993C45.7786 26.0334 47.651 26.3486 48.6119 27.6985ZM39.0435 34.5094C40.201 36.1356 39.8177 38.3926 38.1934 39.5488C36.5654 40.7076 34.3115 40.325 33.1553 38.7006C31.9965 37.0727 32.3748 34.8164 34.0009 33.6589C35.6252 32.5027 37.8847 32.8814 39.0435 34.5094ZM34.6385 21.313C36.2878 21.156 37.7503 22.3666 37.9065 24.0109C38.0623 25.6584 36.8543 27.1246 35.2068 27.2803C33.5593 27.436 32.0968 26.2254 31.9393 24.5792C31.7835 22.9318 32.9892 21.47 34.6385 21.313ZM26.095 28.7392C27.602 29.4276 28.2638 31.2054 27.5778 32.7079C26.8894 34.2149 25.1103 34.8749 23.606 34.1901C22.099 33.5017 21.4403 31.7245 22.1269 30.2189C22.8134 28.7132 24.5912 28.0513 26.095 28.7392Z"
                fill="#D9D9D9"
              />
              <path
                d="M21.5625 46.9537C27.2771 54.982 38.4154 56.8539 46.4419 51.1407C54.4684 45.4274 56.3471 34.2871 50.6338 26.2606C44.9193 18.2323 33.7766 16.3579 25.7501 22.0712C17.7236 27.7845 15.848 38.9254 21.5625 46.9537ZM23.6048 34.1922C22.0978 33.5038 21.4391 31.7266 22.1257 30.221C22.8141 28.714 24.5918 28.0521 26.0938 28.7413C27.6008 29.4297 28.2627 31.2074 27.5766 32.71C26.8913 34.2175 25.1104 34.8788 23.6048 34.1922ZM23.5838 45.5149C22.6229 44.165 22.9382 42.2925 24.2863 41.3329C25.6344 40.3733 27.5069 40.6886 28.4677 42.0385C29.426 43.3848 29.1108 45.2573 27.7627 46.2169C26.4127 47.1778 24.5421 46.8612 23.5838 45.5149ZM37.5546 51.8968C35.9066 52.0557 34.4423 50.8464 34.2861 49.202C34.1309 47.5514 35.3397 46.0902 36.9877 45.9314C38.632 45.7751 40.0963 46.9844 40.2521 48.6319C40.4114 50.2768 39.2021 51.7411 37.5546 51.8968ZM48.5903 39.0202C50.0941 39.7081 50.7547 41.484 50.07 42.9883C49.3803 44.4935 47.6038 45.1572 46.0981 44.4706C44.593 43.7809 43.9312 42.0031 44.6172 40.5006C45.3043 38.9918 47.0834 38.3318 48.5903 39.0202ZM48.6126 27.6993C49.5709 29.0456 49.2556 30.9181 47.9075 31.8777C46.5594 32.8373 44.687 32.522 43.7287 31.1757C42.7678 29.8258 43.083 27.9533 44.4311 26.9937C45.7792 26.0341 47.6517 26.3494 48.6126 27.6993ZM39.0441 34.5102C40.2016 36.1364 39.8184 38.3934 38.1941 39.5496C36.5661 40.7084 34.3122 40.3257 33.156 38.7014C31.9972 37.0734 32.3754 34.8172 34.0016 33.6597C35.6259 32.5035 37.8853 32.8822 39.0441 34.5102ZM34.6391 21.3138C36.2884 21.1568 37.7509 22.3674 37.9072 24.0117C38.0629 25.6592 36.8549 27.1253 35.2075 27.2811C33.56 27.4368 32.0975 26.2262 31.9399 24.58C31.7842 22.9325 32.9898 21.4708 34.6391 21.3138Z"
                fill="#8B8B8B"
              />
              <path
                d="M22.424 46.3389C27.7988 53.8898 38.2826 55.6516 45.8317 50.2781C53.3844 44.9021 55.1488 34.4219 49.774 26.871C44.398 19.3183 33.9165 17.5521 26.3638 22.9281C18.8129 28.3029 17.048 38.7862 22.424 46.3389ZM23.6047 34.1907C22.0977 33.5023 21.439 31.7251 22.1256 30.2194C22.814 28.7125 24.5917 28.0506 26.0937 28.7398C27.6007 29.4282 28.2626 31.2059 27.5765 32.7085C26.8912 34.216 25.1103 34.8773 23.6047 34.1907ZM23.5837 45.5134C22.6228 44.1635 22.9381 42.291 24.2862 41.3314C25.6343 40.3718 27.5068 40.6871 28.4677 42.037C29.4259 43.3833 29.1107 45.2558 27.7626 46.2154C26.4126 47.1763 24.542 46.8597 23.5837 45.5134ZM37.5545 51.8953C35.9065 52.0542 34.4422 50.8449 34.286 49.2005C34.1308 47.5499 35.3396 46.0887 36.9876 45.9299C38.6319 45.7736 40.0962 46.9829 40.252 48.6304C40.4113 50.2752 39.202 51.7396 37.5545 51.8953ZM48.5902 39.0187C50.0941 39.7066 50.7546 41.4825 50.0699 42.9868C49.3802 44.492 47.6037 45.1557 46.098 44.4691C44.5929 43.7794 43.9311 42.0016 44.6171 40.4991C45.3042 38.9903 47.0833 38.3303 48.5902 39.0187ZM48.6125 27.6978C49.5708 29.0441 49.2555 30.9166 47.9074 31.8762C46.5593 32.8358 44.6869 32.5205 43.7286 31.1742C42.7677 29.8243 43.0829 27.9518 44.431 26.9922C45.7791 26.0326 47.6516 26.3479 48.6125 27.6978ZM39.044 34.5087C40.2015 36.1349 39.8183 38.3919 38.194 39.5481C36.566 40.7069 34.3121 40.3242 33.1559 38.6999C31.9971 37.0719 32.3753 34.8157 34.0015 33.6582C35.6258 32.502 37.8852 32.8807 39.044 34.5087ZM34.639 21.3123C36.2883 21.1553 37.7509 22.3659 37.9071 24.0102C38.0628 25.6577 36.8548 27.1238 35.2074 27.2796C33.5599 27.4353 32.0974 26.2247 31.9398 24.5785C31.7841 22.931 32.9897 21.4693 34.639 21.3123Z"
                fill="#D9D9D9"
              />
              <path
                d="M29.3809 41.3861C32.0201 45.0939 37.1679 45.9605 40.8756 43.3213C44.5852 40.6808 45.4519 35.5331 42.8127 31.8253C40.1722 28.1158 35.0245 27.2491 31.3149 29.8896C27.6071 32.5288 26.7404 37.6765 29.3809 41.3861ZM39.0427 34.5088C40.2002 36.135 39.817 38.392 38.1927 39.5482C36.5647 40.707 34.3108 40.3244 33.1546 38.7C31.9958 37.0721 32.374 34.8158 34.0002 33.6583C35.6245 32.5021 37.8839 32.8809 39.0427 34.5088Z"
                fill="#8B8B8B"
              />
              <path
                d="M30.1905 40.8141C32.512 44.0756 37.0392 44.841 40.3043 42.5169C43.5676 40.194 44.3322 35.6619 42.0107 32.4005C39.6866 29.1354 35.1539 28.3739 31.8906 30.6967C28.6255 33.0208 27.8663 37.549 30.1905 40.8141ZM39.0456 34.511C40.2031 36.1372 39.8198 38.3943 38.1955 39.5504C36.5675 40.7093 34.3136 40.3266 33.1574 38.7022C31.9986 37.0743 32.3769 34.818 34.003 33.6605C35.6273 32.5043 37.8868 32.8831 39.0456 34.511Z"
                fill="#D9D9D9"
              />
            </svg>

            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearFour}
            >
              <path
                d="M9.04623 23.5834L13.5321 26.5169C13.1413 29.077 13.3783 31.7332 14.2663 34.2429L10.4161 37.9674C10.9283 39.0277 11.5274 40.0591 12.2344 41.0523C12.9388 42.0419 13.7185 42.9476 14.5526 43.7787L19.3325 41.3602C21.4108 43.0255 23.8439 44.1129 26.3922 44.5838L27.6938 49.7811C30.0606 49.9622 32.4601 49.7479 34.7907 49.1115L35.0881 43.7488C36.2807 43.283 37.4429 42.6818 38.5349 41.9044C39.6269 41.1271 40.5738 40.2272 41.4062 39.2516L46.5688 40.7278C47.9332 38.7341 48.925 36.5344 49.527 34.2401L45.0425 31.3084C45.432 28.7465 45.1975 26.094 44.3082 23.5824L48.1566 19.8592C47.6463 18.7977 47.0458 17.7644 46.3414 16.7748C45.6344 15.7816 44.856 14.8777 44.0201 14.0479L39.242 16.4651C37.162 14.8011 34.7294 13.7105 32.1825 13.2415L30.8794 8.04244C28.5158 7.86185 26.1131 8.07559 23.7826 8.712L23.4851 14.0747C22.2908 14.5417 21.1304 15.1417 20.0383 15.919C18.9463 16.6963 17.9976 17.5976 17.1671 18.5719L12.0026 17.097C10.64 19.0894 9.65136 21.2896 9.04623 23.5834ZM34.8212 24.975C36.9956 28.0297 36.28 32.2707 33.2253 34.445C30.1705 36.6194 25.9277 35.9051 23.7547 32.8522C21.5777 29.7938 22.2946 25.5546 25.3493 23.3803C28.404 21.2059 32.6442 21.9166 34.8212 24.975Z"
                fill="black"
              />
              <path
                d="M8.79688 24.249L13.2832 27.1794C12.895 29.7431 13.1277 32.3969 14.0188 34.9072L10.1685 38.6317C10.6794 39.6901 11.2812 40.7252 11.9856 41.7148C12.6913 42.7062 13.471 43.6119 14.3038 44.4411L19.0837 42.0227C21.1632 43.6898 23.5951 44.7754 26.1446 45.2481L27.4445 50.4466C29.8131 50.6264 32.2126 50.4121 34.5463 49.7763L34.8419 44.4149C36.0349 43.946 37.1953 43.346 38.2874 42.5687C39.3794 41.7914 40.3262 40.8914 41.1599 39.9177L46.3226 41.3938C47.6875 39.397 48.6775 37.1986 49.2795 34.9043L44.795 31.9726C45.1831 29.4089 44.9505 26.7551 44.0594 24.2449L47.9096 20.5203C47.3987 19.4619 46.7983 18.4286 46.0926 17.4372C45.3882 16.4476 44.6072 15.5401 43.7744 14.7108L38.9945 17.1293C36.9144 15.4654 34.4831 14.3766 31.9336 13.9039L30.6319 8.7067C28.2669 8.52428 25.8669 8.74165 23.5319 9.37571L23.2363 14.7371C22.0432 15.206 20.8841 15.8078 19.7921 16.5851C18.7001 17.3624 17.7519 18.2606 16.9182 19.2343L11.7538 17.7595C10.3919 19.7568 9.40071 21.9534 8.79688 24.249ZM34.5724 25.6374C36.7481 28.6939 36.0343 32.9336 32.9777 35.1093C29.9211 37.285 25.6802 36.5694 23.5058 33.5146C21.3314 30.4599 22.0439 26.2184 25.1005 24.0427C28.1552 21.8683 32.398 22.5826 34.5724 25.6374Z"
                fill="#D9D9D9"
              />
              <path
                d="M19.2789 36.5219C23.1134 41.9088 30.592 43.1695 35.9808 39.3337C41.3678 35.4993 42.6271 28.0188 38.7927 22.6319C34.9582 17.2449 27.4778 15.9855 22.0908 19.82C16.702 23.6557 15.4444 31.1349 19.2789 36.5219ZM34.5709 25.6369C36.7466 28.6935 36.0328 32.9332 32.9762 35.1089C29.9197 37.2846 25.6787 36.5689 23.5043 33.5142C21.3299 30.4594 22.0424 26.218 25.099 24.0423C28.1537 21.8679 32.3965 22.5822 34.5709 25.6369Z"
                fill="#8B8B8B"
              />
              <path
                d="M20.4318 35.7051C23.8145 40.4573 30.4119 41.568 35.1642 38.1854C39.9164 34.8027 41.0271 28.2053 37.6444 23.453C34.2618 18.7008 27.6656 17.5919 22.9134 20.9746C18.163 24.3559 17.0491 30.9528 20.4318 35.7051ZM34.5733 25.6391C36.7489 28.6957 36.0352 32.9354 32.9786 35.1111C29.922 37.2867 25.681 36.5711 23.5067 33.5164C21.3323 30.4616 22.0448 26.2202 25.1013 24.0445C28.1561 21.8701 32.3989 22.5844 34.5733 25.6391Z"
                fill="#D9D9D9"
              />
            </svg>

            {/* <img
              className={styles.fifthCircle}
              src={fifthCircle}
              alt="third arc"
            /> */}
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.fifthCircle}
            >
              <path
                d="M25.4543 14.0453C25.4543 21.0371 19.9053 26.6831 13.0872 26.6831C6.26907 26.6831 0.720097 21.0371 0.720097 14.0453C0.720097 7.05357 6.26907 1.40763 13.0872 1.40763C19.9053 1.40763 25.4543 7.05357 25.4543 14.0453Z"
                stroke="white"
                stroke-width="1.24488"
              />
            </svg>

            {/* <img
              className={styles.gearCircle}
              src={gearCircle}
              alt="first gear"
            /> */}
            <svg
              width="257"
              height="257"
              viewBox="0 0 257 257"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearCircle}
            >
              <circle cx="128.652" cy="128.785" r="127.5" stroke="white" />
            </svg>

            {/* <img className={styles.thirdGear} src={thirdGear} alt="third arc" /> */}
            {/* <svg
              width="167"
              height="171"
              viewBox="0 0 167 171"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.thirdGear}
            >
              <path
                d="M166.436 114.511C166.47 113.774 166.497 113.033 166.497 112.289C166.497 111.546 166.47 110.808 166.436 110.071L158.819 109.46C158.707 107.813 158.517 106.19 158.212 104.6L165.384 102.049C165.067 100.595 164.689 99.159 164.239 97.7564L156.73 99.1378C156.195 97.5841 155.564 96.0789 154.85 94.6189L161.135 90.2844C160.448 88.9635 159.705 87.6819 158.91 86.4365L152.054 89.695C151.139 88.3378 150.111 87.0592 149.041 85.829L153.992 80.0164C152.991 78.9222 151.943 77.8763 150.845 76.8758L145.036 81.8239C143.803 80.7509 142.527 79.7232 141.17 78.8073L144.428 71.9489C143.18 71.1509 141.898 70.4073 140.58 69.7272L136.246 76.0113C134.783 75.298 133.281 74.6663 131.73 74.1312L133.105 66.6229C131.706 66.1726 130.267 65.7947 128.813 65.4773L126.262 72.6501C124.675 72.3448 123.049 72.1544 121.402 72.0396L120.791 64.4224C120.053 64.3892 119.316 64.368 118.572 64.368C117.823 64.368 117.085 64.3892 116.348 64.4224L115.74 72.0396C114.093 72.1544 112.467 72.3448 110.88 72.6501L108.325 65.4773C106.875 65.7947 105.439 66.1726 104.033 66.6199L105.415 74.1312C103.858 74.6663 102.356 75.298 100.893 76.0113L96.5582 69.7242C95.2403 70.4073 93.9617 71.1509 92.7164 71.9489L95.9688 78.8073C94.6116 79.7232 93.336 80.7509 92.1028 81.8239L86.2872 76.8698C85.193 77.8703 84.1441 78.9161 83.1496 80.0103L88.0977 85.8229C87.0247 87.0532 86.003 88.3318 85.0811 89.6889L78.2257 86.4305C77.4277 87.6758 76.6841 88.9574 76.001 90.2784L82.2882 94.6129C81.5748 96.0728 80.9431 97.5781 80.4081 99.1317L72.8967 97.7504C72.4524 99.1559 72.0715 100.589 71.7511 102.043L78.9239 104.594C78.6156 106.184 78.4282 107.807 78.3164 109.454L70.6993 110.065C70.666 110.802 70.6448 111.54 70.6448 112.283C70.6448 113.027 70.666 113.771 70.6993 114.505L78.3164 115.116C78.4282 116.763 78.6186 118.392 78.9239 119.976L71.7511 122.53C72.0685 123.984 72.4524 125.42 72.8967 126.822L80.4081 125.444C80.9431 126.995 81.5748 128.497 82.2882 129.96L76.001 134.294C76.6872 135.615 77.4307 136.897 78.2257 138.139L85.0811 134.884C86.003 136.244 87.0247 137.517 88.0977 138.75L83.1496 144.562C84.1441 145.657 85.193 146.709 86.2872 147.706L92.0998 142.755C93.333 143.828 94.6086 144.853 95.9657 145.775L92.7133 152.627C93.9557 153.428 95.2403 154.172 96.5552 154.852L100.89 148.571C102.353 149.281 103.855 149.913 105.412 150.451L104.03 157.959C105.436 158.406 106.869 158.784 108.322 159.102L110.877 151.932C112.463 152.237 114.09 152.424 115.737 152.542L116.345 160.156C117.082 160.187 117.82 160.214 118.569 160.214C119.313 160.214 120.05 160.19 120.788 160.156L121.399 152.542C123.046 152.427 124.672 152.237 126.259 151.932L128.81 159.102C130.264 158.784 131.703 158.406 133.102 157.959L131.727 150.451C133.278 149.913 134.78 149.281 136.243 148.571L140.577 154.852C141.898 154.169 143.177 153.425 144.425 152.627L141.167 145.775C142.524 144.853 143.8 143.828 145.033 142.755L150.842 147.706C151.94 146.709 152.988 145.66 153.989 144.562L149.038 138.75C150.111 137.517 151.136 136.241 152.051 134.884L158.907 138.139C159.705 136.897 160.448 135.615 161.132 134.294L154.847 129.96C155.561 128.497 156.192 126.995 156.728 125.444L164.236 126.822C164.683 125.42 165.061 123.984 165.381 122.53L158.209 119.976C158.517 118.392 158.704 116.763 158.816 115.116L166.436 114.511ZM118.569 105.488C122.323 105.488 125.37 108.532 125.37 112.289C125.37 116.047 122.323 119.09 118.569 119.09C114.815 119.09 111.768 116.047 111.768 112.289C111.768 108.532 114.815 105.488 118.569 105.488ZM118.566 94.6673C115.453 94.6673 112.932 92.1403 112.932 89.03C112.932 85.9166 115.453 83.3927 118.566 83.3927C121.68 83.3927 124.204 85.9166 124.204 89.03C124.207 92.1433 121.683 94.6673 118.566 94.6673ZM101.246 95.7796C103.943 97.3363 104.865 100.785 103.311 103.481C101.751 106.178 98.3053 107.103 95.606 105.543C92.9128 103.989 91.9879 100.54 93.5446 97.8441C95.1013 95.1479 98.5501 94.2229 101.246 95.7796ZM95.6121 119.039C98.3053 117.479 101.751 118.407 103.311 121.101C104.868 123.8 103.943 127.246 101.246 128.805C98.5501 130.362 95.1043 129.437 93.5446 126.741C91.9879 124.042 92.9128 120.593 95.6121 119.039ZM118.566 129.912C121.68 129.912 124.204 132.439 124.204 135.549C124.204 138.662 121.68 141.186 118.566 141.186C115.453 141.186 112.932 138.665 112.932 135.549C112.932 132.436 115.453 129.912 118.566 129.912ZM135.892 128.799C133.193 127.243 132.274 123.797 133.828 121.101C135.384 118.404 138.83 117.479 141.53 119.036C144.229 120.59 145.148 124.039 143.591 126.735C142.037 129.431 138.585 130.359 135.892 128.799ZM141.53 105.543C138.833 107.103 135.384 106.178 133.828 103.478C132.271 100.782 133.193 97.3363 135.892 95.7766C138.591 94.2199 142.037 95.1449 143.594 97.8411C145.148 100.54 144.229 103.986 141.53 105.543Z"
                fill="black"
              />
              <path
                d="M166.019 113.891C166.055 113.157 166.076 112.416 166.076 111.67C166.076 110.926 166.055 110.186 166.019 109.448L158.402 108.84C158.29 107.19 158.099 105.567 157.794 103.98L164.967 101.426C164.65 99.9719 164.272 98.5362 163.821 97.1337L156.313 98.512C155.775 96.9583 155.143 95.4561 154.43 93.9961L160.717 89.6616C160.034 88.3407 159.29 87.0591 158.492 85.8138L151.637 89.0722C150.718 87.715 149.693 86.4394 148.62 85.2032L153.572 79.3936C152.571 78.2994 151.525 77.2505 150.428 76.2531L144.618 81.1981C143.385 80.1281 142.11 79.1004 140.752 78.1815L144.008 71.3291C142.765 70.5311 141.481 69.7876 140.163 69.1044L135.828 75.3855C134.365 74.6752 132.866 74.0435 131.31 73.5054L132.688 65.9971C131.288 65.5528 129.853 65.175 128.396 64.8546L125.845 72.0243C124.258 71.7221 122.631 71.5316 120.984 71.4138L120.374 63.7996C119.636 63.7664 118.898 63.7422 118.152 63.7422C117.405 63.7422 116.668 63.7664 115.933 63.7996L115.323 71.4138C113.675 71.5316 112.046 71.7221 110.462 72.0243L107.908 64.8546C106.457 65.1719 105.021 65.5498 103.616 65.9971L104.994 73.5054C103.444 74.0435 101.938 74.6752 100.475 75.3855L96.1408 69.1014C94.8229 69.7845 93.5413 70.5311 92.299 71.3291L95.5514 78.1815C94.1942 79.1004 92.9186 80.1251 91.6854 81.1981L85.8758 76.2531C84.7816 77.2505 83.7327 78.2994 82.7322 79.3936L87.6833 85.2032C86.6103 86.4394 85.5856 87.712 84.6667 89.0722L77.8113 85.8138C77.0103 87.0591 76.2697 88.3407 75.5866 89.6616L81.8738 93.9961C81.1604 95.4561 80.5287 96.9583 79.9906 98.512L72.4823 97.1337C72.035 98.5362 71.6571 99.9719 71.3398 101.426L78.5096 103.98C78.2012 105.567 78.0138 107.193 77.902 108.84L70.2848 109.448C70.2486 110.186 70.2305 110.926 70.2305 111.67C70.2305 112.416 70.2516 113.157 70.2848 113.891L77.902 114.505C78.0138 116.152 78.2043 117.778 78.5096 119.362L71.3398 121.917C71.6571 123.373 72.035 124.803 72.4823 126.209L79.9906 124.827C80.5287 126.381 81.1604 127.886 81.8738 129.346L75.5866 133.681C76.2728 134.999 77.0133 136.283 77.8113 137.526L84.6667 134.27C85.5856 135.627 86.6103 136.903 87.6833 138.136L82.7322 143.946C83.7327 145.043 84.7816 146.089 85.8758 147.089L91.6854 142.138C92.9186 143.211 94.1942 144.239 95.5514 145.155L92.299 152.01C93.5383 152.808 94.8259 153.555 96.1408 154.235L100.475 147.954C101.938 148.664 103.444 149.296 104.994 149.831L103.616 157.342C105.021 157.79 106.454 158.164 107.908 158.485L110.462 151.315C112.046 151.623 113.675 151.811 115.323 151.923L115.933 159.54C116.668 159.573 117.405 159.594 118.152 159.594C118.898 159.594 119.636 159.573 120.374 159.54L120.984 151.923C122.631 151.811 124.258 151.62 125.845 151.315L128.396 158.485C129.853 158.167 131.288 157.79 132.688 157.342L131.31 149.831C132.866 149.299 134.365 148.664 135.828 147.954L140.163 154.235C141.484 153.552 142.765 152.808 144.008 152.01L140.752 145.155C142.11 144.239 143.385 143.211 144.618 142.138L150.428 147.089C151.525 146.089 152.571 145.043 153.572 143.946L148.62 138.136C149.693 136.903 150.718 135.627 151.637 134.27L158.492 137.526C159.293 136.283 160.037 134.999 160.717 133.681L154.43 129.346C155.143 127.886 155.775 126.381 156.313 124.827L163.821 126.209C164.269 124.803 164.647 123.373 164.967 121.917L157.794 119.362C158.103 117.778 158.29 116.152 158.402 114.505L166.019 113.891ZM93.1272 97.2243C94.6839 94.5281 98.1327 93.6032 100.829 95.1568C103.525 96.7165 104.444 100.165 102.893 102.862C101.334 105.555 97.8879 106.477 95.1886 104.923C92.4954 103.369 91.5675 99.9206 93.1272 97.2243ZM100.826 128.183C98.1297 129.739 94.6838 128.814 93.1241 126.121C91.5644 123.425 92.4924 119.976 95.1886 118.419C97.8849 116.863 101.331 117.788 102.89 120.484C104.45 123.18 103.522 126.629 100.826 128.183ZM118.149 82.776C121.262 82.776 123.789 85.2999 123.789 88.4133C123.789 91.5266 121.262 94.0505 118.149 94.0505C115.036 94.0505 112.515 91.5266 112.515 88.4133C112.515 85.2999 115.036 82.776 118.149 82.776ZM118.149 140.569C115.036 140.569 112.515 138.042 112.515 134.929C112.515 131.819 115.036 129.292 118.149 129.292C121.262 129.292 123.789 131.816 123.789 134.929C123.789 138.042 121.262 140.569 118.149 140.569ZM118.149 118.471C114.395 118.471 111.351 115.43 111.351 111.67C111.351 107.916 114.395 104.872 118.149 104.872C121.903 104.872 124.95 107.916 124.95 111.67C124.95 115.43 121.903 118.471 118.149 118.471ZM143.171 126.121C141.614 128.817 138.168 129.742 135.472 128.186C132.776 126.629 131.854 123.18 133.404 120.484C134.964 117.788 138.41 116.866 141.109 118.419C143.808 119.976 144.73 123.425 143.171 126.121ZM141.112 104.926C138.416 106.486 134.967 105.561 133.413 102.865C131.854 100.168 132.779 96.7195 135.475 95.1629C138.174 93.6062 141.62 94.5281 143.177 97.2274C144.73 99.9236 143.808 103.369 141.112 104.926Z"
                fill="#D9D9D9"
              />
              <path
                d="M118.152 78.1113C99.6169 78.1113 84.5942 93.137 84.5942 111.672C84.5942 130.21 99.62 145.236 118.152 145.236C136.687 145.236 151.716 130.21 151.716 111.672C151.713 93.137 136.687 78.1113 118.152 78.1113ZM135.475 95.1591C138.174 93.6025 141.62 94.5244 143.177 97.2236C144.733 99.9198 143.811 103.369 141.112 104.925C138.416 106.485 134.967 105.56 133.413 102.864C131.857 100.168 132.782 96.7188 135.475 95.1591ZM118.152 82.7752C121.265 82.7752 123.792 85.2992 123.792 88.4125C123.792 91.5259 121.265 94.0498 118.152 94.0498C115.039 94.0498 112.518 91.5259 112.518 88.4125C112.518 85.2992 115.039 82.7752 118.152 82.7752ZM93.1303 97.2236C94.687 94.5274 98.1358 93.6025 100.832 95.1561C103.528 96.7158 104.447 100.165 102.897 102.861C101.337 105.554 97.891 106.476 95.1917 104.922C92.4985 103.369 91.5706 99.9198 93.1303 97.2236ZM100.829 128.182C98.1328 129.738 94.6869 128.814 93.1272 126.12C91.5675 123.424 92.4955 119.975 95.1917 118.419C97.8879 116.862 101.334 117.787 102.893 120.483C104.453 123.179 103.525 126.628 100.829 128.182ZM118.152 140.569C115.039 140.569 112.518 138.042 112.518 134.928C112.518 131.818 115.039 129.291 118.152 129.291C121.265 129.291 123.792 131.815 123.792 134.928C123.792 138.042 121.265 140.569 118.152 140.569ZM118.152 118.47C114.398 118.47 111.354 115.429 111.354 111.669C111.354 107.915 114.398 104.871 118.152 104.871C121.906 104.871 124.953 107.915 124.953 111.669C124.953 115.429 121.906 118.47 118.152 118.47ZM143.174 126.12C141.617 128.817 138.171 129.742 135.475 128.185C132.779 126.628 131.857 123.179 133.407 120.483C134.967 117.787 138.413 116.865 141.112 118.419C143.811 119.975 144.733 123.424 143.174 126.12Z"
                fill="#8B8B8B"
              />
              <path
                d="M118.147 80.0989C100.712 80.0989 86.5784 94.2389 86.5784 111.671C86.5784 129.108 100.712 143.245 118.147 143.245C135.585 143.245 149.722 129.108 149.722 111.671C149.722 94.2389 135.582 80.0989 118.147 80.0989ZM135.47 95.1608C138.169 93.6042 141.615 94.5261 143.172 97.2253C144.729 99.9216 143.807 103.37 141.107 104.927C138.411 106.487 134.962 105.562 133.409 102.866C131.852 100.169 132.777 96.7205 135.47 95.1608ZM118.147 82.777C121.261 82.777 123.787 85.3009 123.787 88.4142C123.787 91.5276 121.261 94.0515 118.147 94.0515C115.034 94.0515 112.513 91.5276 112.513 88.4142C112.513 85.3009 115.034 82.777 118.147 82.777ZM93.1255 97.2253C94.6822 94.5291 98.131 93.6042 100.827 95.1578C103.523 96.7175 104.442 100.166 102.892 102.863C101.332 105.556 97.8862 106.478 95.1869 104.924C92.4937 103.37 91.5658 99.9216 93.1255 97.2253ZM100.824 128.184C98.128 129.74 94.6822 128.815 93.1225 126.122C91.5628 123.426 92.4907 119.977 95.1869 118.42C97.8832 116.864 101.329 117.789 102.889 120.485C104.448 123.181 103.52 126.63 100.824 128.184ZM118.147 140.57C115.034 140.57 112.513 138.043 112.513 134.93C112.513 131.82 115.034 129.293 118.147 129.293C121.261 129.293 123.787 131.817 123.787 134.93C123.787 138.043 121.261 140.57 118.147 140.57ZM118.147 118.472C114.393 118.472 111.349 115.431 111.349 111.671C111.349 107.917 114.393 104.873 118.147 104.873C121.901 104.873 124.948 107.917 124.948 111.671C124.948 115.431 121.901 118.472 118.147 118.472ZM143.169 126.122C141.612 128.818 138.166 129.743 135.47 128.187C132.774 126.63 131.852 123.181 133.403 120.485C134.962 117.789 138.408 116.867 141.107 118.42C143.807 119.977 144.729 123.426 143.169 126.122Z"
                fill="#D9D9D9"
              />
              <path
                d="M118.147 96.1622C109.584 96.1622 102.641 103.105 102.641 111.668C102.641 120.235 109.584 127.178 118.147 127.178C126.71 127.178 133.653 120.235 133.653 111.668C133.653 103.105 126.71 96.1622 118.147 96.1622ZM118.147 118.469C114.393 118.469 111.349 115.429 111.349 111.668C111.349 107.914 114.393 104.87 118.147 104.87C121.901 104.87 124.948 107.914 124.948 111.668C124.948 115.429 121.901 118.469 118.147 118.469Z"
                fill="#8B8B8B"
              />
              <path
                d="M118.149 98.025C110.613 98.025 104.501 104.134 104.501 111.672C104.501 119.208 110.61 125.323 118.149 125.323C125.684 125.323 131.796 119.211 131.796 111.672C131.793 104.134 125.684 98.025 118.149 98.025ZM118.149 118.47C114.395 118.47 111.351 115.43 111.351 111.669C111.351 107.915 114.395 104.871 118.149 104.871C121.903 104.871 124.95 107.915 124.95 111.669C124.95 115.43 121.903 118.47 118.149 118.47Z"
                fill="#D9D9D9"
              />
              <path
                d="M71.0757 35.5491C71.0364 34.8055 70.4016 34.1012 69.6671 33.9894L61.6238 32.7289C61.3336 30.74 60.8258 28.8236 60.1064 27.01L66.4359 21.9047C67.0132 21.4392 67.2036 20.5203 66.853 19.8614L65.928 18.2624C65.5351 17.6337 64.6465 17.3344 63.9512 17.6004L56.3613 20.5294C55.1311 18.9788 53.7255 17.5732 52.1749 16.343L55.1039 8.75309C55.3729 8.0609 55.0737 7.16921 54.4419 6.77626L52.8429 5.85133C52.184 5.5007 51.2681 5.68507 50.7996 6.26542L45.6913 12.5949C43.8777 11.8755 41.9674 11.3677 39.9754 11.0745L38.7119 3.03419C38.6001 2.29968 37.8958 1.66492 37.1522 1.62562C37.1522 1.62562 36.992 1.61656 36.2243 1.61656C35.4595 1.61656 35.2993 1.62562 35.2993 1.62562C34.5558 1.66492 33.8515 2.29968 33.7366 3.03419L32.4792 11.0745C30.4872 11.3677 28.5709 11.8755 26.7573 12.5949L21.652 6.26542C21.1865 5.68507 20.2646 5.5007 19.6087 5.85133L18.0097 6.77626C17.3779 7.16921 17.0787 8.05787 17.3477 8.75309L20.2767 16.343C18.723 17.5732 17.3175 18.9788 16.0903 20.5294L8.50034 17.6004C7.80513 17.3344 6.91647 17.6307 6.5205 18.2624L5.59858 19.8614C5.24795 20.5173 5.43536 21.4362 6.01269 21.9047L12.3452 27.01C11.6228 28.8266 11.1149 30.74 10.8248 32.7289L2.78145 33.9894C2.04694 34.1042 1.41217 34.8055 1.37288 35.5491C1.37288 35.5491 1.36382 35.7093 1.36382 36.477C1.36382 37.2418 1.37288 37.402 1.37288 37.402C1.41217 38.1455 2.04694 38.8468 2.78145 38.9617L10.8248 40.2221C11.1149 42.211 11.6228 44.1274 12.3452 45.941L6.01269 51.0493C5.43536 51.5178 5.24795 52.4367 5.59858 53.0896L6.5205 54.6886C6.91344 55.3204 7.80513 55.6196 8.50034 55.3506L16.0903 52.4216C17.3175 53.9753 18.723 55.3778 20.2767 56.608L17.3477 64.1979C17.0787 64.8901 17.3779 65.7818 18.0097 66.1748L19.6087 67.0997C20.2646 67.4503 21.1835 67.2629 21.652 66.6826L26.7573 60.3531C28.5709 61.0725 30.4842 61.5803 32.4792 61.8705L33.7366 69.9108C33.8515 70.6483 34.5558 71.2801 35.2993 71.3224C35.2993 71.3224 35.4595 71.3314 36.2243 71.3314C36.992 71.3314 37.1522 71.3224 37.1522 71.3224C37.8958 71.2801 38.6001 70.6483 38.7119 69.9108L39.9754 61.8705C41.9643 61.5803 43.8777 61.0725 45.6913 60.3531L50.7996 66.6826C51.2651 67.2599 52.184 67.4473 52.8429 67.0997L54.4419 66.1748C55.0737 65.7818 55.3729 64.8932 55.1039 64.1979L52.1749 56.608C53.7255 55.3778 55.1311 53.9722 56.3613 52.4216L63.9512 55.3506C64.6465 55.6196 65.5351 55.3204 65.928 54.6886L66.853 53.0896C67.2036 52.4337 67.0163 51.5148 66.4359 51.0493L60.1064 45.941C60.8258 44.1274 61.3336 42.2141 61.6238 40.2221L69.6671 38.9617C70.4016 38.8468 71.0364 38.1425 71.0757 37.402C71.0757 37.402 71.0877 37.2418 71.0877 36.477C71.0877 35.7093 71.0757 35.5491 71.0757 35.5491ZM49.2187 34.8992C49.0948 33.8533 48.8409 32.8468 48.4812 31.8916C48.457 31.8251 48.4329 31.7586 48.4117 31.6952C48.3059 31.4261 48.188 31.1601 48.0641 30.8972C48.0278 30.8216 47.9915 30.74 47.9522 30.6644C47.8253 30.4045 47.6862 30.1475 47.5412 29.8997C47.5079 29.8423 47.4716 29.7818 47.4354 29.7244C46.5558 28.2675 45.4041 27.001 44.047 25.9853C44.0258 25.9672 44.0016 25.9521 43.9804 25.9339C43.7084 25.7344 43.4303 25.544 43.1432 25.3657C43.1401 25.3627 43.1341 25.3596 43.1311 25.3536C41.6379 24.4256 39.9482 23.7939 38.1376 23.5279C38.1376 23.5279 38.1346 23.5279 38.1316 23.5279V15.2851C48.4752 16.204 56.6757 24.5133 57.4374 34.8962L49.2187 34.8992ZM40.7129 36.477C40.7129 38.9526 38.7059 40.9627 36.2273 40.9627C33.7487 40.9627 31.7417 38.9526 31.7417 36.477C31.7417 33.9984 33.7487 31.9914 36.2273 31.9914C38.7059 31.9914 40.7129 33.9954 40.7129 36.477ZM34.326 15.2881V23.5309C32.5124 23.7939 30.8197 24.4287 29.3326 25.3566C29.3265 25.3596 29.3205 25.3627 29.3145 25.3687C29.0243 25.547 28.7462 25.7344 28.4772 25.937C28.456 25.9551 28.4318 25.9702 28.4137 25.9884C27.0565 27.001 25.9049 28.2705 25.0253 29.7274C24.989 29.7848 24.9558 29.8453 24.9195 29.9027C24.7714 30.1536 24.6354 30.4075 24.5054 30.6675C24.4691 30.743 24.4328 30.8246 24.3936 30.9002C24.2696 31.1632 24.1517 31.4261 24.0459 31.6982C24.0217 31.7617 23.9976 31.8282 23.9764 31.8947C23.6198 32.8498 23.3658 33.8564 23.2389 34.9022H15.0293C15.785 24.5163 23.9825 16.207 34.326 15.2881ZM23.3326 38.7017C23.393 39.0372 23.4626 39.3667 23.5442 39.6931C23.5502 39.7173 23.5563 39.7415 23.5623 39.7657C23.9946 41.4251 24.7381 42.9546 25.7356 44.2906C25.7477 44.3057 25.7598 44.3239 25.7749 44.342C26.7845 45.6811 28.0419 46.8176 29.4837 47.6881C29.4867 47.6911 29.4928 47.6911 29.4958 47.6942C30.9437 48.5677 32.5789 49.1662 34.326 49.4201L34.3291 57.6629C24.2031 56.7652 16.1175 48.7853 15.0656 38.7017H23.3326ZM38.1255 57.6629V49.4201C38.1286 49.4201 38.1316 49.4201 38.1316 49.4201C39.8787 49.1662 41.5079 48.5677 42.9618 47.6942C42.9648 47.6911 42.9679 47.6911 42.9739 47.6881C44.4127 46.8176 45.6701 45.6841 46.6797 44.342C46.6918 44.3239 46.7039 44.3088 46.716 44.2906C47.7134 42.9546 48.457 41.4251 48.8893 39.7657C48.8953 39.7415 48.9044 39.7143 48.9074 39.6931C48.992 39.3667 49.0646 39.0372 49.119 38.7017H57.389C56.3462 48.7853 48.2515 56.7652 38.1255 57.6629Z"
                fill="black"
              />
              <path
                d="M48.4547 34.1343C47.7564 28.2734 43.1831 23.6154 37.3645 22.763V11.7091H33.565V22.763C27.7433 23.6124 23.1731 28.2703 22.4658 34.1343H11.1398V37.9368H22.5685C23.5207 43.4895 27.961 47.8361 33.565 48.6522V60.359H37.3645V48.6522C42.9655 47.8361 47.4028 43.4895 48.3579 37.9368H59.7897V34.1343H48.4547ZM35.4662 40.1948C32.9907 40.1948 30.9806 38.1877 30.9806 35.7091C30.9806 33.2305 32.9907 31.2235 35.4662 31.2235C37.9418 31.2235 39.9489 33.2336 39.9489 35.7091C39.9489 38.1877 37.9418 40.1948 35.4662 40.1948Z"
                fill="#D9D9D9"
              />
              <path
                d="M70.3161 34.7852C70.2737 34.0416 69.636 33.3403 68.9045 33.2255L60.8642 31.965C60.568 29.9761 60.0632 28.0597 59.3408 26.2461L65.6733 21.1378C66.2536 20.6723 66.438 19.7534 66.0904 19.0975L65.1654 17.4985C64.7725 16.8668 63.8808 16.5675 63.1886 16.8366L55.5987 19.7655C54.3685 18.2119 52.9629 16.8093 51.4123 15.5791L54.3413 7.98617C54.6073 7.29397 54.308 6.40229 53.6793 6.00934L52.0803 5.0844C51.4244 4.73378 50.5055 4.92118 50.037 5.49851L44.9317 11.828C43.1181 11.1086 41.2017 10.6008 39.2128 10.3106L37.9523 2.2703C37.8375 1.53579 37.1332 0.901032 36.3926 0.858714C36.3926 0.858714 36.2294 0.84964 35.4647 0.84964C34.6999 0.84964 34.5397 0.858714 34.5397 0.858714C33.7962 0.901032 33.0919 1.53579 32.977 2.2703L31.7196 10.3106C29.7307 10.6008 27.8143 11.1116 26.0007 11.828L20.8954 5.49851C20.4299 4.92118 19.508 4.73378 18.8521 5.0844L17.2531 6.00934C16.6244 6.40229 16.3251 7.29095 16.5911 7.98617L19.5201 15.5791C17.9694 16.8093 16.5669 18.2119 15.3337 19.7655L7.74376 16.8366C7.04855 16.5675 6.15989 16.8668 5.76694 17.4985L4.842 19.0975C4.49137 19.7534 4.67878 20.6723 5.25913 21.1378L11.5886 26.2461C10.8692 28.0597 10.3614 29.9761 10.0712 31.965L2.03092 33.2255C1.29339 33.3403 0.658616 34.0446 0.622344 34.7852C0.622344 34.7852 0.613281 34.9454 0.613281 35.7131C0.613281 36.4779 0.622344 36.6381 0.622344 36.6381C0.661639 37.3816 1.29641 38.0859 2.03092 38.2008L10.0712 39.4612C10.3614 41.4471 10.8692 43.3635 11.5886 45.1801L5.25913 50.2854C4.67878 50.7539 4.49137 51.6728 4.842 52.3288L5.76694 53.9277C6.15989 54.5595 7.04855 54.8557 7.74376 54.5897L15.3337 51.6607C16.5669 53.2144 17.9694 54.6169 19.5201 55.8471L16.5911 63.4371C16.3251 64.1323 16.6244 65.021 17.2531 65.4139L18.8521 66.3388C19.508 66.6895 20.4299 66.5021 20.8954 65.9217L26.0007 59.5922C27.8173 60.3116 29.7307 60.8194 31.7196 61.1126L32.977 69.1529C33.0949 69.8874 33.7962 70.5222 34.5397 70.5615C34.5397 70.5615 34.6999 70.5706 35.4647 70.5706C36.2294 70.5706 36.3926 70.5615 36.3926 70.5615C37.1332 70.5222 37.8375 69.8874 37.9523 69.1529L39.2128 61.1126C41.2017 60.8194 43.1181 60.3116 44.9317 59.5922L50.037 65.9217C50.5025 66.5021 51.4244 66.6864 52.0803 66.3388L53.6793 65.4139C54.308 65.021 54.6073 64.1323 54.3413 63.4371L51.4123 55.8471C52.9629 54.6169 54.3654 53.2144 55.5987 51.6607L63.1886 54.5897C63.8838 54.8557 64.7725 54.5595 65.1654 53.9277L66.0904 52.3288C66.438 51.6728 66.2566 50.7539 65.6733 50.2854L59.3408 45.1801C60.0632 43.3635 60.568 41.4502 60.8642 39.4612L68.9045 38.2008C69.636 38.0859 70.2737 37.3816 70.3161 36.6381C70.3161 36.6381 70.3221 36.4779 70.3221 35.7131C70.3221 34.9454 70.3161 34.7852 70.3161 34.7852ZM35.4647 56.9927C23.7095 56.9927 14.182 47.4653 14.182 35.7101C14.182 23.9549 23.7095 14.4245 35.4647 14.4245C47.2198 14.4245 56.7503 23.9549 56.7503 35.7101C56.7503 47.4653 47.2168 56.9927 35.4647 56.9927Z"
                fill="#D9D9D9"
              />
              <path
                d="M35.4674 13.2086C23.0442 13.2086 12.9696 23.2832 12.9696 35.7094C12.9696 48.1356 23.0442 58.2071 35.4674 58.2071C47.8905 58.2071 57.9651 48.1326 57.9651 35.7094C57.9651 23.2832 47.8905 13.2086 35.4674 13.2086ZM35.4674 56.992C23.7122 56.992 14.1847 47.4646 14.1847 35.7094C14.1847 23.9542 23.7122 14.4237 35.4674 14.4237C47.2225 14.4237 56.753 23.9542 56.753 35.7094C56.753 47.4646 47.2195 56.992 35.4674 56.992Z"
                fill="#8B8B8B"
              />
              <path
                d="M35.4665 22.6138C28.2303 22.6138 22.3693 28.4778 22.3693 35.7111C22.3693 42.9443 28.2303 48.8083 35.4665 48.8083C42.7028 48.8083 48.5638 42.9443 48.5638 35.7111C48.5638 28.4778 42.6998 22.6138 35.4665 22.6138ZM35.4665 40.1967C32.991 40.1967 30.9809 38.1897 30.9809 35.7111C30.9809 33.2325 32.991 31.2254 35.4665 31.2254C37.9421 31.2254 39.9492 33.2355 39.9492 35.7111C39.9492 38.1897 37.9421 40.1967 35.4665 40.1967Z"
                fill="#8B8B8B"
              />
              <path
                d="M35.466 23.83C28.9038 23.83 23.5839 29.1499 23.5839 35.7121C23.5839 42.2713 28.9038 47.5912 35.466 47.5912C42.0282 47.5912 47.3481 42.2713 47.3481 35.7121C47.3451 29.1469 42.0252 23.83 35.466 23.83ZM35.466 40.1948C32.9904 40.1948 30.9804 38.1877 30.9804 35.7091C30.9804 33.2305 32.9904 31.2235 35.466 31.2235C37.9416 31.2235 39.9486 33.2335 39.9486 35.7091C39.9486 38.1877 37.9416 40.1948 35.466 40.1948Z"
                fill="#D9D9D9"
              />
              <path
                d="M104.141 139.791C104.162 139.299 104.177 138.8 104.177 138.301C104.177 137.802 104.162 137.304 104.141 136.808L99.0299 136.4C98.9513 135.294 98.8243 134.199 98.6188 133.135L103.431 131.422C103.219 130.445 102.968 129.481 102.666 128.538L97.6213 129.463C97.2646 128.42 96.8384 127.41 96.3608 126.428L100.577 123.52C100.121 122.635 99.6193 121.773 99.0843 120.939L94.4807 123.127C93.8641 122.214 93.1749 121.359 92.4555 120.531L95.7805 116.632C95.1064 115.894 94.4052 115.193 93.6737 114.522L89.7684 117.844C88.9432 117.127 88.0848 116.435 87.1749 115.819L89.3603 111.221C88.5291 110.683 87.6646 110.184 86.779 109.728L83.8712 113.941C82.8918 113.461 81.8822 113.038 80.8364 112.678L81.7643 107.636C80.8243 107.337 79.8601 107.083 78.8838 106.868L77.1699 111.683C76.1029 111.478 75.0117 111.351 73.9084 111.272L73.4943 106.161C73.0016 106.14 72.509 106.125 72.0042 106.125C71.5054 106.125 71.0097 106.14 70.514 106.161L70.1029 111.272C68.9966 111.348 67.9054 111.475 66.8414 111.683L65.1276 106.868C64.1512 107.083 63.187 107.337 62.247 107.636L63.1719 112.678C62.1291 113.038 61.1195 113.461 60.1402 113.941L57.2293 109.722C56.3437 110.181 55.4853 110.68 54.648 111.218L56.8334 115.816C55.9205 116.432 55.0651 117.124 54.2399 117.841L50.3376 114.519C49.6031 115.19 48.8958 115.891 48.2308 116.629L51.5528 120.528C50.8334 121.356 50.1442 122.214 49.5276 123.124L44.9271 120.936C44.389 121.77 43.8933 122.632 43.4339 123.517L47.6535 126.425C47.1729 127.407 46.7497 128.417 46.39 129.46L41.3482 128.535C41.046 129.478 40.7921 130.439 40.5805 131.419L45.3956 133.132C45.19 134.196 45.0631 135.288 44.9845 136.397L39.8732 136.805C39.849 137.298 39.8369 137.796 39.8369 138.298C39.8369 138.8 39.849 139.296 39.8732 139.788L44.9845 140.199C45.0601 141.306 45.187 142.397 45.3956 143.464L40.5805 145.175C40.7921 146.151 41.046 147.115 41.3482 148.058L46.39 147.133C46.7497 148.176 47.1729 149.186 47.6535 150.165L43.4339 153.076C43.8933 153.962 44.389 154.823 44.9271 155.657L49.5276 153.469C50.1442 154.382 50.8334 155.237 51.5528 156.065L48.2308 159.968C48.8989 160.705 49.6031 161.406 50.3376 162.077L54.2399 158.756C55.0651 159.475 55.9235 160.164 56.8334 160.781L54.648 165.381C55.4792 165.919 56.3437 166.418 57.2293 166.877L60.1402 162.658C61.1195 163.135 62.1291 163.562 63.1719 163.921L62.247 168.963C63.19 169.262 64.1512 169.519 65.1276 169.731L66.8414 164.916C67.9054 165.121 68.9966 165.248 70.1029 165.324L70.514 170.435C71.0097 170.459 71.5054 170.474 72.0042 170.474C72.509 170.474 73.0016 170.459 73.4943 170.435L73.9084 165.324C75.0117 165.248 76.1059 165.121 77.1699 164.916L78.8838 169.731C79.8601 169.519 80.8243 169.262 81.7643 168.963L80.8364 163.921C81.8822 163.562 82.8918 163.135 83.8712 162.658L86.782 166.877C87.6676 166.421 88.5291 165.922 89.3634 165.384L87.1779 160.784C88.0908 160.167 88.9462 159.478 89.7714 158.759L93.6767 162.081C94.4082 161.409 95.1125 160.708 95.7835 159.971L92.4586 156.068C93.178 155.24 93.8671 154.382 94.4838 153.472L99.0873 155.66C99.6223 154.826 100.124 153.962 100.58 153.079L96.3638 150.168C96.8414 149.189 97.2676 148.179 97.6243 147.136L102.669 148.061C102.971 147.118 103.222 146.157 103.434 145.178L98.6218 143.467C98.8243 142.4 98.9513 141.309 99.0329 140.202L104.141 139.791ZM82.9371 120.168C82.4898 119.896 82.0273 119.636 81.5558 119.397C82.0303 119.636 82.4868 119.896 82.9371 120.168ZM76.511 138.301C76.511 140.789 74.4918 142.808 72.0011 142.808C69.5135 142.808 67.4943 140.789 67.4943 138.301C67.4943 135.813 69.5135 133.794 72.0011 133.794C74.4918 133.794 76.511 135.813 76.511 138.301ZM73.9145 127.033C72.8626 128.085 71.1427 128.085 70.0878 127.033L62.4525 119.394C65.3241 117.943 68.5613 117.103 72.0011 117.103C75.4409 117.103 78.6812 117.94 81.5497 119.394L73.9145 127.033ZM62.4465 119.4C61.9749 119.639 61.5125 119.896 61.0651 120.171C61.5155 119.896 61.9749 119.639 62.4465 119.4ZM53.0973 128.753L60.7326 136.388C61.7875 137.44 61.7875 139.163 60.7326 140.215L53.0973 147.85C51.6434 144.978 50.8031 141.741 50.8031 138.301C50.8031 134.861 51.6434 131.624 53.0973 128.753ZM59.5508 155.428C57.7644 154.128 56.1956 152.559 54.8898 150.773C56.1956 152.556 57.7644 154.128 59.5508 155.428ZM54.8354 150.7C54.5331 150.283 54.255 149.86 53.983 149.422C54.255 149.86 54.5361 150.286 54.8354 150.7ZM53.85 149.204C53.5931 148.778 53.3482 148.345 53.1215 147.898C53.3482 148.345 53.5931 148.781 53.85 149.204ZM60.9109 156.34C60.4606 156.062 60.0193 155.772 59.587 155.458C60.0193 155.769 60.4636 156.062 60.9109 156.34ZM62.4525 157.205L70.0878 149.57C71.1427 148.515 72.8626 148.515 73.9145 149.57L81.5497 157.208C78.6812 158.662 75.4409 159.499 72.0011 159.499C67.99 159.499 64.254 158.363 61.053 156.425C61.5094 156.7 61.9749 156.963 62.4525 157.205ZM84.4666 155.419C86.244 154.122 87.8067 152.556 89.1064 150.782C87.8097 152.559 86.244 154.122 84.4666 155.419ZM81.5528 157.205C82.0273 156.966 82.4898 156.706 82.9402 156.431C82.4898 156.706 82.0304 156.966 81.5528 157.205ZM90.9079 147.85L83.2696 140.215C82.2177 139.163 82.2177 137.44 83.2696 136.388L90.9079 128.753C92.3588 131.624 93.1991 134.861 93.1991 138.301C93.1991 141.741 92.3618 144.978 90.9079 147.85ZM90.8838 147.901C90.6601 148.345 90.4122 148.778 90.1583 149.204C90.4122 148.778 90.6571 148.342 90.8838 147.901ZM90.0193 149.431C89.7502 149.863 89.4691 150.286 89.1729 150.697C89.4691 150.286 89.7502 149.86 90.0193 149.431ZM89.1729 125.902C89.4722 126.316 89.7503 126.739 90.0223 127.175C89.7503 126.742 89.4691 126.316 89.1729 125.902ZM90.1553 127.398C90.4122 127.825 90.6601 128.257 90.8838 128.701C90.6571 128.257 90.4122 127.825 90.1553 127.398Z"
                fill="black"
              />
              <path
                d="M82.5165 135.707L90.1579 128.069C88.1115 124.045 84.8289 120.754 80.7966 118.713L73.1614 126.352C72.1095 127.404 70.3865 127.404 69.3347 126.352L61.6994 118.713C57.6702 120.757 54.3876 124.045 52.3412 128.069L59.9795 135.707C61.0344 136.759 61.0344 138.482 59.9795 139.534L52.3412 147.172C54.3876 151.195 57.6702 154.484 61.6994 156.524L69.3347 148.889C70.3865 147.837 72.1095 147.837 73.1614 148.889L80.7966 156.527C84.8289 154.487 88.1115 151.198 90.1579 147.175L82.5165 139.537C81.4616 138.479 81.4616 136.756 82.5165 135.707ZM71.248 142.184C68.7271 142.184 66.6838 140.141 66.6838 137.62C66.6838 135.099 68.7271 133.056 71.248 133.056C73.7689 133.056 75.8153 135.099 75.8153 137.62C75.8153 140.141 73.7689 142.184 71.248 142.184Z"
                fill="#D9D9D9"
              />
              <path
                d="M103.389 139.109C103.413 138.616 103.425 138.117 103.425 137.619C103.425 137.12 103.413 136.621 103.389 136.128L98.2777 135.717C98.2021 134.611 98.0751 133.517 97.8696 132.453L102.682 130.739C102.47 129.763 102.216 128.798 101.914 127.855L96.8721 128.783C96.5124 127.74 96.0893 126.731 95.6117 125.749L99.8313 122.841C99.3719 121.955 98.8731 121.094 98.3381 120.259L93.7376 122.448C93.121 121.535 92.4288 120.68 91.7124 119.851L95.0343 115.952C94.3663 115.215 93.662 114.513 92.9275 113.842L89.0253 117.164C88.2001 116.445 87.3416 115.756 86.4288 115.139L88.6172 110.538C87.783 110 86.9215 109.502 86.0359 109.045L83.125 113.265C82.1427 112.784 81.133 112.361 80.0902 112.001L81.0152 106.96C80.0751 106.66 79.1139 106.406 78.1346 106.192L76.4237 111.007C75.3598 110.801 74.2686 110.674 73.1623 110.596L72.7512 105.485C72.2555 105.463 71.7598 105.448 71.258 105.448C70.7562 105.448 70.2605 105.463 69.7709 105.485L69.3567 110.596C68.2535 110.674 67.1593 110.798 66.0953 111.007L64.3814 106.192C63.4051 106.406 62.4409 106.66 61.5008 106.96L62.4288 112.001C61.3829 112.361 60.3734 112.784 59.394 113.265L56.4832 109.045C55.5976 109.505 54.7361 110.003 53.9048 110.541L56.0902 115.142C55.1774 115.759 54.322 116.448 53.4938 117.167L49.5915 113.845C48.86 114.516 48.1527 115.218 47.4847 115.955L50.8096 119.854C50.0902 120.683 49.4011 121.541 48.7844 122.451L44.1839 120.262C43.6459 121.097 43.1472 121.961 42.6907 122.844L46.9104 125.752C46.4328 126.734 46.0066 127.743 45.6499 128.786L40.6051 127.858C40.3058 128.801 40.0519 129.763 39.8373 130.742L44.6555 132.456C44.4499 133.52 44.323 134.611 44.2444 135.72L39.133 136.131C39.1089 136.624 39.0938 137.123 39.0938 137.622C39.0938 138.123 39.1089 138.619 39.133 139.112L44.2444 139.523C44.32 140.629 44.4469 141.723 44.6555 142.787L39.8373 144.498C40.0519 145.474 40.3058 146.439 40.6051 147.382L45.6499 146.454C46.0066 147.497 46.4328 148.506 46.9104 149.486L42.6907 152.393C43.1472 153.279 43.6459 154.14 44.1839 154.975L48.7844 152.786C49.4011 153.699 50.0902 154.555 50.8096 155.383L47.4847 159.285C48.1557 160.02 48.86 160.724 49.5915 161.392L53.4938 158.07C54.322 158.789 55.1804 159.479 56.0902 160.095L53.9048 164.696C54.7361 165.231 55.6006 165.729 56.4832 166.189L59.394 161.969C60.3734 162.45 61.3829 162.873 62.4288 163.233L61.5008 168.274C62.4439 168.574 63.4051 168.831 64.3814 169.042L66.0953 164.227C67.1623 164.433 68.2535 164.56 69.3567 164.638L69.7709 169.747C70.2605 169.771 70.7562 169.786 71.258 169.786C71.7598 169.786 72.2555 169.771 72.7512 169.747L73.1623 164.638C74.2686 164.563 75.3628 164.433 76.4237 164.227L78.1346 169.042C79.1139 168.831 80.0781 168.574 81.0152 168.274L80.0902 163.233C81.133 162.873 82.1427 162.45 83.125 161.969L86.0359 166.189C86.9215 165.732 87.7799 165.234 88.6172 164.696L86.4288 160.095C87.3446 159.479 88.2001 158.789 89.0253 158.07L92.9275 161.392C93.662 160.721 94.3693 160.02 95.0343 159.285L91.7124 155.383C92.4288 154.555 93.121 153.696 93.7376 152.786L98.3381 154.975C98.8731 154.14 99.3719 153.276 99.8313 152.393L95.6117 149.486C96.0893 148.503 96.5124 147.494 96.8721 146.454L101.914 147.382C102.216 146.436 102.47 145.474 102.682 144.498L97.8696 142.787C98.0721 141.723 98.1991 140.629 98.2777 139.523L103.389 139.109ZM71.249 160.15C58.8076 160.15 48.721 150.063 48.721 137.619C48.721 125.174 58.8076 115.088 71.249 115.088C83.6933 115.088 93.7799 125.174 93.7799 137.619C93.7799 150.063 83.6933 160.15 71.249 160.15Z"
                fill="#D9D9D9"
              />
              <path
                d="M71.2497 115.089C58.8084 115.089 48.7217 125.175 48.7217 137.62C48.7217 150.064 58.8084 160.151 71.2497 160.151C83.6941 160.151 93.7807 150.064 93.7807 137.62C93.7807 125.175 83.6941 115.089 71.2497 115.089ZM71.2497 158.818C59.5429 158.818 50.0547 149.326 50.0547 137.62C50.0547 125.913 59.5429 116.422 71.2497 116.422C82.9565 116.422 92.4507 125.913 92.4507 137.62C92.4507 149.326 82.9565 158.818 71.2497 158.818Z"
                fill="#8B8B8B"
              />
              <path
                d="M65.4534 137.618C65.4534 140.822 68.0499 143.415 71.2509 143.415C74.4519 143.415 77.0484 140.822 77.0484 137.618C77.0484 134.417 74.4519 131.82 71.2509 131.82C68.0529 131.82 65.4534 134.417 65.4534 137.618ZM75.7607 137.618C75.7607 140.109 73.7416 142.125 71.2509 142.125C68.7632 142.125 66.744 140.109 66.744 137.618C66.744 135.13 68.7632 133.111 71.2509 133.111C73.7416 133.111 75.7607 135.13 75.7607 137.618Z"
                fill="#8B8B8B"
              />
              <path
                d="M161.534 52.4647C161.556 52.0657 161.568 51.6636 161.568 51.2586C161.568 50.8566 161.556 50.4546 161.534 50.0556L157.405 49.7261C157.345 48.8344 157.239 47.9518 157.076 47.0903L160.966 45.706C160.794 44.917 160.588 44.1402 160.347 43.3785L156.272 44.1281C155.982 43.2848 155.64 42.4687 155.25 41.6767L158.66 39.3281C158.291 38.6118 157.886 37.9165 157.454 37.2425L153.736 39.0077C153.237 38.2732 152.681 37.578 152.101 36.913L154.785 33.7604C154.244 33.1679 153.675 32.5966 153.08 32.0586L149.93 34.7427C149.256 34.1624 148.567 33.6062 147.833 33.1075L149.601 29.3896C148.921 28.9573 148.226 28.5553 147.512 28.1835L145.164 31.5901C144.372 31.2032 143.559 30.8616 142.712 30.5714L143.462 26.4969C142.7 26.2551 141.92 26.0495 141.131 25.8772L139.747 29.7674C138.886 29.6012 138.006 29.4984 137.111 29.4379L136.782 25.309C136.38 25.2908 135.981 25.2787 135.576 25.2787C135.174 25.2787 134.772 25.2908 134.373 25.309L134.043 29.4379C133.152 29.5014 132.269 29.6012 131.41 29.7674L130.023 25.8772C129.234 26.0495 128.457 26.2551 127.696 26.4969L128.445 30.5714C127.602 30.8616 126.786 31.2032 125.994 31.5901L123.645 28.1835C122.929 28.5553 122.231 28.9573 121.56 29.3896L123.325 33.1075C122.587 33.6062 121.895 34.1624 121.23 34.7427L118.077 32.0586C117.485 32.5997 116.914 33.1679 116.373 33.7604L119.057 36.913C118.476 37.581 117.92 38.2732 117.422 39.0077L113.704 37.2425C113.268 37.9165 112.869 38.6118 112.498 39.3281L115.904 41.6767C115.52 42.4687 115.179 43.2848 114.886 44.1281L110.814 43.3785C110.572 44.1402 110.367 44.917 110.194 45.706L114.082 47.0903C113.912 47.9518 113.813 48.8344 113.752 49.7261L109.623 50.0556C109.605 50.4576 109.593 50.8566 109.593 51.2586C109.593 51.6636 109.605 52.0657 109.623 52.4647L113.752 52.7971C113.816 53.6888 113.915 54.5715 114.082 55.4329L110.194 56.8143C110.367 57.6032 110.572 58.383 110.814 59.1448L114.886 58.3951C115.179 59.2354 115.52 60.0516 115.904 60.8465L112.498 63.1951C112.869 63.9115 113.271 64.6067 113.704 65.2808L117.422 63.5155C117.92 64.2531 118.476 64.9453 119.057 65.6133L116.364 68.7659C116.905 69.3584 117.473 69.9266 118.068 70.4677L121.221 67.7836C121.889 68.3639 122.578 68.9201 123.316 69.4188L121.551 73.1337C122.225 73.5689 122.92 73.9679 123.636 74.3397L125.985 70.9302C126.78 71.3171 127.593 71.6586 128.436 71.9518L127.687 76.0264C128.448 76.2682 129.225 76.4707 130.014 76.646L131.401 72.7558C132.26 72.9221 133.143 73.0249 134.034 73.0853L134.364 77.2143C134.766 77.2324 135.168 77.2445 135.567 77.2445C135.975 77.2445 136.374 77.2324 136.773 77.2143L137.102 73.0853C137.997 73.0218 138.876 72.9221 139.738 72.7558L141.122 76.646C141.911 76.4707 142.691 76.2682 143.453 76.0234L142.703 71.9518C143.547 71.6586 144.363 71.3201 145.155 70.9302L147.503 74.3397C148.217 73.9679 148.915 73.5659 149.592 73.1337L147.824 69.4188C148.558 68.9201 149.25 68.3639 149.921 67.7836L153.071 70.4677C153.663 69.9266 154.235 69.3584 154.776 68.7659L152.092 65.6133C152.672 64.9453 153.228 64.2531 153.727 63.5155L157.445 65.2808C157.877 64.6037 158.282 63.9115 158.651 63.1951L155.241 60.8465C155.631 60.0546 155.973 59.2385 156.263 58.3951L160.337 59.1448C160.579 58.383 160.785 57.6062 160.957 56.8143L157.067 55.4329C157.233 54.5715 157.339 53.6888 157.396 52.7971L161.534 52.4647ZM135.573 54.9493C133.535 54.9493 131.888 53.2959 131.888 51.2586C131.888 49.2244 133.535 47.5709 135.573 47.5709C137.61 47.5709 139.263 49.2213 139.263 51.2586C139.26 53.2959 137.61 54.9493 135.573 54.9493Z"
                fill="black"
              />
              <path
                d="M161.113 52.0874C161.131 51.6884 161.143 51.2864 161.143 50.8813C161.143 50.4763 161.131 50.0773 161.113 49.6783L156.981 49.3489C156.92 48.4541 156.814 47.5745 156.651 46.7131L160.541 45.3287C160.369 44.5398 160.163 43.763 159.922 43.0013L155.847 43.7509C155.557 42.9075 155.215 42.0914 154.825 41.2995L158.235 38.9478C157.866 38.2345 157.461 37.5363 157.026 36.8652L153.311 38.6305C152.812 37.8929 152.256 37.2007 151.679 36.5327L154.36 33.3801C153.819 32.7876 153.251 32.2194 152.655 31.6783L149.502 34.3625C148.831 33.7821 148.142 33.2229 147.408 32.7242L149.173 29.0093C148.496 28.5771 147.804 28.172 147.087 27.8033L144.739 31.2098C143.947 30.8229 143.134 30.4813 142.287 30.1912L143.037 26.1166C142.275 25.8748 141.495 25.6693 140.706 25.497L139.322 29.3871C138.461 29.2209 137.581 29.1181 136.686 29.0577L136.357 24.9287C135.958 24.9106 135.556 24.8985 135.151 24.8985C134.749 24.8985 134.347 24.9106 133.948 24.9287L133.618 29.0577C132.727 29.1211 131.844 29.2209 130.983 29.3871L129.598 25.497C128.809 25.6693 128.032 25.8748 127.271 26.1166L128.02 30.1912C127.177 30.4813 126.361 30.8229 125.566 31.2098L123.217 27.8033C122.501 28.1751 121.803 28.5771 121.132 29.0093L122.897 32.7242C122.159 33.2229 121.467 33.7791 120.802 34.3625L117.65 31.6783C117.057 32.2194 116.486 32.7876 115.945 33.3801L118.632 36.5327C118.052 37.2007 117.492 37.8929 116.997 38.6305L113.282 36.8652C112.847 37.5393 112.448 38.2345 112.073 38.9478L115.479 41.2995C115.095 42.0914 114.754 42.9075 114.461 43.7509L110.389 43.0013C110.147 43.763 109.942 44.5398 109.769 45.3287L113.657 46.7131C113.487 47.5745 113.388 48.4541 113.324 49.3489L109.198 49.6783C109.18 50.0773 109.168 50.4793 109.168 50.8813C109.168 51.2834 109.18 51.6884 109.198 52.0874L113.324 52.4169C113.388 53.3116 113.49 54.1912 113.657 55.0526L109.769 56.437C109.942 57.2259 110.147 58.0058 110.389 58.7645L114.461 58.0179C114.754 58.8582 115.095 59.6743 115.479 60.4693L112.073 62.8179C112.445 63.5343 112.847 64.2295 113.282 64.9035L116.997 63.1383C117.492 63.8758 118.052 64.568 118.632 65.236L115.945 68.3887C116.489 68.9811 117.057 69.5494 117.65 70.0904L120.802 67.4063C121.47 67.9897 122.159 68.5428 122.897 69.0446L121.132 72.7594C121.806 73.1947 122.501 73.5937 123.217 73.9655L125.566 70.5559C126.361 70.9428 127.174 71.2844 128.02 71.5746L127.271 75.6491C128.032 75.8909 128.809 76.0965 129.598 76.2688L130.983 72.3786C131.844 72.5448 132.727 72.6476 133.618 72.7081L133.948 76.837C134.35 76.8552 134.752 76.8673 135.151 76.8673C135.559 76.8673 135.961 76.8552 136.357 76.837L136.686 72.7081C137.581 72.6446 138.461 72.5418 139.322 72.3786L140.706 76.2688C141.495 76.0965 142.275 75.8909 143.037 75.6491L142.287 71.5746C143.131 71.2844 143.947 70.9428 144.739 70.5559L147.087 73.9655C147.804 73.5937 148.499 73.1917 149.173 72.7594L147.408 69.0446C148.142 68.5458 148.834 67.9897 149.502 67.4063L152.655 70.0904C153.248 69.5494 153.819 68.9811 154.36 68.3887L151.679 65.236C152.256 64.568 152.812 63.8758 153.311 63.1383L157.026 64.9035C157.461 64.2264 157.863 63.5312 158.235 62.8179L154.825 60.4693C155.215 59.6743 155.557 58.8612 155.847 58.0179L159.922 58.7645C160.163 58.0058 160.369 57.2259 160.541 56.437L156.651 55.0526C156.817 54.1912 156.923 53.3116 156.981 52.4169L161.113 52.0874ZM135.148 54.569C133.111 54.569 131.463 52.9186 131.463 50.8813C131.463 48.8441 133.111 47.1937 135.148 47.1937C137.185 47.1937 138.838 48.8441 138.838 50.8813C138.838 52.9186 137.185 54.569 135.148 54.569Z"
                fill="#D9D9D9"
              />
              <path
                d="M135.148 32.6818C125.1 32.6818 116.948 40.8309 116.948 50.8813C116.948 60.9347 125.1 69.0808 135.148 69.0808C145.201 69.0808 153.347 60.9317 153.347 50.8813C153.35 40.8309 145.201 32.6818 135.148 32.6818ZM135.148 54.569C133.11 54.569 131.463 52.9186 131.463 50.8813C131.463 48.844 133.11 47.1937 135.148 47.1937C137.185 47.1937 138.838 48.844 138.838 50.8813C138.838 52.9186 137.185 54.569 135.148 54.569Z"
                fill="#8B8B8B"
              />
              <path
                d="M135.15 33.7572C125.698 33.7572 118.03 41.4257 118.03 50.8806C118.03 60.3385 125.698 68.004 135.15 68.004C144.608 68.004 152.276 60.3385 152.276 50.8806C152.276 41.4257 144.608 33.7572 135.15 33.7572ZM135.15 54.5683C133.113 54.5683 131.465 52.9179 131.465 50.8806C131.465 48.8433 133.113 47.1929 135.15 47.1929C137.187 47.1929 138.841 48.8433 138.841 50.8806C138.841 52.9179 137.187 54.5683 135.15 54.5683Z"
                fill="#D9D9D9"
              />
              <path
                d="M135.15 42.4737C130.507 42.4737 126.744 46.2399 126.744 50.8827C126.744 55.5286 130.507 59.2918 135.15 59.2918C139.796 59.2918 143.562 55.5256 143.562 50.8827C143.562 46.2399 139.796 42.4737 135.15 42.4737ZM135.15 54.5704C133.113 54.5704 131.466 52.92 131.466 50.8827C131.466 48.8455 133.113 47.1951 135.15 47.1951C137.188 47.1951 138.841 48.8455 138.841 50.8827C138.841 52.92 137.188 54.5704 135.15 54.5704Z"
                fill="#8B8B8B"
              />
              <path
                d="M135.148 43.4835C131.061 43.4835 127.752 46.7963 127.752 50.883C127.752 54.9726 131.064 58.2855 135.148 58.2855C139.241 58.2855 142.551 54.9726 142.551 50.883C142.551 46.7963 139.241 43.4835 135.148 43.4835ZM135.148 54.5706C133.111 54.5706 131.463 52.9202 131.463 50.883C131.463 48.8457 133.111 47.1953 135.148 47.1953C137.185 47.1953 138.839 48.8457 138.839 50.883C138.839 52.9202 137.185 54.5706 135.148 54.5706Z"
                fill="#D9D9D9"
              />
            </svg> */}

            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearFive}
            >
              <path
                d="M71.0757 35.5491C71.0364 34.8055 70.4016 34.1012 69.6671 33.9894L61.6238 32.7289C61.3336 30.74 60.8258 28.8236 60.1064 27.01L66.4359 21.9047C67.0132 21.4392 67.2036 20.5203 66.853 19.8614L65.928 18.2624C65.5351 17.6337 64.6465 17.3344 63.9512 17.6004L56.3613 20.5294C55.1311 18.9788 53.7255 17.5732 52.1749 16.343L55.1039 8.75309C55.3729 8.0609 55.0737 7.16921 54.4419 6.77626L52.8429 5.85133C52.184 5.5007 51.2681 5.68507 50.7996 6.26542L45.6913 12.5949C43.8777 11.8755 41.9674 11.3677 39.9754 11.0745L38.7119 3.03419C38.6001 2.29968 37.8958 1.66492 37.1522 1.62562C37.1522 1.62562 36.992 1.61656 36.2243 1.61656C35.4595 1.61656 35.2993 1.62562 35.2993 1.62562C34.5558 1.66492 33.8515 2.29968 33.7366 3.03419L32.4792 11.0745C30.4872 11.3677 28.5709 11.8755 26.7573 12.5949L21.652 6.26542C21.1865 5.68507 20.2646 5.5007 19.6087 5.85133L18.0097 6.77626C17.3779 7.16921 17.0787 8.05787 17.3477 8.75309L20.2767 16.343C18.723 17.5732 17.3175 18.9788 16.0903 20.5294L8.50034 17.6004C7.80513 17.3344 6.91647 17.6307 6.5205 18.2624L5.59858 19.8614C5.24795 20.5173 5.43536 21.4362 6.01269 21.9047L12.3452 27.01C11.6228 28.8266 11.1149 30.74 10.8248 32.7289L2.78145 33.9894C2.04694 34.1042 1.41217 34.8055 1.37288 35.5491C1.37288 35.5491 1.36382 35.7093 1.36382 36.477C1.36382 37.2418 1.37288 37.402 1.37288 37.402C1.41217 38.1455 2.04694 38.8468 2.78145 38.9617L10.8248 40.2221C11.1149 42.211 11.6228 44.1274 12.3452 45.941L6.01269 51.0493C5.43536 51.5178 5.24795 52.4367 5.59858 53.0896L6.5205 54.6886C6.91344 55.3204 7.80513 55.6196 8.50034 55.3506L16.0903 52.4216C17.3175 53.9753 18.723 55.3778 20.2767 56.608L17.3477 64.1979C17.0787 64.8901 17.3779 65.7818 18.0097 66.1748L19.6087 67.0997C20.2646 67.4503 21.1835 67.2629 21.652 66.6826L26.7573 60.3531C28.5709 61.0725 30.4842 61.5803 32.4792 61.8705L33.7366 69.9108C33.8515 70.6483 34.5558 71.2801 35.2993 71.3224C35.2993 71.3224 35.4595 71.3314 36.2243 71.3314C36.992 71.3314 37.1522 71.3224 37.1522 71.3224C37.8958 71.2801 38.6001 70.6483 38.7119 69.9108L39.9754 61.8705C41.9643 61.5803 43.8777 61.0725 45.6913 60.3531L50.7996 66.6826C51.2651 67.2599 52.184 67.4473 52.8429 67.0997L54.4419 66.1748C55.0737 65.7818 55.3729 64.8932 55.1039 64.1979L52.1749 56.608C53.7255 55.3778 55.1311 53.9722 56.3613 52.4216L63.9512 55.3506C64.6465 55.6196 65.5351 55.3204 65.928 54.6886L66.853 53.0896C67.2036 52.4337 67.0163 51.5148 66.4359 51.0493L60.1064 45.941C60.8258 44.1274 61.3336 42.2141 61.6238 40.2221L69.6671 38.9617C70.4016 38.8468 71.0364 38.1425 71.0757 37.402C71.0757 37.402 71.0877 37.2418 71.0877 36.477C71.0877 35.7093 71.0757 35.5491 71.0757 35.5491ZM49.2187 34.8992C49.0948 33.8533 48.8409 32.8468 48.4812 31.8916C48.457 31.8251 48.4329 31.7586 48.4117 31.6952C48.3059 31.4261 48.188 31.1601 48.0641 30.8972C48.0278 30.8216 47.9915 30.74 47.9522 30.6644C47.8253 30.4045 47.6862 30.1475 47.5412 29.8997C47.5079 29.8423 47.4716 29.7818 47.4354 29.7244C46.5558 28.2675 45.4041 27.001 44.047 25.9853C44.0258 25.9672 44.0016 25.9521 43.9804 25.9339C43.7084 25.7344 43.4303 25.544 43.1432 25.3657C43.1401 25.3627 43.1341 25.3596 43.1311 25.3536C41.6379 24.4256 39.9482 23.7939 38.1376 23.5279C38.1376 23.5279 38.1346 23.5279 38.1316 23.5279V15.2851C48.4752 16.204 56.6757 24.5133 57.4374 34.8962L49.2187 34.8992ZM40.7129 36.477C40.7129 38.9526 38.7059 40.9627 36.2273 40.9627C33.7487 40.9627 31.7417 38.9526 31.7417 36.477C31.7417 33.9984 33.7487 31.9914 36.2273 31.9914C38.7059 31.9914 40.7129 33.9954 40.7129 36.477ZM34.326 15.2881V23.5309C32.5124 23.7939 30.8197 24.4287 29.3326 25.3566C29.3265 25.3596 29.3205 25.3627 29.3145 25.3687C29.0243 25.547 28.7462 25.7344 28.4772 25.937C28.456 25.9551 28.4318 25.9702 28.4137 25.9884C27.0565 27.001 25.9049 28.2705 25.0253 29.7274C24.989 29.7848 24.9558 29.8453 24.9195 29.9027C24.7714 30.1536 24.6354 30.4075 24.5054 30.6675C24.4691 30.743 24.4328 30.8246 24.3936 30.9002C24.2696 31.1632 24.1517 31.4261 24.0459 31.6982C24.0217 31.7617 23.9976 31.8282 23.9764 31.8947C23.6198 32.8498 23.3658 33.8564 23.2389 34.9022H15.0293C15.785 24.5163 23.9825 16.207 34.326 15.2881ZM23.3326 38.7017C23.393 39.0372 23.4626 39.3667 23.5442 39.6931C23.5502 39.7173 23.5563 39.7415 23.5623 39.7657C23.9946 41.4251 24.7381 42.9546 25.7356 44.2906C25.7477 44.3057 25.7598 44.3239 25.7749 44.342C26.7845 45.6811 28.0419 46.8176 29.4837 47.6881C29.4867 47.6911 29.4928 47.6911 29.4958 47.6942C30.9437 48.5677 32.5789 49.1662 34.326 49.4201L34.3291 57.6629C24.2031 56.7652 16.1175 48.7853 15.0656 38.7017H23.3326ZM38.1255 57.6629V49.4201C38.1286 49.4201 38.1316 49.4201 38.1316 49.4201C39.8787 49.1662 41.5079 48.5677 42.9618 47.6942C42.9648 47.6911 42.9679 47.6911 42.9739 47.6881C44.4127 46.8176 45.6701 45.6841 46.6797 44.342C46.6918 44.3239 46.7039 44.3088 46.716 44.2906C47.7134 42.9546 48.457 41.4251 48.8893 39.7657C48.8953 39.7415 48.9044 39.7143 48.9074 39.6931C48.992 39.3667 49.0646 39.0372 49.119 38.7017H57.389C56.3462 48.7853 48.2515 56.7652 38.1255 57.6629Z"
                fill="black"
              />
              <path
                d="M48.4547 34.1343C47.7564 28.2734 43.1831 23.6154 37.3645 22.763V11.7091H33.565V22.763C27.7433 23.6124 23.1731 28.2703 22.4658 34.1343H11.1398V37.9368H22.5685C23.5207 43.4895 27.961 47.8361 33.565 48.6522V60.359H37.3645V48.6522C42.9655 47.8361 47.4028 43.4895 48.3579 37.9368H59.7897V34.1343H48.4547ZM35.4662 40.1948C32.9907 40.1948 30.9806 38.1877 30.9806 35.7091C30.9806 33.2305 32.9907 31.2235 35.4662 31.2235C37.9418 31.2235 39.9489 33.2336 39.9489 35.7091C39.9489 38.1877 37.9418 40.1948 35.4662 40.1948Z"
                fill="#D9D9D9"
              />
              <path
                d="M70.3161 34.7852C70.2737 34.0416 69.636 33.3403 68.9045 33.2255L60.8642 31.965C60.568 29.9761 60.0632 28.0597 59.3408 26.2461L65.6733 21.1378C66.2536 20.6723 66.438 19.7534 66.0904 19.0975L65.1654 17.4985C64.7725 16.8668 63.8808 16.5675 63.1886 16.8366L55.5987 19.7655C54.3685 18.2119 52.9629 16.8093 51.4123 15.5791L54.3413 7.98617C54.6073 7.29397 54.308 6.40229 53.6793 6.00934L52.0803 5.0844C51.4244 4.73378 50.5055 4.92118 50.037 5.49851L44.9317 11.828C43.1181 11.1086 41.2017 10.6008 39.2128 10.3106L37.9523 2.2703C37.8375 1.53579 37.1332 0.901032 36.3926 0.858714C36.3926 0.858714 36.2294 0.84964 35.4647 0.84964C34.6999 0.84964 34.5397 0.858714 34.5397 0.858714C33.7962 0.901032 33.0919 1.53579 32.977 2.2703L31.7196 10.3106C29.7307 10.6008 27.8143 11.1116 26.0007 11.828L20.8954 5.49851C20.4299 4.92118 19.508 4.73378 18.8521 5.0844L17.2531 6.00934C16.6244 6.40229 16.3251 7.29095 16.5911 7.98617L19.5201 15.5791C17.9694 16.8093 16.5669 18.2119 15.3337 19.7655L7.74376 16.8366C7.04855 16.5675 6.15989 16.8668 5.76694 17.4985L4.842 19.0975C4.49137 19.7534 4.67878 20.6723 5.25913 21.1378L11.5886 26.2461C10.8692 28.0597 10.3614 29.9761 10.0712 31.965L2.03092 33.2255C1.29339 33.3403 0.658616 34.0446 0.622344 34.7852C0.622344 34.7852 0.613281 34.9454 0.613281 35.7131C0.613281 36.4779 0.622344 36.6381 0.622344 36.6381C0.661639 37.3816 1.29641 38.0859 2.03092 38.2008L10.0712 39.4612C10.3614 41.4471 10.8692 43.3635 11.5886 45.1801L5.25913 50.2854C4.67878 50.7539 4.49137 51.6728 4.842 52.3288L5.76694 53.9277C6.15989 54.5595 7.04855 54.8557 7.74376 54.5897L15.3337 51.6607C16.5669 53.2144 17.9694 54.6169 19.5201 55.8471L16.5911 63.4371C16.3251 64.1323 16.6244 65.021 17.2531 65.4139L18.8521 66.3388C19.508 66.6895 20.4299 66.5021 20.8954 65.9217L26.0007 59.5922C27.8173 60.3116 29.7307 60.8194 31.7196 61.1126L32.977 69.1529C33.0949 69.8874 33.7962 70.5222 34.5397 70.5615C34.5397 70.5615 34.6999 70.5706 35.4647 70.5706C36.2294 70.5706 36.3926 70.5615 36.3926 70.5615C37.1332 70.5222 37.8375 69.8874 37.9523 69.1529L39.2128 61.1126C41.2017 60.8194 43.1181 60.3116 44.9317 59.5922L50.037 65.9217C50.5025 66.5021 51.4244 66.6864 52.0803 66.3388L53.6793 65.4139C54.308 65.021 54.6073 64.1323 54.3413 63.4371L51.4123 55.8471C52.9629 54.6169 54.3654 53.2144 55.5987 51.6607L63.1886 54.5897C63.8838 54.8557 64.7725 54.5595 65.1654 53.9277L66.0904 52.3288C66.438 51.6728 66.2566 50.7539 65.6733 50.2854L59.3408 45.1801C60.0632 43.3635 60.568 41.4502 60.8642 39.4612L68.9045 38.2008C69.636 38.0859 70.2737 37.3816 70.3161 36.6381C70.3161 36.6381 70.3221 36.4779 70.3221 35.7131C70.3221 34.9454 70.3161 34.7852 70.3161 34.7852ZM35.4647 56.9927C23.7095 56.9927 14.182 47.4653 14.182 35.7101C14.182 23.9549 23.7095 14.4245 35.4647 14.4245C47.2198 14.4245 56.7503 23.9549 56.7503 35.7101C56.7503 47.4653 47.2168 56.9927 35.4647 56.9927Z"
                fill="#D9D9D9"
              />
              <path
                d="M35.4674 13.2086C23.0442 13.2086 12.9696 23.2832 12.9696 35.7094C12.9696 48.1356 23.0442 58.2071 35.4674 58.2071C47.8905 58.2071 57.9651 48.1326 57.9651 35.7094C57.9651 23.2832 47.8905 13.2086 35.4674 13.2086ZM35.4674 56.992C23.7122 56.992 14.1847 47.4646 14.1847 35.7094C14.1847 23.9542 23.7122 14.4237 35.4674 14.4237C47.2225 14.4237 56.753 23.9542 56.753 35.7094C56.753 47.4646 47.2195 56.992 35.4674 56.992Z"
                fill="#8B8B8B"
              />
              <path
                d="M35.4665 22.6138C28.2303 22.6138 22.3693 28.4778 22.3693 35.7111C22.3693 42.9443 28.2303 48.8083 35.4665 48.8083C42.7028 48.8083 48.5638 42.9443 48.5638 35.7111C48.5638 28.4778 42.6998 22.6138 35.4665 22.6138ZM35.4665 40.1967C32.991 40.1967 30.9809 38.1897 30.9809 35.7111C30.9809 33.2325 32.991 31.2254 35.4665 31.2254C37.9421 31.2254 39.9492 33.2355 39.9492 35.7111C39.9492 38.1897 37.9421 40.1967 35.4665 40.1967Z"
                fill="#8B8B8B"
              />
              <path
                d="M35.466 23.83C28.9038 23.83 23.5839 29.1499 23.5839 35.7121C23.5839 42.2713 28.9038 47.5912 35.466 47.5912C42.0282 47.5912 47.3481 42.2713 47.3481 35.7121C47.3451 29.1469 42.0252 23.83 35.466 23.83ZM35.466 40.1948C32.9904 40.1948 30.9804 38.1877 30.9804 35.7091C30.9804 33.2305 32.9904 31.2235 35.466 31.2235C37.9416 31.2235 39.9486 33.2335 39.9486 35.7091C39.9486 38.1877 37.9416 40.1948 35.466 40.1948Z"
                fill="#D9D9D9"
              />
            </svg>

            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearSix}
            >
              <path
                d="M65.1412 34.7913C65.1623 34.2986 65.1775 33.7999 65.1775 33.3011C65.1775 32.8024 65.1623 32.3037 65.1412 31.808L60.0299 31.3999C59.9513 30.2936 59.8243 29.1994 59.6188 28.1354L64.4308 26.4215C64.2193 25.4452 63.9684 24.481 63.6661 23.5379L58.6213 24.4629C58.2646 23.42 57.8384 22.4105 57.3608 21.4281L61.5774 18.5203C61.121 17.6346 60.6193 16.7732 60.0843 15.9389L55.4807 18.1273C54.8641 17.2145 54.1749 16.3591 53.4555 15.5309L56.7805 11.6316C56.1064 10.8941 55.4052 10.1928 54.6737 9.5218L50.7684 12.8437C49.9432 12.1273 49.0848 11.4352 48.1749 10.8185L50.3603 6.22103C49.5291 5.683 48.6646 5.18427 47.779 4.72784L44.8712 8.94144C43.8918 8.46083 42.8822 8.03766 41.8364 7.67797L42.7643 2.63615C41.8243 2.33691 40.8601 2.08301 39.8838 1.8684L38.1699 6.6835C37.1029 6.47796 36.0117 6.351 34.9084 6.27241L34.4943 1.16109C34.0016 1.13993 33.509 1.12482 33.0042 1.12482C32.5054 1.12482 32.0097 1.13993 31.514 1.16109L31.1029 6.27241C29.9966 6.34798 28.9054 6.47494 27.8414 6.6835L26.1276 1.8684C25.1512 2.08301 24.187 2.33691 23.247 2.63615L24.1719 7.67797C23.1291 8.03766 22.1195 8.46083 21.1402 8.94144L18.2293 4.7218C17.3437 5.18125 16.4853 5.67997 15.648 6.21801L17.8334 10.8155C16.9205 11.4321 16.0651 12.1243 15.2399 12.8407L11.3376 9.51878C10.6031 10.1898 9.89583 10.8911 9.23084 11.6286L12.5528 15.5278C11.8334 16.3561 11.1442 17.2145 10.5276 18.1243L5.92706 15.9359C5.38902 16.7702 4.89332 17.6316 4.43387 18.5173L8.65351 21.4251C8.1729 22.4074 7.74973 23.417 7.39003 24.4598L2.34822 23.5349C2.04595 24.478 1.79205 25.4392 1.58047 26.4185L6.39559 28.1324C6.19005 29.1964 6.06309 30.2875 5.9845 31.3969L0.873159 31.8049C0.848977 32.2976 0.836884 32.7964 0.836884 33.2981C0.836884 33.7999 0.848977 34.2956 0.873159 34.7883L5.9845 35.1994C6.06007 36.3057 6.18703 37.3969 6.39559 38.4639L1.58047 40.1747C1.79205 41.151 2.04595 42.1153 2.34822 43.0583L7.39003 42.1334C7.74973 43.1762 8.1729 44.1858 8.65351 45.1651L4.43387 48.076C4.89332 48.9616 5.38902 49.8231 5.92706 50.6573L10.5276 48.4689C11.1442 49.3818 11.8334 50.2372 12.5528 51.0654L9.23084 54.9676C9.89885 55.7052 10.6031 56.4065 11.3376 57.0775L15.2399 53.7556C16.0651 54.475 16.9235 55.1641 17.8334 55.7808L15.648 60.3812C16.4792 60.9193 17.3437 61.418 18.2293 61.8775L21.1402 57.6578C22.1195 58.1354 23.1291 58.5616 24.1719 58.9213L23.247 63.9631C24.19 64.2624 25.1512 64.5193 26.1276 64.7309L27.8414 59.9158C28.9054 60.1213 29.9966 60.2483 31.1029 60.3238L31.514 65.4352C32.0097 65.4594 32.5054 65.4745 33.0042 65.4745C33.509 65.4745 34.0016 65.4594 34.4943 65.4352L34.9084 60.3238C36.0117 60.2483 37.1059 60.1213 38.1699 59.9158L39.8838 64.7309C40.8601 64.5193 41.8243 64.2624 42.7643 63.9631L41.8364 58.9213C42.8822 58.5616 43.8918 58.1354 44.8712 57.6578L47.782 61.8775C48.6676 61.4211 49.5291 60.9223 50.3634 60.3843L48.1779 55.7838C49.0908 55.1672 49.9462 54.478 50.7714 53.7586L54.6767 57.0805C55.4082 56.4095 56.1125 55.7082 56.7835 54.9707L53.4586 51.0684C54.178 50.2402 54.8671 49.3818 55.4838 48.4719L60.0873 50.6604C60.6223 49.8261 61.1241 48.9616 61.5805 48.079L57.3638 45.1682C57.8414 44.1888 58.2676 43.1792 58.6243 42.1364L63.6691 43.0614C63.9714 42.1183 64.2223 41.1571 64.4339 40.1777L59.6218 38.4669C59.8243 37.3999 59.9513 36.3087 60.0329 35.2024L65.1412 34.7913ZM43.9371 15.1681C43.4898 14.8961 43.0273 14.6362 42.5558 14.3974C43.0303 14.6362 43.4868 14.8961 43.9371 15.1681ZM37.511 33.3011C37.511 35.7888 35.4918 37.808 33.0011 37.808C30.5135 37.808 28.4943 35.7888 28.4943 33.3011C28.4943 30.8135 30.5135 28.7943 33.0011 28.7943C35.4918 28.7943 37.511 30.8135 37.511 33.3011ZM34.9145 22.0326C33.8626 23.0845 32.1427 23.0845 31.0878 22.0326L23.4525 14.3943C26.3241 12.9435 29.5613 12.1031 33.0011 12.1031C36.4409 12.1031 39.6812 12.9404 42.5497 14.3943L34.9145 22.0326ZM23.4465 14.4004C22.9749 14.6392 22.5125 14.8961 22.0651 15.1712C22.5155 14.8961 22.9749 14.6392 23.4465 14.4004ZM14.0973 23.7525L21.7326 31.3878C22.7875 32.4397 22.7875 34.1626 21.7326 35.2145L14.0973 42.8498C12.6434 39.9782 11.8031 36.7409 11.8031 33.3011C11.8031 29.8613 12.6434 26.6241 14.0973 23.7525ZM20.5508 50.4276C18.7644 49.1278 17.1956 47.5591 15.8898 45.7727C17.1956 47.5561 18.7644 49.1278 20.5508 50.4276ZM15.8354 45.7001C15.5331 45.283 15.255 44.8598 14.983 44.4215C15.255 44.8598 15.5361 45.286 15.8354 45.7001ZM14.85 44.2039C14.5931 43.7777 14.3482 43.3455 14.1215 42.8981C14.3482 43.3455 14.5931 43.7807 14.85 44.2039ZM21.9109 51.3404C21.4606 51.0624 21.0193 50.7722 20.587 50.4578C21.0193 50.7692 21.4636 51.0624 21.9109 51.3404ZM23.4525 52.2049L31.0878 44.5697C32.1427 43.5148 33.8626 43.5148 34.9145 44.5697L42.5497 52.208C39.6812 53.6619 36.4409 54.4991 33.0011 54.4991C28.99 54.4991 25.254 53.3626 22.053 51.4251C22.5094 51.7001 22.9749 51.9631 23.4525 52.2049ZM45.4666 50.4185C47.244 49.1218 48.8067 47.5561 50.1064 45.7818C48.8097 47.5591 47.244 49.1218 45.4666 50.4185ZM42.5528 52.2049C43.0273 51.9661 43.4898 51.7062 43.9402 51.4311C43.4898 51.7062 43.0304 51.9661 42.5528 52.2049ZM51.9079 42.8498L44.2696 35.2145C43.2177 34.1626 43.2177 32.4397 44.2696 31.3878L51.9079 23.7525C53.3588 26.6241 54.1991 29.8613 54.1991 33.3011C54.1991 36.7409 53.3618 39.9782 51.9079 42.8498ZM51.8838 42.9011C51.6601 43.3455 51.4122 43.7777 51.1583 44.2039C51.4122 43.7777 51.6571 43.3425 51.8838 42.9011ZM51.0193 44.4306C50.7502 44.8629 50.4691 45.286 50.1729 45.6971C50.4691 45.286 50.7502 44.8598 51.0193 44.4306ZM50.1729 20.9022C50.4722 21.3163 50.7503 21.7394 51.0223 22.1747C50.7503 21.7424 50.4691 21.3163 50.1729 20.9022ZM51.1553 22.3984C51.4122 22.8246 51.6601 23.2568 51.8838 23.7012C51.6571 23.2568 51.4122 22.8246 51.1553 22.3984Z"
                fill="black"
              />
              <path
                d="M43.5165 30.7069L51.1579 23.0686C49.1115 19.0454 45.8289 15.7537 41.7966 13.7134L34.1614 21.3517C33.1095 22.4036 31.3865 22.4036 30.3347 21.3517L22.6994 13.7134C18.6702 15.7568 15.3876 19.0454 13.3412 23.0686L20.9795 30.7069C22.0344 31.7588 22.0344 33.4817 20.9795 34.5336L13.3412 42.1719C15.3876 46.1951 18.6702 49.4837 22.6994 51.524L30.3347 43.8888C31.3865 42.8369 33.1095 42.8369 34.1614 43.8888L41.7966 51.527C45.8289 49.4867 49.1115 46.1981 51.1579 42.1749L43.5165 34.5366C42.4616 33.4787 42.4616 31.7558 43.5165 30.7069ZM32.248 37.1845C29.7271 37.1845 27.6838 35.1411 27.6838 32.6202C27.6838 30.0993 29.7271 28.056 32.248 28.056C34.7689 28.056 36.8153 30.0993 36.8153 32.6202C36.8153 35.1411 34.7689 37.1845 32.248 37.1845Z"
                fill="#D9D9D9"
              />
              <path
                d="M64.389 34.1087C64.4132 33.616 64.4253 33.1173 64.4253 32.6186C64.4253 32.1198 64.4132 31.6211 64.389 31.1284L59.2777 30.7173C59.2021 29.611 59.0751 28.5168 58.8696 27.4528L63.6817 25.739C63.4701 24.7626 63.2162 23.7984 62.9139 22.8553L57.8721 23.7833C57.5124 22.7405 57.0893 21.7309 56.6117 20.7485L60.8313 17.8407C60.3719 16.9551 59.8731 16.0936 59.3381 15.2594L54.7376 17.4478C54.121 16.5349 53.4288 15.6795 52.7124 14.8513L56.0343 10.9521C55.3663 10.2145 54.662 9.51326 53.9275 8.84223L50.0253 12.1641C49.2001 11.4447 48.3416 10.7556 47.4288 10.139L49.6172 5.53844C48.783 5.00041 47.9215 4.50166 47.0359 4.04524L44.125 8.2649C43.1427 7.78429 42.133 7.36112 41.0902 7.00142L42.0152 1.95961C41.0751 1.66036 40.1139 1.40644 39.1346 1.19183L37.4237 6.00696C36.3598 5.80141 35.2686 5.67446 34.1623 5.59587L33.7512 0.484548C33.2555 0.463389 32.7598 0.448273 32.258 0.448273C31.7562 0.448273 31.2605 0.463389 30.7709 0.484548L30.3567 5.59587C29.2535 5.67446 28.1593 5.79839 27.0953 6.00696L25.3814 1.19183C24.4051 1.40644 23.4409 1.66036 22.5008 1.95961L23.4288 7.00142C22.3829 7.36112 21.3734 7.78429 20.394 8.2649L17.4832 4.04524C16.5976 4.50468 15.7361 5.00343 14.9048 5.54147L17.0902 10.142C16.1774 10.7586 15.322 11.4478 14.4938 12.1672L10.5915 8.84525C9.86 9.51628 9.1527 10.2175 8.48469 10.9551L11.8096 14.8543C11.0902 15.6825 10.4011 16.541 9.78444 17.4508L5.18395 15.2624C4.64591 16.0966 4.14716 16.9611 3.69074 17.8437L7.9104 20.7515C7.43281 21.7339 7.00662 22.7435 6.64994 23.7863L1.60509 22.8584C1.30584 23.8014 1.05194 24.7626 0.837334 25.742L5.65548 27.4558C5.44994 28.5198 5.32298 29.611 5.24439 30.7203L0.133046 31.1314C0.108865 31.6241 0.09375 32.1228 0.09375 32.6216C0.09375 33.1233 0.108865 33.6191 0.133046 34.1118L5.24439 34.5228C5.31996 35.6291 5.44691 36.7233 5.65548 37.7873L0.837334 39.4982C1.05194 40.4745 1.30584 41.4387 1.60509 42.3818L6.64994 41.4538C7.00662 42.4966 7.43281 43.5062 7.9104 44.4856L3.69074 47.3934C4.14716 48.279 4.64591 49.1405 5.18395 49.9747L9.78444 47.7863C10.4011 48.6992 11.0902 49.5546 11.8096 50.3828L8.48469 54.2851C9.15572 55.0196 9.86 55.7238 10.5915 56.3919L14.4938 53.0699C15.322 53.7893 16.1804 54.4785 17.0902 55.0951L14.9048 59.6956C15.7361 60.2307 16.6006 60.7294 17.4832 61.1889L20.394 56.9692C21.3734 57.4498 22.3829 57.873 23.4288 58.2327L22.5008 63.2745C23.4439 63.5737 24.4051 63.8307 25.3814 64.0423L27.0953 59.2271C28.1623 59.4327 29.2535 59.5596 30.3567 59.6382L30.7709 64.7465C31.2605 64.7707 31.7562 64.7858 32.258 64.7858C32.7598 64.7858 33.2555 64.7707 33.7512 64.7465L34.1623 59.6382C35.2686 59.5627 36.3628 59.4327 37.4237 59.2271L39.1346 64.0423C40.1139 63.8307 41.0781 63.5737 42.0152 63.2745L41.0902 58.2327C42.133 57.873 43.1427 57.4498 44.125 56.9692L47.0359 61.1889C47.9215 60.7324 48.7799 60.2337 49.6172 59.6956L47.4288 55.0951C48.3446 54.4785 49.2001 53.7893 50.0253 53.0699L53.9275 56.3919C54.662 55.7208 55.3693 55.0196 56.0343 54.2851L52.7124 50.3828C53.4288 49.5546 54.121 48.6961 54.7376 47.7863L59.3381 49.9747C59.8731 49.1405 60.3719 48.276 60.8313 47.3934L56.6117 44.4856C57.0893 43.5032 57.5124 42.4936 57.8721 41.4538L62.9139 42.3818C63.2162 41.4357 63.4701 40.4745 63.6817 39.4982L58.8696 37.7873C59.0721 36.7233 59.1991 35.6291 59.2777 34.5228L64.389 34.1087ZM32.249 55.1496C19.8076 55.1496 9.72097 45.0629 9.72097 32.6186C9.72097 20.1742 19.8076 10.0876 32.249 10.0876C44.6933 10.0876 54.7799 20.1742 54.7799 32.6186C54.7799 45.0629 44.6933 55.1496 32.249 55.1496Z"
                fill="#D9D9D9"
              />
              <path
                d="M32.2497 10.0887C19.8084 10.0887 9.72174 20.1753 9.72174 32.6197C9.72174 45.064 19.8084 55.1507 32.2497 55.1507C44.6941 55.1507 54.7807 45.064 54.7807 32.6197C54.7807 20.1753 44.6941 10.0887 32.2497 10.0887ZM32.2497 53.8177C20.5429 53.8177 11.0547 44.3265 11.0547 32.6197C11.0547 20.9129 20.5429 11.4217 32.2497 11.4217C43.9565 11.4217 53.4507 20.9129 53.4507 32.6197C53.4507 44.3265 43.9565 53.8177 32.2497 53.8177Z"
                fill="#8B8B8B"
              />
              <path
                d="M26.4534 32.6178C26.4534 35.8219 29.0499 38.4153 32.2509 38.4153C35.4519 38.4153 38.0484 35.8219 38.0484 32.6178C38.0484 29.4168 35.4519 26.8203 32.2509 26.8203C29.0529 26.8203 26.4534 29.4168 26.4534 32.6178ZM36.7607 32.6178C36.7607 35.1085 34.7416 37.1246 32.2509 37.1246C29.7632 37.1246 27.744 35.1085 27.744 32.6178C27.744 30.1302 29.7632 28.111 32.2509 28.111C34.7416 28.111 36.7607 30.1302 36.7607 32.6178Z"
                fill="#8B8B8B"
              />
            </svg>

            <svg
              width="53"
              height="54"
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearSeven}
            >
              <path
                d="M52.5344 28.4647C52.5556 28.0657 52.5677 27.6636 52.5677 27.2586C52.5677 26.8566 52.5556 26.4546 52.5344 26.0556L48.4055 25.7261C48.345 24.8344 48.2392 23.9518 48.076 23.0903L51.9662 21.706C51.7939 20.917 51.5883 20.1402 51.3465 19.3785L47.272 20.1281C46.9818 19.2848 46.6402 18.4687 46.2503 17.6767L49.6599 15.3281C49.2911 14.6118 48.886 13.9165 48.4538 13.2425L44.7359 15.0077C44.2372 14.2732 43.681 13.578 43.1007 12.913L45.7848 9.76036C45.2437 9.16792 44.6755 8.59663 44.08 8.0586L40.9304 10.7427C40.2563 10.1624 39.5672 9.60621 38.8326 9.10747L40.6009 5.38958C39.9208 4.95734 39.2256 4.55533 38.5123 4.18354L36.1636 7.59009C35.3717 7.20319 34.5586 6.86162 33.7122 6.57144L34.4619 2.49688C33.7002 2.25507 32.9203 2.04953 32.1314 1.87724L30.747 5.76742C29.8856 5.60117 29.006 5.49839 28.1112 5.43794L27.7818 1.30898C27.3798 1.29084 26.9808 1.27875 26.5757 1.27875C26.1737 1.27875 25.7717 1.29084 25.3727 1.30898L25.0432 5.43794C24.1515 5.50142 23.2689 5.60117 22.4105 5.76742L21.0231 1.87724C20.2342 2.04953 19.4574 2.25507 18.6957 2.49688L19.4452 6.57144C18.6019 6.86162 17.7858 7.20319 16.9939 7.59009L14.6452 4.18354C13.9289 4.55533 13.2306 4.95734 12.5596 5.38958L14.3248 9.10747C13.5873 9.60621 12.8951 10.1624 12.2301 10.7427L9.07749 8.0586C8.48505 8.59966 7.91378 9.16792 7.37272 9.76036L10.0569 12.913C9.4765 13.581 8.92033 14.2732 8.42159 15.0077L4.70367 13.2425C4.2684 13.9165 3.86945 14.6118 3.49766 15.3281L6.90421 17.6767C6.52033 18.4687 6.17875 19.2848 5.88555 20.1281L1.81401 19.3785C1.5722 20.1402 1.36665 20.917 1.19436 21.706L5.0815 23.0903C4.91223 23.9518 4.8125 24.8344 4.75205 25.7261L0.623091 26.0556C0.604955 26.4576 0.592834 26.8566 0.592834 27.2586C0.592834 27.6636 0.604955 28.0657 0.623091 28.4647L4.75205 28.7971C4.81553 29.6888 4.91526 30.5715 5.0815 31.4329L1.19436 32.8143C1.36665 33.6032 1.5722 34.383 1.81401 35.1448L5.88555 34.3951C6.17875 35.2354 6.52033 36.0516 6.90421 36.8465L3.49766 39.1951C3.86945 39.9115 4.27143 40.6067 4.70367 41.2808L8.42159 39.5155C8.92033 40.2531 9.4765 40.9453 10.0569 41.6133L7.36363 44.7659C7.90469 45.3584 8.47294 45.9266 9.06841 46.4677L12.221 43.7836C12.8891 44.3639 13.5783 44.9201 14.3158 45.4188L12.5505 49.1337C13.2246 49.5689 13.9198 49.9679 14.6362 50.3397L16.9848 46.9302C17.7798 47.3171 18.5929 47.6586 19.4362 47.9518L18.6866 52.0264C19.4483 52.2682 20.2251 52.4707 21.014 52.646L22.4014 48.7558C23.2599 48.9221 24.1425 49.0249 25.0342 49.0853L25.3636 53.2143C25.7657 53.2324 26.1677 53.2445 26.5667 53.2445C26.9747 53.2445 27.3737 53.2324 27.7727 53.2143L28.1022 49.0853C28.9969 49.0218 29.8765 48.9221 30.738 48.7558L32.1223 52.646C32.9112 52.4707 33.6911 52.2682 34.4528 52.0234L33.7032 47.9518C34.5465 47.6586 35.3626 47.3201 36.1546 46.9302L38.5032 50.3397C39.2165 49.9679 39.9148 49.5659 40.5918 49.1337L38.8236 45.4188C39.5581 44.9201 40.2503 44.3639 40.9213 43.7836L44.0709 46.4677C44.6634 45.9266 45.2347 45.3584 45.7758 44.7659L43.0916 41.6133C43.672 40.9453 44.2281 40.2531 44.7269 39.5155L48.4448 41.2808C48.877 40.6037 49.282 39.9115 49.6508 39.1951L46.2412 36.8465C46.6311 36.0546 46.9727 35.2385 47.2629 34.3951L51.3375 35.1448C51.5793 34.383 51.7848 33.6062 51.9571 32.8143L48.0669 31.4329C48.2332 30.5715 48.3389 29.6888 48.3964 28.7971L52.5344 28.4647ZM26.5727 30.9493C24.5354 30.9493 22.8881 29.2959 22.8881 27.2586C22.8881 25.2244 24.5354 23.5709 26.5727 23.5709C28.61 23.5709 30.2634 25.2213 30.2634 27.2586C30.2604 29.2959 28.61 30.9493 26.5727 30.9493Z"
                fill="black"
              />
              <path
                d="M52.1126 28.0874C52.1307 27.6884 52.1428 27.2864 52.1428 26.8813C52.1428 26.4763 52.1307 26.0773 52.1126 25.6783L47.9806 25.3489C47.9201 24.4541 47.8143 23.5745 47.6511 22.7131L51.5413 21.3287C51.369 20.5398 51.1635 19.763 50.9216 19.0013L46.8471 19.7509C46.5569 18.9075 46.2153 18.0914 45.8254 17.2995L49.235 14.9478C48.8662 14.2345 48.4612 13.5363 48.0259 12.8652L44.3111 14.6305C43.8123 13.8929 43.2561 13.2007 42.6788 12.5327L45.3599 9.38008C44.8189 8.78764 44.2506 8.21938 43.6551 7.67832L40.5025 10.3625C39.8314 9.7821 39.1423 9.22291 38.4078 8.72417L40.173 5.0093C39.4959 4.57706 38.8037 4.17203 38.0874 3.80326L35.7387 7.20981C34.9468 6.82291 34.1337 6.48134 33.2874 6.19116L34.037 2.1166C33.2753 1.87479 32.4954 1.66925 31.7065 1.49696L30.3221 5.38714C29.4607 5.22089 28.5811 5.11811 27.6864 5.05766L27.3569 0.928701C26.9579 0.910565 26.5559 0.898468 26.1508 0.898468C25.7488 0.898468 25.3468 0.910565 24.9478 0.928701L24.6184 5.05766C23.7267 5.12114 22.844 5.22089 21.9826 5.38714L20.5982 1.49696C19.8093 1.66925 19.0325 1.87479 18.2707 2.1166L19.0204 6.19116C18.177 6.48134 17.3609 6.82291 16.566 7.20981L14.2173 3.80326C13.501 4.17505 12.8027 4.57706 12.1317 5.0093L13.8969 8.72417C13.1594 9.22291 12.4672 9.77908 11.8022 10.3625L8.64958 7.67832C8.05714 8.21938 7.48587 8.78764 6.94481 9.38008L9.63194 12.5327C9.05159 13.2007 8.49239 13.8929 7.99668 14.6305L4.2818 12.8652C3.84654 13.5393 3.44756 14.2345 3.07275 14.9478L6.4793 17.2995C6.09542 18.0914 5.75384 18.9075 5.46064 19.7509L1.3891 19.0013C1.14729 19.763 0.941788 20.5398 0.769496 21.3287L4.65664 22.7131C4.48737 23.5745 4.38762 24.4541 4.32414 25.3489L0.198179 25.6783C0.180043 26.0773 0.167969 26.4793 0.167969 26.8813C0.167969 27.2834 0.180043 27.6884 0.198179 28.0874L4.32414 28.4169C4.38762 29.3116 4.49039 30.1912 4.65664 31.0526L0.769496 32.437C0.941788 33.2259 1.14729 34.0058 1.3891 34.7645L5.46064 34.0179C5.75384 34.8582 6.09542 35.6743 6.4793 36.4693L3.07275 38.8179C3.44454 39.5343 3.84654 40.2295 4.2818 40.9035L7.99668 39.1383C8.49239 39.8758 9.05159 40.568 9.63194 41.236L6.94481 44.3887C7.48889 44.9811 8.05714 45.5494 8.64958 46.0904L11.8022 43.4063C12.4702 43.9897 13.1594 44.5428 13.8969 45.0446L12.1317 48.7594C12.8057 49.1947 13.501 49.5937 14.2173 49.9655L16.566 46.5559C17.3609 46.9428 18.174 47.2844 19.0204 47.5746L18.2707 51.6491C19.0325 51.8909 19.8093 52.0965 20.5982 52.2688L21.9826 48.3786C22.844 48.5448 23.7267 48.6476 24.6184 48.7081L24.9478 52.837C25.3498 52.8552 25.7518 52.8673 26.1508 52.8673C26.5589 52.8673 26.9609 52.8552 27.3569 52.837L27.6864 48.7081C28.5811 48.6446 29.4607 48.5418 30.3221 48.3786L31.7065 52.2688C32.4954 52.0965 33.2753 51.8909 34.037 51.6491L33.2874 47.5746C34.1307 47.2844 34.9468 46.9428 35.7387 46.5559L38.0874 49.9655C38.8037 49.5937 39.499 49.1917 40.173 48.7594L38.4078 45.0446C39.1423 44.5458 39.8345 43.9897 40.5025 43.4063L43.6551 46.0904C44.2476 45.5494 44.8189 44.9811 45.3599 44.3887L42.6788 41.236C43.2561 40.568 43.8123 39.8758 44.3111 39.1383L48.0259 40.9035C48.4612 40.2264 48.8632 39.5312 49.235 38.8179L45.8254 36.4693C46.2153 35.6743 46.5569 34.8612 46.8471 34.0179L50.9216 34.7645C51.1635 34.0058 51.369 33.2259 51.5413 32.437L47.6511 31.0526C47.8174 30.1912 47.9231 29.3116 47.9806 28.4169L52.1126 28.0874ZM26.1478 30.569C24.1106 30.569 22.4632 28.9186 22.4632 26.8813C22.4632 24.8441 24.1106 23.1937 26.1478 23.1937C28.1851 23.1937 29.8385 24.8441 29.8385 26.8813C29.8385 28.9186 28.1851 30.569 26.1478 30.569Z"
                fill="#D9D9D9"
              />
              <path
                d="M26.1476 8.68182C16.1002 8.68182 7.94809 16.8309 7.94809 26.8813C7.94809 36.9347 16.1002 45.0808 26.1476 45.0808C36.201 45.0808 44.3471 36.9317 44.3471 26.8813C44.3501 16.8309 36.201 8.68182 26.1476 8.68182ZM26.1476 30.569C24.1103 30.569 22.4629 28.9186 22.4629 26.8813C22.4629 24.844 24.1103 23.1937 26.1476 23.1937C28.1849 23.1937 29.8382 24.844 29.8382 26.8813C29.8382 28.9186 28.1849 30.569 26.1476 30.569Z"
                fill="#8B8B8B"
              />
              <path
                d="M26.1499 9.75716C16.698 9.75716 9.02951 17.4257 9.02951 26.8806C9.02951 36.3385 16.698 44.004 26.1499 44.004C35.6079 44.004 43.2764 36.3385 43.2764 26.8806C43.2764 17.4257 35.6079 9.75716 26.1499 9.75716ZM26.1499 30.5683C24.1126 30.5683 22.4653 28.9179 22.4653 26.8806C22.4653 24.8433 24.1126 23.1929 26.1499 23.1929C28.1872 23.1929 29.8406 24.8433 29.8406 26.8806C29.8406 28.9179 28.1872 30.5683 26.1499 30.5683Z"
                fill="#D9D9D9"
              />
              <path
                d="M26.1502 18.4737C21.5074 18.4737 17.7442 22.2399 17.7442 26.8827C17.7442 31.5286 21.5074 35.2918 26.1502 35.2918C30.7961 35.2918 34.5623 31.5256 34.5623 26.8827C34.5623 22.2399 30.7961 18.4737 26.1502 18.4737ZM26.1502 30.5704C24.113 30.5704 22.4656 28.92 22.4656 26.8827C22.4656 24.8455 24.113 23.1951 26.1502 23.1951C28.1875 23.1951 29.8409 24.8455 29.8409 26.8827C29.8409 28.92 28.1875 30.5704 26.1502 30.5704Z"
                fill="#8B8B8B"
              />
              <path
                d="M26.1481 19.4835C22.0614 19.4835 18.7516 22.7963 18.7516 26.883C18.7516 30.9726 22.0645 34.2855 26.1481 34.2855C30.2408 34.2855 33.5506 30.9726 33.5506 26.883C33.5506 22.7963 30.2408 19.4835 26.1481 19.4835ZM26.1481 30.5706C24.1108 30.5706 22.4634 28.9202 22.4634 26.883C22.4634 24.8457 24.1108 23.1953 26.1481 23.1953C28.1854 23.1953 29.8387 24.8457 29.8387 26.883C29.8387 28.9202 28.1854 30.5706 26.1481 30.5706Z"
                fill="#D9D9D9"
              />
            </svg>

            <svg
              width="97"
              height="98"
              viewBox="0 0 97 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.gearEight}
            >
              <path
                d="M96.4363 51.5111C96.4695 50.7736 96.4968 50.033 96.4968 49.2894C96.4968 48.5459 96.4695 47.8083 96.4363 47.0708L88.8192 46.4602C88.7074 44.8129 88.5169 43.1897 88.2116 41.5998L95.3844 39.0486C95.067 37.5947 94.6892 36.159 94.2388 34.7564L86.7305 36.1378C86.1955 34.5841 85.5638 33.0789 84.8504 31.6189L91.1345 27.2844C90.4484 25.9635 89.7048 24.6819 88.9099 23.4365L82.0544 26.695C81.1386 25.3378 80.1109 24.0592 79.0408 22.829L83.992 17.0164C82.9915 15.9222 81.9426 14.8763 80.8454 13.8758L75.0358 18.8239C73.8025 17.7509 72.527 16.7232 71.1698 15.8073L74.4283 8.94887C73.1799 8.15088 71.8982 7.40732 70.5804 6.72722L66.2459 13.0113C64.7829 12.298 63.2806 11.6663 61.73 11.1312L63.1053 3.62293C61.7058 3.17255 60.267 2.79471 58.8131 2.47733L56.262 9.65014C54.6751 9.34485 53.0489 9.15442 51.4016 9.03956L50.7909 1.42242C50.0534 1.38917 49.3159 1.36801 48.5723 1.36801C47.8227 1.36801 47.0851 1.38917 46.3476 1.42242L45.7401 9.03956C44.0927 9.15442 42.4665 9.34485 40.8796 9.65014L38.3255 2.47733C36.8746 2.79471 35.4388 3.17255 34.0333 3.61991L35.4146 11.1312C33.858 11.6663 32.3557 12.298 30.8927 13.0113L26.5582 6.72419C25.2403 7.40732 23.9617 8.15088 22.7164 8.94887L25.9688 15.8073C24.6116 16.7232 23.336 17.7509 22.1028 18.8239L16.2872 13.8698C15.193 14.8703 14.1441 15.9161 13.1496 17.0103L18.0977 22.8229C17.0247 24.0532 16.003 25.3318 15.0811 26.6889L8.22568 23.4305C7.4277 24.6758 6.68414 25.9574 6.00102 27.2784L12.2882 31.6129C11.5748 33.0728 10.9431 34.5781 10.4081 36.1317L2.89671 34.7504C2.45238 36.1559 2.07153 37.5887 1.75113 39.0426L8.92393 41.5937C8.61562 43.1836 8.4282 44.8068 8.31636 46.4542L0.699261 47.0648C0.666011 47.8023 0.644836 48.5398 0.644836 49.2834C0.644836 50.027 0.666011 50.7705 0.699261 51.5051L8.31636 52.1156C8.4282 53.763 8.61864 55.3922 8.92393 56.9761L1.75113 59.5303C2.06851 60.9842 2.45238 62.4199 2.89671 63.8224L10.4081 62.4441C10.9431 63.9947 11.5748 65.497 12.2882 66.96L6.00102 71.2945C6.68717 72.6154 7.43072 73.897 8.22568 75.1393L15.0811 71.8839C16.003 73.2441 17.0247 74.5167 18.0977 75.7499L13.1496 81.5625C14.1441 82.6567 15.193 83.7086 16.2872 84.7061L22.0998 79.7549C23.333 80.828 24.6086 81.8527 25.9657 82.7746L22.7133 89.627C23.9557 90.428 25.2403 91.1716 26.5552 91.8517L30.8897 85.5706C32.3526 86.2809 33.8549 86.9126 35.4116 87.4507L34.0302 94.959C35.4358 95.4063 36.8685 95.7842 38.3224 96.1016L40.8766 88.9318C42.4635 89.2371 44.0897 89.4245 45.737 89.5423L46.3446 97.1565C47.0821 97.1867 47.8197 97.2139 48.5693 97.2139C49.3129 97.2139 50.0504 97.1897 50.7879 97.1565L51.3985 89.5423C53.0459 89.4275 54.6721 89.2371 56.259 88.9318L58.8101 96.1016C60.264 95.7842 61.7028 95.4063 63.1023 94.959L61.727 87.4507C63.2776 86.9126 64.7799 86.2809 66.2428 85.5706L70.5774 91.8517C71.8983 91.1685 73.1768 90.425 74.4252 89.627L71.1668 82.7746C72.5239 81.8527 73.7995 80.828 75.0328 79.7549L80.8423 84.7061C81.9396 83.7086 82.9884 82.6597 83.9889 81.5625L79.0378 75.7499C80.1109 74.5167 81.1356 73.2411 82.0514 71.8839L88.9068 75.1393C89.7048 73.897 90.4484 72.6154 91.1315 71.2945L84.8474 66.96C85.5607 65.497 86.1925 63.9947 86.7275 62.4441L94.2358 63.8224C94.6832 62.4199 95.061 60.9842 95.3814 59.5303L88.2086 56.9761C88.5169 55.3922 88.7043 53.763 88.8161 52.1156L96.4363 51.5111ZM48.5693 42.4884C52.3234 42.4884 55.3703 45.5323 55.3703 49.2894C55.3703 53.0466 52.3234 56.0905 48.5693 56.0905C44.8151 56.0905 41.7683 53.0466 41.7683 49.2894C41.7683 45.5323 44.8151 42.4884 48.5693 42.4884ZM48.5663 31.6673C45.4529 31.6673 42.932 29.1403 42.932 26.03C42.932 22.9166 45.4529 20.3927 48.5663 20.3927C51.6796 20.3927 54.2035 22.9166 54.2035 26.03C54.2066 29.1433 51.6827 31.6673 48.5663 31.6673ZM31.2463 32.7796C33.9426 34.3363 34.8645 37.7852 33.3109 40.4814C31.7512 43.1776 28.3053 44.1025 25.606 42.5428C22.9128 40.9892 21.9879 37.5403 23.5446 34.8441C25.1013 32.1479 28.5501 31.2229 31.2463 32.7796ZM25.6121 56.0391C28.3053 54.4794 31.7512 55.4073 33.3109 58.1005C34.8675 60.7998 33.9426 64.2456 31.2463 65.8053C28.5501 67.362 25.1043 66.4371 23.5446 63.7408C21.9879 61.0416 22.9128 57.5927 25.6121 56.0391ZM48.5663 66.9116C51.6796 66.9116 54.2035 69.4386 54.2035 72.5489C54.2035 75.6623 51.6796 78.1862 48.5663 78.1862C45.4529 78.1862 42.932 75.6653 42.932 72.5489C42.932 69.4355 45.4529 66.9116 48.5663 66.9116ZM65.8922 65.7993C63.193 64.2426 62.2741 60.7968 63.8277 58.1005C65.3844 55.4043 68.8303 54.4794 71.5295 56.036C74.2288 57.5897 75.1476 61.0386 73.591 63.7348C72.0373 66.431 68.5854 67.359 65.8922 65.7993ZM71.5295 42.5428C68.8333 44.1025 65.3844 43.1776 63.8277 40.4784C62.2711 37.7821 63.193 34.3363 65.8922 32.7766C68.5915 31.2199 72.0373 32.1449 73.594 34.8411C75.1476 37.5403 74.2288 40.9862 71.5295 42.5428Z"
                fill="black"
              />
              <path
                d="M96.0189 50.8913C96.0551 50.1568 96.0763 49.4163 96.0763 48.6697C96.0763 47.9261 96.0551 47.1856 96.0189 46.448L88.4018 45.8405C88.2899 44.1901 88.0995 42.5669 87.7942 40.98L94.967 38.4258C94.6496 36.9719 94.2718 35.5362 93.8214 34.1337L86.3131 35.512C85.775 33.9583 85.1433 32.4561 84.43 30.9961L90.7171 26.6616C90.034 25.3407 89.2904 24.0591 88.4925 22.8138L81.637 26.0722C80.7181 24.715 79.6934 23.4394 78.6204 22.2032L83.5715 16.3936C82.571 15.2994 81.5252 14.2505 80.428 13.2531L74.6184 18.1981C73.3852 17.1281 72.1096 16.1004 70.7524 15.1815L74.0078 8.32912C72.7655 7.53113 71.4808 6.78755 70.1629 6.10443L65.8285 12.3855C64.3655 11.6752 62.8663 11.0435 61.3096 10.5054L62.6879 2.99713C61.2884 2.55279 59.8526 2.17496 58.3957 1.85456L55.8446 9.02433C54.2576 8.72206 52.6315 8.53164 50.9841 8.41375L50.3735 0.79964C49.636 0.766391 48.8985 0.742218 48.1519 0.742218C47.4053 0.742218 46.6677 0.766391 45.9332 0.79964L45.3227 8.41375C43.6753 8.53164 42.0461 8.72206 40.4622 9.02433L37.9081 1.85456C36.4572 2.17194 35.0214 2.54977 33.6159 2.99713L34.9942 10.5054C33.4436 11.0435 31.9383 11.6752 30.4753 12.3855L26.1408 6.10141C24.8229 6.78453 23.5413 7.53113 22.299 8.32912L25.5514 15.1815C24.1942 16.1004 22.9186 17.1251 21.6854 18.1981L15.8758 13.2531C14.7816 14.2505 13.7327 15.2994 12.7322 16.3936L17.6833 22.2032C16.6103 23.4394 15.5856 24.712 14.6667 26.0722L7.81131 22.8138C7.01031 24.0591 6.26973 25.3407 5.58661 26.6616L11.8738 30.9961C11.1604 32.4561 10.5287 33.9583 9.99064 35.512L2.48234 34.1337C2.03499 35.5362 1.65714 36.9719 1.33976 38.4258L8.50956 40.98C8.20125 42.5669 8.01383 44.1931 7.90199 45.8405L0.284847 46.448C0.248575 47.1856 0.230469 47.9261 0.230469 48.6697C0.230469 49.4163 0.251598 50.1568 0.284847 50.8913L7.90199 51.5049C8.01383 53.1523 8.20427 54.7785 8.50956 56.3624L1.33976 58.9165C1.65714 60.3735 2.03499 61.8032 2.48234 63.2087L9.99064 61.8274C10.5287 63.381 11.1604 64.8863 11.8738 66.3463L5.58661 70.6808C6.27275 71.9986 7.01333 73.2833 7.81131 74.5256L14.6667 71.2702C15.5856 72.6274 16.6103 73.9029 17.6833 75.1362L12.7322 80.9458C13.7327 82.043 14.7816 83.0888 15.8758 84.0893L21.6854 79.1382C22.9186 80.2113 24.1942 81.239 25.5514 82.1548L22.299 89.0102C23.5383 89.8082 24.8259 90.5548 26.1408 91.2349L30.4753 84.9538C31.9383 85.6641 33.4436 86.2959 34.9942 86.8309L33.6159 94.3422C35.0214 94.7896 36.4541 95.1644 37.9081 95.4848L40.4622 88.315C42.0461 88.6233 43.6753 88.8108 45.3227 88.9226L45.9332 96.5397C46.6677 96.573 47.4053 96.5941 48.1519 96.5941C48.8985 96.5941 49.636 96.573 50.3735 96.5397L50.9841 88.9226C52.6315 88.8108 54.2576 88.6203 55.8446 88.315L58.3957 95.4848C59.8526 95.1674 61.2884 94.7896 62.6879 94.3422L61.3096 86.8309C62.8663 86.2989 64.3655 85.6641 65.8285 84.9538L70.1629 91.2349C71.4838 90.5518 72.7655 89.8082 74.0078 89.0102L70.7524 82.1548C72.1096 81.239 73.3852 80.2113 74.6184 79.1382L80.428 84.0893C81.5252 83.0888 82.571 82.043 83.5715 80.9458L78.6204 75.1362C79.6934 73.9029 80.7181 72.6274 81.637 71.2702L88.4925 74.5256C89.2935 73.2833 90.037 71.9986 90.7171 70.6808L84.43 66.3463C85.1433 64.8863 85.775 63.381 86.3131 61.8274L93.8214 63.2087C94.2688 61.8032 94.6466 60.3735 94.967 58.9165L87.7942 56.3624C88.1025 54.7785 88.2899 53.1523 88.4018 51.5049L96.0189 50.8913ZM23.1272 34.2243C24.6839 31.5281 28.1327 30.6032 30.8289 32.1568C33.5251 33.7165 34.4441 37.1654 32.8935 39.8616C31.3338 42.5548 27.8879 43.4767 25.1886 41.9231C22.4954 40.3694 21.5675 36.9206 23.1272 34.2243ZM30.8259 65.1825C28.1297 66.7392 24.6838 65.8143 23.1241 63.1211C21.5644 60.4248 22.4924 56.976 25.1886 55.4193C27.8849 53.8626 31.3307 54.7876 32.8904 57.4838C34.4501 60.18 33.5221 63.6289 30.8259 65.1825ZM48.1489 19.776C51.2622 19.776 53.7892 22.2999 53.7892 25.4133C53.7892 28.5266 51.2622 31.0505 48.1489 31.0505C45.0355 31.0505 42.5146 28.5266 42.5146 25.4133C42.5146 22.2999 45.0355 19.776 48.1489 19.776ZM48.1489 77.5694C45.0355 77.5694 42.5146 75.0425 42.5146 71.9291C42.5146 68.8188 45.0355 66.2919 48.1489 66.2919C51.2622 66.2919 53.7892 68.8158 53.7892 71.9291C53.7892 75.0425 51.2622 77.5694 48.1489 77.5694ZM48.1489 55.4707C44.3947 55.4707 41.3508 52.4299 41.3508 48.6697C41.3508 44.9155 44.3947 41.8717 48.1489 41.8717C51.903 41.8717 54.9499 44.9155 54.9499 48.6697C54.9499 52.4299 51.903 55.4707 48.1489 55.4707ZM73.1705 63.1211C71.6139 65.8173 68.168 66.7422 65.4718 65.1855C62.7756 63.6289 61.8536 60.18 63.4043 57.4838C64.964 54.7876 68.4098 53.8657 71.109 55.4193C73.8083 56.976 74.7302 60.4248 73.1705 63.1211ZM71.1121 41.9261C68.4159 43.4858 64.967 42.5609 63.4134 39.8646C61.8537 37.1684 62.7786 33.7195 65.4748 32.1629C68.174 30.6062 71.6199 31.5281 73.1766 34.2274C74.7302 36.9236 73.8083 40.3694 71.1121 41.9261Z"
                fill="#D9D9D9"
              />
              <path
                d="M48.1519 15.1113C29.6169 15.1113 14.5942 30.137 14.5942 48.672C14.5942 67.21 29.62 82.2357 48.1519 82.2357C66.687 82.2357 81.7157 67.21 81.7157 48.672C81.7127 30.137 66.687 15.1113 48.1519 15.1113ZM65.4749 32.1591C68.1741 30.6025 71.6199 31.5244 73.1766 34.2236C74.7333 36.9198 73.8114 40.3687 71.1121 41.9254C68.4159 43.4851 64.9671 42.5601 63.4134 39.8639C61.8567 37.1677 62.7817 33.7188 65.4749 32.1591ZM48.1519 19.7752C51.2653 19.7752 53.7922 22.2992 53.7922 25.4125C53.7922 28.5259 51.2653 31.0498 48.1519 31.0498C45.0386 31.0498 42.5177 28.5259 42.5177 25.4125C42.5177 22.2992 45.0386 19.7752 48.1519 19.7752ZM23.1303 34.2236C24.687 31.5274 28.1358 30.6025 30.832 32.1561C33.5282 33.7158 34.4472 37.1647 32.8965 39.8609C31.3368 42.5541 27.891 43.476 25.1917 41.9224C22.4985 40.3687 21.5706 36.9198 23.1303 34.2236ZM30.829 65.1818C28.1328 66.7385 24.6869 65.8136 23.1272 63.1204C21.5675 60.4241 22.4955 56.9753 25.1917 55.4186C27.8879 53.8619 31.3338 54.7869 32.8935 57.4831C34.4532 60.1793 33.5252 63.6282 30.829 65.1818ZM48.1519 77.5687C45.0386 77.5687 42.5177 75.0418 42.5177 71.9284C42.5177 68.8181 45.0386 66.2911 48.1519 66.2911C51.2653 66.2911 53.7922 68.8151 53.7922 71.9284C53.7922 75.0418 51.2653 77.5687 48.1519 77.5687ZM48.1519 55.47C44.3978 55.47 41.3539 52.4292 41.3539 48.669C41.3539 44.9148 44.3978 41.871 48.1519 41.871C51.9061 41.871 54.953 44.9148 54.953 48.669C54.953 52.4292 51.9061 55.47 48.1519 55.47ZM73.1736 63.1204C71.6169 65.8166 68.1711 66.7415 65.4749 65.1848C62.7787 63.6282 61.8567 60.1793 63.4074 57.4831C64.9671 54.7869 68.4129 53.8649 71.1121 55.4186C73.8114 56.9753 74.7333 60.4241 73.1736 63.1204Z"
                fill="#8B8B8B"
              />
              <path
                d="M48.1472 17.0989C30.7124 17.0989 16.5784 31.2389 16.5784 48.6707C16.5784 66.1085 30.7124 80.2455 48.1472 80.2455C65.585 80.2455 79.722 66.1085 79.722 48.6707C79.722 31.2389 65.5819 17.0989 48.1472 17.0989ZM65.4701 32.1608C68.1694 30.6042 71.6152 31.5261 73.1718 34.2253C74.7285 36.9216 73.8066 40.3704 71.1074 41.9271C68.4111 43.4868 64.9623 42.5618 63.4086 39.8656C61.852 37.1694 62.7769 33.7205 65.4701 32.1608ZM48.1472 19.777C51.2605 19.777 53.7875 22.3009 53.7875 25.4142C53.7875 28.5276 51.2605 31.0515 48.1472 31.0515C45.0338 31.0515 42.5129 28.5276 42.5129 25.4142C42.5129 22.3009 45.0338 19.777 48.1472 19.777ZM23.1255 34.2253C24.6822 31.5291 28.131 30.6042 30.8272 32.1578C33.5235 33.7175 34.4424 37.1664 32.8918 39.8626C31.3321 42.5558 27.8862 43.4777 25.1869 41.9241C22.4937 40.3704 21.5658 36.9216 23.1255 34.2253ZM30.8242 65.1835C28.128 66.7402 24.6822 65.8153 23.1225 63.1221C21.5628 60.4258 22.4907 56.977 25.1869 55.4203C27.8832 53.8636 31.329 54.7886 32.8887 57.4848C34.4484 60.181 33.5205 63.6299 30.8242 65.1835ZM48.1472 77.5704C45.0338 77.5704 42.5129 75.0435 42.5129 71.9301C42.5129 68.8198 45.0338 66.2929 48.1472 66.2929C51.2605 66.2929 53.7875 68.8168 53.7875 71.9301C53.7875 75.0435 51.2605 77.5704 48.1472 77.5704ZM48.1472 55.4717C44.393 55.4717 41.3492 52.4309 41.3492 48.6707C41.3492 44.9165 44.393 41.8727 48.1472 41.8727C51.9013 41.8727 54.9482 44.9165 54.9482 48.6707C54.9482 52.4309 51.9013 55.4717 48.1472 55.4717ZM73.1688 63.1221C71.6122 65.8183 68.1663 66.7432 65.4701 65.1865C62.7739 63.6299 61.852 60.181 63.4026 57.4848C64.9623 54.7886 68.4081 53.8666 71.1074 55.4203C73.8066 56.977 74.7285 60.4258 73.1688 63.1221Z"
                fill="#D9D9D9"
              />
              <path
                d="M48.1472 33.1622C39.584 33.1622 32.6409 40.1052 32.6409 48.6685C32.6409 57.2347 39.584 64.1778 48.1472 64.1778C56.7104 64.1778 63.6535 57.2347 63.6535 48.6685C63.6535 40.1052 56.7104 33.1622 48.1472 33.1622ZM48.1472 55.4695C44.3931 55.4695 41.3492 52.4287 41.3492 48.6685C41.3492 44.9143 44.3931 41.8705 48.1472 41.8705C51.9014 41.8705 54.9482 44.9143 54.9482 48.6685C54.9482 52.4287 51.9014 55.4695 48.1472 55.4695Z"
                fill="#8B8B8B"
              />
              <path
                d="M48.1487 35.025C40.6132 35.025 34.5014 41.1338 34.5014 48.6724C34.5014 56.2079 40.6102 62.3228 48.1487 62.3228C55.6842 62.3228 61.7961 56.2109 61.7961 48.6724C61.7931 41.1338 55.6842 35.025 48.1487 35.025ZM48.1487 55.4704C44.3946 55.4704 41.3507 52.4296 41.3507 48.6694C41.3507 44.9152 44.3946 41.8714 48.1487 41.8714C51.9029 41.8714 54.9497 44.9152 54.9497 48.6694C54.9497 52.4296 51.9029 55.4704 48.1487 55.4704Z"
                fill="#D9D9D9"
              />
            </svg>

            {/* <img
              className={styles.thirdGearArc}
              src={thirdGearArc}
              alt="third arc"
            /> */}
            {/* <svg
              width="47"
              height="164"
              viewBox="0 0 47 164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.thirdGearArc}
            >
              <path
                d="M10.8369 0.895894L8.42714 7.6552C13.7027 15.9521 17.4283 20.3362 22.9314 45.8823L27.2036 47.7329C33.679 77.8958 25.5403 128.414 5.15649 154.656L11.8717 155.012C21.3069 144.844 27.7986 123.124 33.1852 109.107L38.4562 108.071C42.5377 96.912 42.6621 81.8094 42.2279 67.5576L36.3081 65.4406C34.3127 36.8069 22.1617 9.81269 10.8369 0.895894Z"
                fill="white"
                stroke="black"
              />
            </svg> */}

            <svg
              width="327"
              height="310"
              viewBox="0 0 327 310"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.thirdGearArc}
            >
              <path
                d="M278.185 78.1107L275.775 84.87C281.05 93.1669 284.776 97.5511 290.279 123.097L294.551 124.948C301.027 155.111 292.888 205.629 272.504 231.871L279.219 232.227C288.655 222.059 295.146 200.339 300.533 186.322L305.804 185.286C309.885 174.127 310.01 159.024 309.576 144.772L303.656 142.655C301.66 114.022 289.509 87.0275 278.185 78.1107Z"
                fill="white"
              />
            </svg>

            {/* <img
              className={styles.firstArrow}
              src={firstArrow}
              alt="first gear"
            /> */}
            <svg
              width="35"
              height="97"
              viewBox="0 0 35 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.firstArrow}
            >
              <path
                d="M0.808594 1.28909C27.2207 27.7012 33.8237 34.3042 33.8237 34.3042V96.7594"
                stroke="white"
                stroke-width="1.62369"
              />
            </svg>

            {/* <img
              className={styles.thirdCircle}
              src={thirdCircle}
              alt="first gear"
            /> */}
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.thirdCircle}
            >
              <path
                d="M8.0681 31.3128C7.57083 22.8083 14.062 15.5109 22.5665 15.0137C31.071 14.5164 38.3684 21.0076 38.8657 29.5121"
                stroke="white"
                stroke-width="1.62369"
              />
              <circle
                cx="23.7446"
                cy="32.9999"
                r="10.2834"
                transform="rotate(-127.73 23.7446 32.9999)"
                stroke="white"
                stroke-width="1.08246"
              />
            </svg>

            {/* <img
              className={styles.secondArrow}
              src={secondArrow}
              alt="second arc"
            /> */}
            <svg
              width="86"
              height="238"
              viewBox="0 0 86 238"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.secondArrow}
            >
              <path
                // d="M1.65234 237.285L1.65234 63.2852L85.1523 0.785187"
                d="M85.1523 0.785187L1.65234 63.2852L1.65234 237.285"
                stroke="white"
                stroke-width="1.62"
              />
            </svg>

            {/* <img
              className={styles.fourthCircle}
              src={fourthCircle}
              alt="second arc"
            /> */}
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.fourthCircle}
            >
              <path
                d="M8.44307 31.764C7.9458 23.2595 14.437 15.9621 22.9415 15.4649C31.446 14.9676 38.7434 21.4587 39.2406 29.9633"
                stroke="white"
                stroke-width="1.62369"
              />
              <circle
                cx="24.1196"
                cy="33.451"
                r="10.2834"
                transform="rotate(-127.73 24.1196 33.451)"
                stroke="white"
                stroke-width="1.08246"
              />
            </svg>

            {/* <img
              className={styles.thirdArrow}
              src={thirdArrow}
              alt="third arc"
            /> */}
            <svg
              width="101"
              height="49"
              viewBox="0 0 101 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.thirdArrow}
            >
              <path
                d="M100.652 47.7847L0.519531 1.50003"
                stroke="white"
                stroke-width="1.62369"
              />
            </svg>

            {/* <img
              className={styles.sixCircle}
              src={sixCircle}
              alt="first gear"
            /> */}
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.sixCircle}
            >
              <path
                d="M21.754 0.745187C28.7846 5.55613 30.5839 15.1556 25.773 22.1861C20.962 29.2167 11.3626 31.0161 4.33203 26.2051"
                stroke="white"
                stroke-width="1.62369"
              />
              <circle
                cx="10.8246"
                cy="12.1117"
                r="10.2834"
                stroke="white"
                stroke-width="1.08246"
              />
            </svg>
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
