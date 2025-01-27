import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ShaderDevMesh from "./ShaderDevMesh";

export default function ShaderDev() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={1} />

      <Environment preset="sunset" background={true} />

      <ShaderDevMesh />
    </Canvas>
  );
}
