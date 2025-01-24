import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Landing() {
  return (
    <>
      {/* <Navbar /> */}
      <Canvas
        camera={{
          position: [0.9123, 0.8487, -0.93792],
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
