import { useSelector } from "react-redux";
import styles from "./overlay.module.scss";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function Overlay() {
  const curState = useSelector((state) => state.experienceAnimations.curStage);

  useEffect(() => {
    console.log(curState);
  }, []);
  return (
    <div
      className={styles.overlay}
      style={
        curState === "landing"
          ? { opacity: 0, pointerEvents: "none" }
          : { opacity: 1, pointerEvents: "auto" }
      }
    >
      {curState === "contact" && <Contact />}
      {curState === "about" && <About />}
    </div>
  );
}
