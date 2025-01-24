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
import { Leva, useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import Clouds from "./Clouds/Clouds.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";
import { Blimp } from "./Blimp/Blimp.jsx";
import { useFrame } from "@react-three/fiber";

import { motion } from "framer-motion-3d";

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
    blimpPosition: [0, 0.9, 0],
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
      {window.innerWidth < 850 ? (
        <Leva hidden={window.innerWidth < 850} />
      ) : (
        <Perf position="top-left" />
      )}

      {/* <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} /> */}

      <Environment
        files="/environments/sunset1QuarterRes.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
        resolution={128}
      />

      <motion.group
        initial={{ x: 0, y: 1.25, z: -0.012 }}
        animate={{
          y: 0.85,
          transition: { duration: 2, delay: 1, ease: "easeInOut" },
        }}
      >
        <EnergyOrb color="orange" lightIntensity={3} />
      </motion.group>

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
