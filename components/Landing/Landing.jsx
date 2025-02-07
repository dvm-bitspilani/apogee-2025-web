import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense, useEffect } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Navbar from "./Navbar/Navbar";
import Overlay from "../Overlay/Overlay";
import { useLocation } from "react-router";

export default function Landing() {
  const location = useLocation();
  useEffect(() => {
    const lastLocation = localStorage.getItem("lastLocation");
    if (lastLocation === "/registration") {
      window.location.reload();
    }

    return () => {
      localStorage.setItem("lastLocation", location.pathname);
    };
  }, []);
  return (
    <>
      <Overlay />
      <Navbar />
      <Canvas
        id="landingExperience"
        camera={{
          position: [0, 2.5, 0],
          fov: 50,
          zoom: window.innerWidth < 850 ? 0.5 : 1,
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
