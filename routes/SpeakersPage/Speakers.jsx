import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpeakerExperience } from "../../components/Speakers/Experience";
import Heading from "../../components/Speakers/Heading/Heading";
import OverlayBackBtn from "../../components/Overlay/OverlayBackBtn/OverlayBackBtn";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { Suspense, useState, useEffect } from "react";
import { Link } from "react-router";
import Preloader from "../../components/Registration/Preloader/Preloader";

export default function SpeakersPage() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 4000);
  }, []);

  return (
    <>
      {showPreloader && <Preloader />}
      <Heading />
      <Link to="/">
        <OverlayBackBtn />
      </Link>
      <Canvas
        style={{
          opacity: showPreloader ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <color attach="background" args={["#000"]} />
        <ScrollControls pages={15} damping={0.4}>
          <Suspense fallback={<LoadingScreen />}>
            <SpeakerExperience />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </>
  );
}
