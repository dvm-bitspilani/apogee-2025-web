import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Landing() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 2, 0],
        }}
        id="landingExperience"
      >
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
