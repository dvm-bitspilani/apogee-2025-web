import {
  Html,
  OrbitControls,
  useProgress,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import "react-circular-progressbar/dist/styles.css";
import EnergyOrb from "../EnergyOrb/EnergyOrb";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";

export default function LoadingScreen() {
  const dispatch = useDispatch();
  const { progress, active, item } = useProgress();
  useFrame(() => {
    document.querySelector("#landingExperience").style.opacity =
      parseInt(progress) / 100;
  });

  useEffect(() => {
    return () => {
      dispatch(experienceAnimationsActions.toggleIsLoading());
      document.querySelector("#landingExperience").style.opacity = 1;
    };
  }, []);
  return (
    <>
      {/* <PerspectiveCamera makeDefault position={[0, 2.5, 0]} /> */}
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
        <Html center>
          <h1
            style={{
              color: "black",
              fontSize: "2rem",
              fontFamily: "sans-serif",
            }}
          >
            {parseInt(progress)}%
          </h1>
        </Html>
        <EnergyOrb color="orange" isBloom={false} />
      </group>
    </>
  );
}
