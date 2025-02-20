import { useSelector } from "react-redux";
import styles from "./logo.module.scss";

import logoBackground from "../../../src/assets/Landing/regbtnLanding.svg";

export default function Logo() {
  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );
  return (
    <div
      className={styles.logoContainer}
      style={{
        transform:
          curStage === "landing" && isPointerEventsAllowed
            ? "translateY(0) translateX(-50%)"
            : "translateY(-120%) translateX(-50%)",
      }}
    >
      <img
        src={logoBackground}
        className={styles.bg}
        alt="background image for logo"
      />
      <img
        src="/images/logo.svg"
        className={styles.logo}
        alt="APOGEE 2025 Logo"
      />
    </div>
  );
}
