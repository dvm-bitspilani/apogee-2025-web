import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Navbar from "./Navbar/Navbar";
import Overlay from "../Overlay/Overlay";

export default function Landing() {
  return (
    <>
      <Overlay />
      <Navbar />
      <Canvas
        camera={{
          position: [0, 2.5, 0],
          fov: 50,
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
