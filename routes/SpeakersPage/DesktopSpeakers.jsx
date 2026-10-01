import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpeakerExperience } from "../../components/Speakers/Experience";
import Heading from "../../components/Speakers/Heading/Heading";
import OverlayBackBtn from "../../components/Overlay/OverlayBackBtn/OverlayBackBtn";
import { Suspense, useState, useEffect } from "react";
import { Link } from "react-router";
import Preloader from "../../components/Registration/Preloader/Preloader";
import useDocumentVisible from "../../src/ui/useDocumentVisible";

export default function SpeakersPage() {
  const visible = useDocumentVisible();
  const [showPreloader] = useState(false);


  return (
    <>
      {showPreloader && <Preloader />}
      <Heading />
      <Link to="/">
        <OverlayBackBtn />
      </Link>
      <Canvas dpr={[1,1.25]} frameloop={visible ? "always" : "never"}
        style={{
          opacity: showPreloader ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <color attach="background" args={["#000"]} />
        <ScrollControls pages={15} damping={0.4}>
          <Suspense fallback={null}><SpeakerExperience /></Suspense>
        </ScrollControls>
      </Canvas>
    </>
  );
}
