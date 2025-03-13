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
import carouselbg from "../../src/assets/Events/carouselbg.png";
import heading from "../../src/assets/Events/header.png";
import mobileHeading from "../../src/assets/Events/mobileheader.png";

const Events = () => {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const events = [
    {
      name: "ROBOTS AT WAR",
      image: robowar,
      description:
        "Death match between remote controlled robots of two weight categories, 8kg and 15kg. ",
    },
    {
      name: "STOCK MARKET SIMULATOR",
      image: stockmarket,
      description:
        "An intense 2-day event, testing the limits of the participant’s financial sense. Participants buy and sell virtual stocks, all while aiming to score the most.",
    },
    {
      name: "ARMAGEDDON",
      image: armaggedon,
      description:
        "Gamers battle out on the virtual battlefield, showing skills and determination reigns supreme",
    },
    {
      name: "SHARK TANK CONCLAVE",
      image: sharktank,
      description:
        "The Shark Tank Conclave is a platform for entrepreneurs to pitch ideas to investors, fostering innovation and funding opportunities.",
    },
    {
      name: "INTERNATIONAL CODING LEAGUE",
      image: coding,
      description:
        "A 2-Compete against participants from across the globe and code your way to win. 100% increase in participants per year since inception",
    },
    {
      name: "APOGEE INNOVATION CHALLENGE",
      image: innovation,
      description:
        "Provide solutions to existing and real life industry-level problem statements given by companies.",
    },
  ];

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        events.map((event) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = event.image;
            img.onload = resolve;
          });
        })
      );
      setPreloaded(true);
    };
    loadImages();
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <img src={heading} alt="heading" id={styles.first} />
          <img src={mobileHeading} alt="mobileHeading" id={styles.second} />
        </div>
        <div className={styles.carousel}>
          <div className={styles.carouselContent}>
            <div className={styles.carouselImage}>
              <img
                src={events[index].image}
                alt={events[index].name}
                draggable={false}
              />
            </div>
            <div className={styles.carouselText}>
              <h1>{events[index].name}</h1>
              <p>{events[index].description}</p>
            </div>
          </div>
        </div>
        <div className={styles.carouselControls}>
          <div
            className={styles.left}
            onClick={() => setIndex((index + 5) % 6)}
          >
            <img src={left} alt="left" />
          </div>
          <div
            className={styles.right}
            onClick={() => setIndex((index + 1) % 6)}
          >
            <img src={right} alt="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
