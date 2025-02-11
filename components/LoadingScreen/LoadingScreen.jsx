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
          {/* <LottiePreloader /> */}
          <h1 className={styles.progress}>{parseInt(progress)}%</h1>
        </div>
      </Html>
    </>
  );
}
