import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpeakerExperience } from "../../components/Speakers/Experience";

export default function SpeakersPage() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={30} damping={1}>
          <SpeakerExperience />
        </ScrollControls>
      </Canvas>
    </>
  );
}
