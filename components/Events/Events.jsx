import { useEffect, useState } from "react";
import styles from "./events.module.scss";
import left from "../../src/assets/About/left.png";
import right from "../../src/assets/About/right.png";
import robowar from "../../src/assets/Events/robowar.png";
import stockmarket from "../../src/assets/Events/stockmarket.png";
import armaggedon from "../../src/assets/Events/armaggedon.png";
import coding from "../../src/assets/Events/coding.png";
import sharktank from "../../src/assets/Events/sharktank.png";
import innovation from "../../src/assets/Events/innovation.png";
import mobileHeading from "../../src/assets/Events/mobileheader.png";
import imgBorder from "../../src/assets/Events/imgborder.png";
import events from "./events.json";
import defaultevent from "../../src/assets/Events/defaultevent.png";

const Events = () => {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slide, setSlide] = useState("right");

  const kernalEvents = [
    {
      name: "Robowars",
      image: robowar,
      description:
        "Death match between remote controlled robots of two weight categories, 8kg and 15kg. ",
      club: "CRISS",
      url: "https://unstop.com/competitions/robowars-bits-1405329",
    },
    {
      name: "STOCK MARKET SIMULATOR",
      image: stockmarket,
      description:
        "An intense 2-day event, testing the limits of the participant’s financial sense. Participants buy and sell virtual stocks, all while aiming to score the most.",
      club: "EFA",
      url: "https://unstop.com/competitions/stock-market-simulator-bits-1427428?lb=Fx0TRoi",
    },
    {
      name: "ARMAGEDDON",
      image: armaggedon,
      description:
        "Gamers battle out on the virtual battlefield, showing skills and determination reigns supreme",
      club: "Gaming Club",
    },
    {
      name: "SHARK TANK CONCLAVE",
      image: sharktank,
      description:
        "The Shark Tank Conclave is a platform for entrepreneurs to pitch ideas to investors, fostering innovation and funding opportunities.",
      club: "N/A",
    },
    {
      name: "INTERNATIONAL CODING LEAGUE",
      image: coding,
      description:
        "A 2-Compete against participants from across the globe and code your way to win. 100% increase in participants per year since inception",
      club: "N/A",
    },
    {
      name: "APOGEE INNOVATION CHALLENGE",
      image: innovation,
      description:
        "Provide solutions to existing and real life industry-level problem statements given by companies.",
      club: "N/A",
    },
  ];

  const allEvents = [...kernalEvents, ...events];

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        kernalEvents.map((event) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = event.image;
            img.onload = resolve;
          });
        })
      );
      setIsLoaded(true);
    };
    loadImages();
  }, []);

  const handleLeft = () => {
    setSlide("left");
    setTimeout(() => {
      setSlide("right");
    }, 300);
    setIndex((index + allEvents.length - 1) % allEvents.length);
  };

  const handleRight = () => {
    setSlide("left");
    setTimeout(() => {
      setSlide("right");
    }, 300);
    setIndex((index + 1) % allEvents.length);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.content}>
        <div className={styles.heading}>
          {/* <img src={heading} alt="heading" id={styles.first} /> */}
          <img src={mobileHeading} alt="mobileHeading" id={styles.second} />
        </div>
        <div className={styles.carousel}>
          <div className={styles.carouselContent}>
            <div className={styles.carouselImage}>
              <img
                src={allEvents[index].image || defaultevent}
                alt={allEvents[index].name}
                draggable={false}
              />
              <img
                src={imgBorder}
                className={styles.imgBorder}
                draggable={false}
              />
            </div>
            <div
              className={styles.carouselText}
              // style={{
              //   transform:
              //     window.innerWidth > 1000
              //       ? `translateX(${slide === "right" ? "0%" : "-100%"})`
              //       : `translateY(${slide === "right" ? "0%" : "-100%"})`,
              // }}
            >
              <div className={styles.eventHeader}>
                <h1>{allEvents[index].name}</h1>
                <h2>{allEvents[index].club}</h2>
              </div>
              <div className={styles.eventDetails}>
                <p>{allEvents[index].description}</p>
              </div>
              <div className={styles.eventLinkContainer}>
                {allEvents[index].url && (
                  <a
                    className={styles.eventLink}
                    href={allEvents[index].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    REGISTER
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carouselControls}>
          <div className={styles.left} onClick={() => handleLeft()}>
            <img src={left} alt="left" />
          </div>
          <div className={styles.right} onClick={() => handleRight()}>
            <img src={right} alt="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
