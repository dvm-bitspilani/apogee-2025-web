import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
<<<<<<< HEAD
import styles from "../Experience/CityModel/citymodel.module.scss";
=======
>>>>>>> 102f8eb9109df396e11db62ea7ed470a62dfff11

export default function Landing() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 2, 0],
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
