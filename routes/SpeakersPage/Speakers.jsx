import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../components/Speakers/Experience";
import Heading from "../../components/Speakers/Heading/Heading";
import OverlayBackBtn from "../../components/Overlay/OverlayBackBtn/OverlayBackBtn";

export default function SpeakersPage() {
  return (
    <>
      <Heading />
      <OverlayBackBtn />
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={30} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}