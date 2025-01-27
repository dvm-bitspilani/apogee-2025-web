import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ShaderDevMesh from "./ShaderDevMesh";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function ShaderDev() {
  return (
    <Canvas>
      <OrbitControls />

      {/* <ShaderDevMesh /> */}
      <LoadingScreen />
    </Canvas>
  );
}
