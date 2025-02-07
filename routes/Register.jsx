import React, { useEffect, useState } from "react";
import Instructions from "../components/Registration/Instructions/Instruction";
import styles from "./register.module.scss";
import BackButton from "../components/Registration/BackButton/BackButton";
import regBackground from "../src/assets/Register/regBackground.png";
import Preloader from "../components/Registration/Preloader/Preloader";

export default function Register() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imagesLoadedOnInstructions, setImagesLoadedOnInstructions] =
    useState(false);

  useEffect(() => {
    const imageUrls = [regBackground];
    let loadedCount = 0;
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  if (!imagesLoaded && !imagesLoadedOnInstructions) {
    return <Preloader />;
  }

  return (
    <>
      {window.innerWidth > 885 && (
        <img
          src={regBackground}
          className={styles.backgroundImage}
          alt="background"
        />
      )}
      <div className={styles.registerContainer}>
        <Instructions
          setImagesLoadedOnInstructions={setImagesLoadedOnInstructions}
        />
      </div>
      <div className={styles.backbtnContainer}>
        <BackButton />
      </div>
    </>
  );
}
