import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense, useEffect } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Navbar from "./Navbar/Navbar";
import Overlay from "../Overlay/Overlay";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import Menu from "./Logo/Menu";
import Arrow from "./Arrow/Arrow";
import { Helmet } from "react-helmet-async";

export default function Landing() {
  const location = useLocation();

  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );

  useEffect(() => {
    const lastLocation = localStorage.getItem("lastLocation");
    if (lastLocation === "/registration") {
      localStorage.setItem("lastLocation", location.pathname);
      window.location.reload();
    }

    return () => {
      localStorage.setItem("lastLocation", location.pathname);
    };
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>APOGEE 2025 | Revved-Up Rhapsody</title>
        <link rel="canonical" href="https://apogee2025.com" />
      </Helmet> */}
      <Overlay />
      <Navbar />
      <Menu />
      <Canvas
        id="landingExperience"
        camera={{
          position: [0, 2.5, 0],
          fov: 50,
          zoom: window.innerWidth < 850 ? 0.5 : 1,
        }}
        style={{
          pointerEvents: isPointerEventsAllowed ? "auto" : "none",
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
