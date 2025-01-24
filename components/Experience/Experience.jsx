import {
  Sky,
  OrbitControls,
  useHelper,
  Environment,
  Float,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { TestComp2 } from "../TestComp2/TestComp2.jsx";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { Leva, useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import Clouds from "./Clouds/Clouds.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";
import { Blimp } from "./Blimp/Blimp.jsx";
import { useFrame } from "@react-three/fiber";

import { useDispatch, useSelector } from "react-redux";
import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice.js";
import { useGSAP } from "@gsap/react";

export default function Experience() {
  // use
  const dispatch = useDispatch();

  const vec = new THREE.Vector3();

  const directionalLightHelper = useRef();
  const pointLightHelper = useRef();
  const orb = useRef();
  useHelper(directionalLightHelper, DirectionalLightHelper, "red");
  useHelper(pointLightHelper, PointLightHelper, "purple");

  const isIntroComplete = useSelector(
    (state) => state.experienceAnimations.isIntroComplete
  );

  useGSAP(() => {}, { dependencies: [] });

  // useFrame((state, delta) => {
  //   if (!isIntroComplete) {
  //     state.camera.lookAt(orb.current.position);
  //     state.camera.position.lerp(vec.set(0.9123, 0.8487, -0.93792), 0.005);
  //     state.camera.updateProjectionMatrix();
  //     if (orb.current.position.y <= 0.85 && state.camera.position.y <= 0.8487) {
  //       dispatch(experienceAnimationsActions.toggleIntroCompletion());
  //     }
  //   }
  // });

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

      <group
        position={[0, 0.85, -0.012]}
        // initial={{ x: 0, y: 1.5, z: -0.012 }}
        // animate={{
        //   y: 0.85,
        //   transition: { duration: 2 },
        // }}
        ref={orb}
      >
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
