import { useDispatch, useSelector } from "react-redux";
import styles from "./overlay.module.scss";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import About from "../About/About";
import { reverseAnimation } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";
import cross from "../../src/assets/cross.png";

export default function Overlay() {
  const dispatch = useDispatch();

  const curState = useSelector((state) => state.experienceAnimations.curStage);
  const animationStage = useSelector(
    (state) => state.experienceAnimations.animationStage
  );

  return (
    <div
      className={styles.overlay}
      style={
        curState === "landing"
          ? { opacity: 0, pointerEvents: "none" }
          : { opacity: 1, pointerEvents: "auto" }
      }
    >
      <button
        className={styles.backBtn}
        onClick={() => {
          dispatch(reverseAnimation(animationStage));
        }}
      >
        <img src={cross} alt="cross" />
      </button>
      {curState === "contact" && <Contact />}
      {curState === "about" && <About />}
    </div>
  );
}
