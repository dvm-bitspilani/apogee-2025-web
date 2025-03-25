import { useDispatch, useSelector } from "react-redux";
import styles from "./overlay.module.scss";
import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Events from "../Events/Events";
// import ComingSoon from "../ComingSoon/ComingSoon";
import { reverseAnimation } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";
import OverlayBackBtn from "./OverlayBackBtn/OverlayBackBtn";
import { Navigate } from "react-router";
import SpeakersPage from "../../routes/SpeakersPage/SpeakersPage";
export default function Overlay() {
  const dispatch = useDispatch();

  const curState = useSelector((state) => state.experienceAnimations.curStage);
  const animationStage = useSelector(
    (state) => state.experienceAnimations.animationStage
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    // console.log(window.location);
  }, [curState]);

  return (
    <>
      <OverlayBackBtn
        style={
          curState === "landing"
            ? { opacity: 0, pointerEvents: "none" }
            : { opacity: 1, pointerEvents: "auto" }
        }
      />
      <div
        className={styles.overlayContainer}
        style={
          curState === "contact"
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <Contact />
      </div>
      <div
        className={styles.overlayContainer}
        style={
          curState === "about"
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <About />
      </div>
      <div
        className={styles.overlayContainer}
        style={
          curState === "events"
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <Events />
      </div>

      {!isMobile && curState === "speakers" && <Navigate to="/speakers" />}
      {isMobile && curState === "speakers" && (
        <div
          className={`${styles.overlayContainer} ${styles.speakerContainer}`}
          style={
            curState === "speakers"
              ? { opacity: 1, pointerEvents: "auto" }
              : { opacity: 0, pointerEvents: "none" }
          }
        >
          <SpeakersPage />
        </div>
      )}
      {/* {curState === "speakers" && (
        <iframe
          src={`${window.location.origin}/speakers`}
          title="Speakers"
          width="100%"
          height="100%"
          // style={{
          //   border: "none",
          // }}
        />
      )} */}
    </>
  );
}
