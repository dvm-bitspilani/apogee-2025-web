import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./speakersPage.module.scss";
import heading from "../../src/assets/Speakers/heading.webp";

const SpeakerVideo = ({ speakerName = "akbar" }) => {
  const curState = useSelector((state) => state.experienceAnimations.curStage);
  const videoRef = useRef(null);
  const prevStateRef = useRef(null);


  return (
    <video
      ref={videoRef}
      src={`/videos/${speakerName}.mp4`}
      muted
      controls
      playsInline
      preload="none"
      poster={`/videos/${speakerName}.webp`}
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
        <SpeakerVideo speakerName="vijender" />
        <SpeakerVideo speakerName="abhay" />
        <SpeakerVideo speakerName="nidhi" />
        <SpeakerVideo speakerName="dilip" />
        <SpeakerVideo speakerName="patnaik" />
        <SpeakerVideo speakerName="anantha" />
        <SpeakerVideo speakerName="anil" />
      </div>
    </div>
  );
}
