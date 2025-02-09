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
    <img
      src="/images/logo.svg"
      className={styles.logo}
      style={{
        opacity:
          curStage === "landing" && isPointerEventsAllowed && !isLoading
            ? 1
            : 0,
      }}
      alt="APOGEE 2025 Logo"
    />
  );
}
