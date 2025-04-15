import styles from "./devpage.module.scss";
import Preloader from "../Registration/Preloader/Preloader";
import FloatIcon from "./UI/FloatIcon";
import OverlayBackBtn from "./OverlayBackBtn/OverlayBackBtn";
import Verticals from "./Vertical/Verticals.jsx";

import clouds from "../../src/assets/ComingSoon/background.png";
import bg2 from "../../src/assets/Devs/bg2.svg";
import blendOverlay from "../../src/assets/Devs/back.png";
import blendOverlay2 from "../../src/assets/Devs/back2.png";
import frontend from "../../src/assets/Verticals/frontend.svg";
import backend from "../../src/assets/Verticals/backend.svg";
import design from "../../src/assets/Verticals/figma.png";
import video from "../../src/assets/Verticals/video.svg";
import heading from "../../src/assets/Devs/developers.svg";
import bannerImg from "../../src/assets/Devs/banner.svg";
import bannerImg2 from "../../src/assets/Devs/banner2.svg";
import rightArrow from "../../src/assets/Devs/rightArrow.png";
import leftArrow from "../../src/assets/Devs/leftArrow.png";

import frontend2 from "../../src/assets/Verticals/frontend2.png";
import backend2 from "../../src/assets/Verticals/back2.png";
import design2 from "../../src/assets/Verticals/figma2.png";
import video2 from "../../src/assets/Verticals/video2.png";

import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useGSAP } from "@gsap/react";

import wheel from "../../src/assets/Register/wheel.svg";

import teamMembers from "./teamMembers.js";

const DevPage = () => {
  const [isVerticalOpen, setIsVerticalOpen] = useState(false);
  const [indx, setIndx] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);
  const [team, setteam] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showScrollBar, setShowScrollBar] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const wheelRef = useRef(null);
  const mainContainerRef = useRef(null);
  const grpRef = useRef([]);
  const backgroundRef = useRef([]);
  const floatAnim = useRef([]);

  const { contextSafe } = useGSAP();

  const navigate = useNavigate();
  const switcher = (num) => (num < 0 ? num + 4 : num > 3 ? num - 4 : num);

  const banners = [
    {
      name: "FRONTEND",
      img: isVerticalOpen ? frontend2 : frontend,
      className: styles.banner1,
    },
    {
      name: "UI/UX",
      img: isVerticalOpen ? design2 : design,
      className: styles.banner2,
    },
    {
      name: "VIDEO",
      img: isVerticalOpen ? video2 : video,
      className: styles.banner3,
    },
    {
      name: "BACKEND",
      img: isVerticalOpen ? backend2 : backend,
      className: styles.banner4,
    },
  ];

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      setImageSrc(width < 601 ? blendOverlay2 : blendOverlay);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

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
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  function handleScroll() {
    // const maxScrollTopValue = mainContainerRef.current.scrollTopMax;
    const maxScrollTopValue =
      mainContainerRef.current.scrollHeight -
      mainContainerRef.current.clientHeight;
    // const percentage = (mainContainerRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage =
      (mainContainerRef.current.scrollTop / maxScrollTopValue) * 100;
    percentage > 100
      ? (wheelRef.current.style.top = "100%")
      : (wheelRef.current.style.top = `${percentage}%`);
    // console.log(percentage);
    // // wheelRef.current.style.top = `${percentage}%`;
    // wheelElem.style.top = `${percentage}%`;
  }

  useEffect(() => {
    if (imagesLoaded && mainContainerRef.current) {
      mainContainerRef.current.addEventListener("scroll", handleScroll);

      return () => {
        mainContainerRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, [imagesLoaded]);

  const handlewheelMouseDown = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", handlewheelDragMove);
    document.addEventListener("touchmove", handlewheelDragMove);

    document.addEventListener("mouseup", handlewheelDragEnd);
    document.addEventListener("touchend", handlewheelDragEnd);
  };

  const handlewheelDragMove = (e) => {
    const mainWrapperElement = mainContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );

    const maxScrollTopValue =
      mainWrapperElement.scrollHeight - mainWrapperElement.clientHeight;

    const clientY = e.clientY || e.touches[0].clientY;

    const percentage =
      ((clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;

    mainWrapperElement.scrollTop = (percentage / 100) * maxScrollTopValue;
  };

  const handlewheelDragEnd = () => {
    document.removeEventListener("mousemove", handlewheelDragMove);
    document.removeEventListener("mouseup", handlewheelDragEnd);
    document.removeEventListener("touchmove", handlewheelDragMove);
    document.removeEventListener("touchend", handlewheelDragEnd);
  };

  const handleTrackSnap = (e) => {
    const mainWrapperElement = mainContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );
    const percentage =
      ((e.clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;
    const maxScrollTopValue =
      mainWrapperElement.scrollHeight - mainWrapperElement.clientHeight;

    mainWrapperElement.scrollTo({
      // Smooth scroll to the percentage of the max scroll value
      top: (percentage / 100) * maxScrollTopValue,
      behavior: "smooth",
    });
  };

  const handleClick = useCallback(() => {
    if (!isVerticalOpen) {
      navigate("/");
    } else {
      setIsVerticalOpen(false);
    }
  }, [navigate, isVerticalOpen]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 601px)", () => {
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
    });

    mm.add("(max-width: 600px)", () => {
      if (isVerticalOpen) {
        grpRef.current.forEach((el, index) => {
          el.style.animationPlayState = "paused";
          switch (index) {
            case switcher(indx - 1):
              gsap.set(el, {
                clear: "all",
              });
              gsap.to(el, {
                duration: 1,
                opacity: 0.6,
                scale: 0.9,
                top: "67vh",
                right: "auto",
                left: "-1vw",
                x: "-45%",
                y: "0%",
                pointerEvents: "none",
                ease: "power2.out",
              });
              break;

            case indx:
              gsap.set(el, {
                clear: "all",
              });
              gsap.to(el, {
                duration: 1,
                top: "72vh",
                left: "50vw",
                x: "-50%",
                pointerEvents: "none",
                ease: "power2.out",
              });
              break;

            case switcher(indx + 1):
              gsap.set(el, {
                clear: "all",
              });
              gsap.to(el, {
                duration: 1,
                opacity: 0.6,
                scale: 0.9,
                x: "45%",
                top: "67vh",
                // right: "auto",
                left: "46.5vw",
                y: "0%",
                pointerEvents: "none",
                ease: "power2.out",
              });
              break;

            default:
              gsap.set(el, { clearProps: "scale" });
              gsap.to(el, {
                duration: 1,
                opacity: 0,
                scale: 0.6,
                x: "45%",
                top: "60vh",
                // right: "auto",
                left: "-50vw",
                y: "0%",
                ease: "power2.out",
              });
          }
        });
      } else {
        grpRef.current.forEach((el, index) => {
          el.style.animationPlayState = "running";
          // const { top, left, right, bottom } = el.getBoundingClientRect();

          let top = index === 0 || index == 1 ? "15vh" : "53vh";
          let left = index === 0 || index == 2 ? "1vw" : "auto";
          let right = index === 1 || index == 3 ? "1vw" : "auto";

          gsap.to(el, {
            duration: 1.5,
            opacity: 1,
            scale: 1,
            top: top,
            left: left,
            right: right,
            x: "0%",
            bottom: "auto",
            pointerEvents: "auto",
            ease: "power2.out",
          });
        });
      }
    });
  }, [isVerticalOpen]);

  useEffect(() => {
    backgroundRef.current.map((el) => {
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
    }
  }, [isVerticalOpen]);

  useEffect(() => {
    setteam(teamMembers[banners[indx].name]);
    if (
      mainContainerRef.current &&
      mainContainerRef.current.scrollHeight >
        mainContainerRef.current.clientHeight
    ) {
      setShowScrollBar(false);
    } else {
      setShowScrollBar(true);
    }
  }, [indx]);

  const handleVerticalClick = (index) => {
    floatAnim.current.forEach((tween) => tween.pause());

    setIsVerticalOpen(true);
    setIndx(index);
  };

  const carouselMover = (increment) => {
    contextSafe(() => {
      grpRef.current.forEach((el, index) => {
        switch (switcher(index + increment)) {
          case switcher(indx - 2):
            gsap.set(el, {
              clear: "all",
            });
            gsap.to(el, {
              duration: 1,
              opacity: 0.6,
              scale: 0.9,
              top: "67vh",
              right: "auto",
              left: "-1vw",
              x: "-45%",
              y: "0%",
              pointerEvents: "none",
              ease: "power2.out",
            });
            break;

          case switcher(indx - 1):
            gsap.set(el, {
              clear: "all",
            });
            gsap.to(el, {
              duration: 1,
              top: "72vh",
              left: "50vw",
              x: "-50%",
              pointerEvents: "none",
              ease: "power2.out",
            });
            break;

          case switcher(indx):
            gsap.set(el, {
              clear: "all",
            });
            gsap.to(el, {
              duration: 1,
              opacity: 0.6,
              scale: 0.9,
              x: "45%",
              top: "67vh",
              // right: "auto",
              left: "46.5vw",
              y: "0%",
              pointerEvents: "none",
              ease: "power2.out",
            });
            break;

          case switcher(indx + 1):
            gsap.set(el, {
              clear: "all",
            });
            gsap.to(el, {
              duration: 1,
              opacity: 0,
              scale: 0.6,
              x: "45%",
              top: "60vh",
              // right: "auto",
              left: "80vw",
              y: "0%",
              ease: "power2.out",
            });
            break;
        }
      });
    })();
  };
  const rightArrowClick = () => {
    setIndx((prevIndex) => {
      prevIndex--;
      if (prevIndex < 0) prevIndex = 3;
      return prevIndex;
    });
    carouselMover(0);
  };
  const leftArrowClick = () => {
    setIndx((prevIndex) => {
      prevIndex++;
      if (prevIndex > 3) prevIndex = 0;
      return prevIndex;
    });
    carouselMover(-2);
  };

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
          <div
            className={styles.background2}
            ref={(el) => {
              backgroundRef.current[0] = el;
            }}
          >
            <img src={bg2} alt="background image" />
            <img
              className={styles.blendOverlay}
              src={imageSrc}
              alt="background image"
            />
            <img
              src={rightArrow}
              alt="rightArrow"
              className={styles.rightArrow}
              onClick={rightArrowClick}
            />
            <img
              src={leftArrow}
              alt="leftArrow"
              className={styles.leftArrow}
              onClick={leftArrowClick}
            />
          </div>
        )}
        <div className={styles.verticals} ref={mainContainerRef}>
          {isVerticalOpen && (
            <>
              {showScrollBar && (
                <div
                  className={styles.scrollBarContainer}
                  onClick={handleTrackSnap}
                >
                  <div className={styles.scrollBar}></div>
                  <img
                    draggable={false}
                    onMouseDown={handlewheelMouseDown}
                    onTouchStart={handlewheelMouseDown}
                    id="wheel"
                    src={wheel}
                    alt="wheel"
                    ref={wheelRef}
                  />
                </div>
              )}
              <Verticals
                team={team}
                ref={(el) => {
                  backgroundRef.current[1] = el;
                }}
              />
            </>
          )}
        </div>

        {banners.map((banner, index) => (
          <FloatIcon
            key={index}
            ref={(el) => (grpRef.current[index] = el)}
            banner={isVerticalOpen ? bannerImg2 : bannerImg}
            className={`${banner.className} ${styles.banners}`}
            onClick={() => {
              handleVerticalClick(index);
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
