import { Html, useProgress } from "@react-three/drei";
import styles from "./loading.module.scss";

export default function LoadingScreen() {
  const { progress, active, item } = useProgress();
  return (
    <Html center>
      <div className={styles.loader}>
        <div className={styles.intern}>{parseFloat(progress.toFixed(2))}%</div>
        <div className={styles.externalShadow}>
          <div className={styles.central}></div>
        </div>
      </div>
    </Html>
  );
}
