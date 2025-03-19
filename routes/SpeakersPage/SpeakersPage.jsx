import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./speakersPage.module.scss";
import heading from "../../src/assets/Speakers/heading.png";

const SpeakerVideo = ({ speakerName = "akbar" }) => {
  const curState = useSelector((state) => state.experienceAnimations.curStage);
  const videoRef = useRef(null);
  const prevStateRef = useRef(null);

  useEffect(() => {
    if (
      prevStateRef.current !== "speakers" &&
      curState === "speakers" &&
      videoRef.current
    ) {
      videoRef.current
        .play()
        .catch((err) => console.error("Failed to play video:", err));
    }
    prevStateRef.current = curState;
  }, [curState]);

  return (
    <video
      ref={videoRef}
      src={`/videos/${speakerName}.mp4`}
      muted
      controls
      loop
      className={styles.video}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default function SpeakersPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <img src={heading} alt="Speakers" />
      </div>
      <div className={styles.Videocontainer}>
        <SpeakerVideo speakerName="akbar" />
        <SpeakerVideo speakerName="elenla" />
        <SpeakerVideo speakerName="shivshankar" />
      </div>
    </div>
  );
}
