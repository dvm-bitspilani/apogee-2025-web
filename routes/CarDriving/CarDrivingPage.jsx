import { Canvas } from "@react-three/fiber";
import CarDrivingExperience from "./CarDrivingExperience/CarDrivingExperience";
import { KeyboardControls } from "@react-three/drei";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
  { name: "jump", keys: ["Space"] },
];

export default function CarDrivingPage() {
  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas>
        <CarDrivingExperience />
      </Canvas>
    </KeyboardControls>
  );
}
