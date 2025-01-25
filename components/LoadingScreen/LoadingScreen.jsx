import { Html, useProgress } from "@react-three/drei";
import styles from "./loading.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function LoadingScreen() {
  const { progress, active, item } = useProgress();
  return (
    <Html center>
      {/* <div className={styles.loader}>
        <div className={styles.intern}>{parseFloat(progress.toFixed(2))}%</div>
      </div> */}
      {/* <h1>Test</h1> */}
      <div className={styles.loader}>
        <CircularProgressbar
          value={parseInt(progress)}
          text={`${parseFloat(progress.toFixed(2))}%`}
          styles={{
            root: { height: "20vh" },
            path: {
              // Path color
              stroke: `white`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            trail: {
              // Trail color
              stroke: "black",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              // Text color
              fill: "white",
              // Text size
              fontSize: "18px",
              fontFamily: "sans-serif",
            },
          }}
        />
      </div>
    </Html>
  );
}
