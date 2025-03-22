import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../components/Speakers/Experience";
import Heading from "../../components/Speakers/Heading/Heading";

export default function SpeakersPage() {
  return (
    <>
      <Heading />
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={30} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}