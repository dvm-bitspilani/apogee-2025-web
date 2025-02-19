import styles from "./loading.module.scss";

import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";

export default function LoadingScreen() {
  const dispatch = useDispatch();
  const { progress, active, item } = useProgress();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        dispatch(experienceAnimationsActions.toggleIsUserUnfocusAtPreloader());
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
