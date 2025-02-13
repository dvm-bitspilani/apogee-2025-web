import { useDispatch, useSelector } from "react-redux";
import styles from "./overlay.module.scss";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import About from "../About/About";
import ComingSoon from "../ComingSoon/ComingSoon";
import { reverseAnimation } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";
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
        <img src="/images/backBtnLanding.png" alt="back button" />
      </button>
      {curState === "contact" && <Contact />}
      {curState === "about" && <About />}
      {curState === "events" && <ComingSoon />}
      {curState === "speakers" && <ComingSoon />}
    </div>
  );
}
