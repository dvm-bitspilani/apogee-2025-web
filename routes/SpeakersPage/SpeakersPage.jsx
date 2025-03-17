import styles from "./speakersPage.module.scss";

export default function SpeakersPage() {
  return (
    <div className={styles.container}>
      <video
        src="/videos/akbar.mp4"
        autoPlay
        muted
        controls
        className={styles.video}
      >
        Your browser does not support the video tag.
      </video>
      <video
        src="/videos/elenla.mp4"
        autoPlay
        muted
        controls
        className={styles.video}
      >
        Your browser does not support the video tag.
      </video>
      <video
        src="/videos/shivshankar.mp4"
        autoPlay
        muted
        controls
        className={styles.video}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
