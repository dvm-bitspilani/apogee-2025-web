import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpeakerExperience } from "../../components/Speakers/Experience";
import Heading from "../../components/Speakers/Heading/Heading";
import OverlayBackBtn from "../../components/Overlay/OverlayBackBtn/OverlayBackBtn";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { Suspense } from "react";
import { Link } from "react-router";

export default function SpeakersPage() {
  return (
    <>
      <Heading />
      <Link to="/">
        <OverlayBackBtn />
      </Link>
      <Canvas>
        <color attach="background" args={["#000"]} />
        <ScrollControls pages={15} damping={1}>
          <Suspense fallback={<LoadingScreen />}>
            <SpeakerExperience />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </>
  );
}
