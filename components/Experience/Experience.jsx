import {
  Sky,
  OrbitControls,
  useHelper,
  Environment,
  Float,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { TestComp2 } from "../TestComp2/TestComp2.jsx";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import Clouds from "./Clouds/Clouds.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";
import { Blimp } from "./Blimp/Blimp.jsx";

export default function Experience() {
  const directionalLightHelper = useRef();
  const pointLightHelper = useRef();
  useHelper(directionalLightHelper, DirectionalLightHelper, "red");
  useHelper(pointLightHelper, PointLightHelper, "purple");

  const {
    blimpScale,
    blimpPosition,
    blimpFloatSpeed,
    blimpRotationIntensity,
    blimpFloatIntensity,
    blimpFloatingRange,
  } = useControls({
    blimpScale: 0.15,
    blimpPosition: [0.85, 0.9, -0.69],
    blimpFloatSpeed: {
      value: 1,
      min: 0,
      max: 5,
      step: 0.5,
    },
    blimpRotationIntensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.5,
    },
    blimpFloatIntensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.5,
    },
    blimpFloatingRange: [-0.1, 0.1],
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls
      // maxPolarAngle={Math.atan(1.5 / 0.25)}
      // minPolarAngle={Math.PI / 3}
      // enablePan={false}
      // enableZoom={false}
      />

      <Environment
        files="/environments/sunset1.jpg"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
        resolution={128}
      />

      <group position={[0, 0.85, -0.012]}>
        <EnergyOrb color="orange" lightIntensity={3} />
      </group>

      {/* <group position={[6, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <Clouds args={[20, 20]} />
      </group> */}

      {/* <fog attach="fog" args={["#564d65", 0.0001, 10]} isFog /> */}

      <group rotation={[0, -Math.PI / 2, 0]}>
        {/* <TestComp2 /> */}
        <CityModel scale={0.02} />
        <Float
          speed={blimpFloatSpeed}
          rotationIntensity={blimpRotationIntensity}
          floatIntensity={blimpFloatIntensity}
          floatingRange={blimpFloatingRange}
        >
          <Blimp scale={blimpScale} position={blimpPosition} />
        </Float>
      </group>
    </>
  );
}
