import styles from "./loading.module.scss";

import { Html, useProgress } from "@react-three/drei";
import "react-circular-progressbar/dist/styles.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";
import LottiePreloader from "./LottiePreloader/LottiePreloader";

export default function LoadingScreen() {
  const dispatch = useDispatch();
  const { progress, active, item } = useProgress();

  useEffect(() => {
    return () => {
      dispatch(experienceAnimationsActions.toggleIsLoading());
    };
  }, []);
  return (
    <>
      <Html center>
        <div className={styles.loader}>
          <div
            className={styles.bgGlow}
            style={{ opacity: parseInt(progress) / 100 }}
          ></div>
          {/* <LottiePreloader /> */}
          <div className={styles.circle}>
            <div
              className={styles.waveGenerator}
              style={{ top: `-${parseInt(progress) + 120}%` }}
            ></div>
            <div
              className={styles.waveGenerator}
              style={{ top: `-${parseInt(progress) + 120}%` }}
            ></div>
          </div>
          <h1 className={styles.progress}>{parseInt(progress)}%</h1>
        </div>
      </Html>
    </>
  );
}
