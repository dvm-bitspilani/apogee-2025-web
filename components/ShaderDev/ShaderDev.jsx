import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Torus, Text } from "@react-three/drei";
import Fountain from "../Fountain/Fountain";

export default function ShaderDev() {
  return (
    <Canvas>
      <OrbitControls />
      {/* <Environment preset="dawn" background /> */}
      <Fountain />
    </Canvas>
  );
}
