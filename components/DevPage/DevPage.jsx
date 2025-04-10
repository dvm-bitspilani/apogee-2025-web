import styles from "./devpage.module.scss";
import Preloader from "../Registration/Preloader/Preloader";
import FloatIcon from "./UI/FloatIcon";
import OverlayBackBtn from "./OverlayBackBtn/OverlayBackBtn";
import Verticals from "./Vertical/Verticals.jsx";

import clouds from "../../src/assets/ComingSoon/background.png";
import bg2 from "../../src/assets/Devs/bg2.svg";
import blendOverlay from "../../src/assets/Devs/back.png";
import frontend from "../../src/assets/Verticals/frontend.svg";
import backend from "../../src/assets/Verticals/backend.svg";
import design from "../../src/assets/Verticals/ui-ux.svg";
import video from "../../src/assets/Verticals/video.svg";
import heading from "../../src/assets/Devs/developers.svg";
import bannerImg from "../../src/assets/Devs/banner.svg";
import bannerImg2 from "../../src/assets/Devs/banner2.svg";

import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";

import teamMembers from "./teamMembers.js";

const banners = [
  { name: "FRONTEND", img: frontend, className: styles.banner1 },
  { name: "UI/UX", img: design, className: styles.banner2 },
  { name: "VIDEO", img: video, className: styles.banner3 },
  { name: "BACKEND", img: backend, className: styles.banner4 },
];

const DevPage = () => {
  const [isVerticalOpen, setIsVerticalOpen] = useState(false);
  const [indx, setIndx] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);
  const [team, setteam] = useState([]);

  const grpRef = useRef([]);
  const backgroundRef = useRef([]);
  const floatAnim = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    const imageUrls = [
      frontend,
      design,
      video,
      backend,
      ...Object.values(teamMembers)
        .flat()
        .map((member) => member.image),
      clouds,
      bg2,
      blendOverlay,
      heading,
      bannerImg,
      bannerImg2,
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

  const handleClick = useCallback(() => {
    if (!isVerticalOpen) {
      navigate("/");
    } else {
      setIsVerticalOpen(false);
    }
  }, [navigate, isVerticalOpen]);

  useEffect(() => {
    if (isVerticalOpen) {
      grpRef.current.forEach((el, index) => {
        el.style.animationPlayState = "paused";
        if (index != indx) {
          gsap.set(el, { clearProps: "scale" });
          gsap.to(el, {
            duration: 1,
            opacity: 0,
            scale: 0,
            pointerEvents: "none",
            ease: "power2.out",
          });
        } else {
          gsap.set(el, {
            clear: "all",
          });
          gsap.to(el, {
            duration: 1,
            top: "30%",
            left: "2vw",
            scale: 1.3,
            pointerEvents: "none",
            ease: "power2.out",
          });
        }
      });
    } else {
      grpRef.current.forEach((el, index) => {
        el.style.animationPlayState = "running";
        let top = index === 0 || index == 3 ? "13vw" : "17.8vw";
        let left = index === 0 ? "1vw" : index == 1 ? "25vw" : "auto";
        let right = index === 2 ? "25vw" : index == 3 ? "1vw" : "auto";

        gsap.to(el, {
          duration: 1.5,
          opacity: 1,
          scale: 1,
          top: top,
          left: left,
          right: right,
          pointerEvents: "auto",
          ease: "power2.out",
        });
      });
    }
  }, [isVerticalOpen]);

  useEffect(() => {
    backgroundRef.current.map((el, ind) => {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        ease: "power2.out",
      });
    });

    if (!isVerticalOpen) {
      if (floatAnim.current.length === 0) {
        floatAnim.current = grpRef.current.map((el, index) =>
          gsap.to(el, {
            y: -15,
            duration: 1 + Math.pow(-1, index) * 0.2 + 0.2 * index,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          })
        );
      } else {
        floatAnim.current.forEach((tween) => tween.resume());
      }
    } else {
      floatAnim.current.forEach((tween) => tween.pause());
    }
  }, [isVerticalOpen]);

  useEffect(() => {
    setteam(teamMembers[banners[indx].name]);
  }, [indx]);

  return (
    <>
      {showPreloader && <Preloader />}
      <div className={styles.container}>
        <OverlayBackBtn handleClick={handleClick} />
        {!isVerticalOpen && (
          <img src={heading} alt="heading" className={styles.heading} />
        )}
        <div className={styles.background}>
          <img src={clouds} alt="background image" />
        </div>
        {isVerticalOpen && (
          <>
            <div
              className={styles.background2}
              ref={(el) => {
                backgroundRef.current[0] = el;
              }}
            >
              <img src={bg2} alt="background image" />
              <img
                className={styles.blendOverlay}
                src={blendOverlay}
                alt="background image"
              />
            </div>
            <Verticals
              team={team}
              ref={(el) => {
                backgroundRef.current[1] = el;
              }}
            />
          </>
        )}
        {banners.map((banner, index) => (
          <FloatIcon
            key={index}
            ref={(el) => (grpRef.current[index] = el)}
            banner={isVerticalOpen ? bannerImg2 : bannerImg}
            className={`${banner.className} ${styles.banners}`}
            onClick={() => {
              setIsVerticalOpen(true);
              setIndx(index);
            }}
          >
            <div>
              <img src={banner.img} alt={banner.name} />
            </div>
            <p>{banner.name}</p>
          </FloatIcon>
        ))}
      </div>
    </>
  );
};

export default DevPage;
