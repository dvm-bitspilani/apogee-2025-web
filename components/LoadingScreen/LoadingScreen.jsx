import {
  Html,
  OrbitControls,
  useProgress,
  Environment,
} from "@react-three/drei";
import "react-circular-progressbar/dist/styles.css";
import EnergyOrb from "../EnergyOrb/EnergyOrb";
import { useFrame } from "@react-three/fiber";

export default function LoadingScreen() {
  const { progress, active, item } = useProgress();
  useFrame(() => {
    document.querySelector("#landingExperience").style.opacity =
      parseInt(progress) / 100;
  });
  return (
    <>
      <Environment
        files="/environments/sunset1by64.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={false}
        resolution={32}
      />
      <mesh position={[0, 1.35, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={4}>
        <planeGeometry />
        <meshStandardMaterial color="black" />
      </mesh>
      <group position={[-0.013, 1.5, 0]}>
        <EnergyOrb color="orange" isBloom={false} />
      </group>
    </>
  );
}
