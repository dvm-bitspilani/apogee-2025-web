import { Html, useProgress } from "@react-three/drei";
import styles from "./loading.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function LoadingScreen() {
  const { progress, active, item } = useProgress();
  return (
    <Html center>
      <div className={styles.loader}>
        <CircularProgressbar
          value={parseFloat(progress)}
          text={`${parseFloat(progress.toFixed(2))}%`}
          styles={{
            root: { height: "20vh" },
            path: {
              stroke: `white`,
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "black",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "white",
              fontSize: "18px",
              fontFamily: "sans-serif",
            },
          }}
        />
      </div>
    </Html>
  );
}
