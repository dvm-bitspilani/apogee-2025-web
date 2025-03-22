import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../components/Speakers/Experience";
import Heading from "../../components/Speakers/Heading/Heading";
import OverlayBackBtn from "../../components/Overlay/OverlayBackBtn/OverlayBackBtn";
import { Link } from "react-router";

export default function SpeakersPage() {
  return (
    <>
      <Heading />
      <Link to="/">
        <OverlayBackBtn />
      </Link>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={15} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}
