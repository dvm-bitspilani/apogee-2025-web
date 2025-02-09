import { useSelector } from "react-redux";
import styles from "./logo.module.scss";

export default function Logo() {
  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isLoading = useSelector(
    (state) => state.experienceAnimations.isLoading
  );
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );
  return (
    <div
      className={styles.logoContainer}
      style={{
        opacity:
          curStage === "landing" && isPointerEventsAllowed && !isLoading
            ? 1
            : 0,
      }}
    >
      <img
        src="/images/logo.svg"
        className={styles.logo}
        alt="APOGEE 2025 Logo"
      />
    </div>
  );
}
