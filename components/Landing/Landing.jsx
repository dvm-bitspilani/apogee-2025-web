import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styles from "../Experience/CityModel/citymodel.module.scss";

export default function Landing() {
  return (
    <>
      <Canvas
        camera={{
          position: [2, 0.25, 0],
          // far: 8,
          near: 0.01,
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
