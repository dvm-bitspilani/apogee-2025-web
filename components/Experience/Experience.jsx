import {
  OrbitControls,
  useHelper,
  Environment,
  Float,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { Leva, useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";
import { Blimp } from "./Blimp/Blimp.jsx";
import { useFrame, useThree } from "@react-three/fiber";

import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CAMERA_POSITION_LANDING = {
  x: 0.9123,
  y: 0.8487,
  z: -0.93792,
};

const V_XZ_MAGNITUDE = Math.sqrt(
  CAMERA_POSITION_LANDING.x ** 2 + CAMERA_POSITION_LANDING.z ** 2
);
const V_MAGNITUDE = Math.sqrt(
  CAMERA_POSITION_LANDING.x ** 2 +
    CAMERA_POSITION_LANDING.y ** 2 +
    CAMERA_POSITION_LANDING.z ** 2
);
const ORBIT_POLAR_ANGLE = Math.acos(
  (CAMERA_POSITION_LANDING.x ** 2 + CAMERA_POSITION_LANDING.z ** 2) /
    (V_XZ_MAGNITUDE * V_MAGNITUDE)
);

export default function Experience() {
  const { camera } = useThree();
  const dispatch = useDispatch();

  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));
  const orb = useRef();
  const blackScreen = useRef();

  const directionalLightHelper = useRef();
  const pointLightHelper = useRef();
  useHelper(directionalLightHelper, DirectionalLightHelper, "red");
  useHelper(pointLightHelper, PointLightHelper, "purple");

  const animationStage = useSelector(
    (state) => state.experienceAnimations.animationStage
  );

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      console.log(blackScreen.current);

      timeline
        .fromTo(
          "canvas",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            delay: 0.5,
          }
        )
        .to(blackScreen.current.material, {
          opacity: 0,
          duration: 1,
        })
        .to(
          camera.position,
          {
            ...CAMERA_POSITION_LANDING,
            duration: 5,
            ease: "power2.inOut",
          },
          "-=1.95"
        )
        .to(
          orb.current.position,
          {
            y: 0.85,
            duration: 5,
            ease: "power2.inOut",
          },
          "<"
        )
        .fromTo(
          cameraTarget.current,
          {
            x: 0,
            y: 1.5,
            z: -0.012,
          },
          {
            y: 0,
            duration: 5.5,
            ease: "power2.inOut",
            onComplete: () => {
              dispatch(
                experienceAnimationsActions.setAnimationStage("landing")
              );
            },
          },
          "<"
        );
    },
    { dependencies: [] }
  );

  useFrame((state, delta) => {
    state.camera.lookAt(cameraTarget.current);
  });

  const {
    blimpScale,
    blimpPosition,
    blimpFloatSpeed,
    blimpRotationIntensity,
    blimpFloatIntensity,
    blimpFloatingRange,
  } = useControls({
    blimpScale: 0.15,
    blimpPosition: [0, 0.75, 0],
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
      value: 0.75,
      min: 0,
      max: 10,
      step: 0.25,
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

      {animationStage !== "intro" && (
        <OrbitControls
          enableRotate={true}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 - ORBIT_POLAR_ANGLE}
          minPolarAngle={Math.PI / 2 - ORBIT_POLAR_ANGLE}
        />
      )}

      <Environment
        files="/environments/sunset1QuarterRes.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
        resolution={128}
      />

      {animationStage === "intro" && (
        <mesh
          position={[0, 1.35, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={4}
          ref={blackScreen}
        >
          <planeGeometry />
          <meshStandardMaterial color="gray" transparent />
        </mesh>
      )}

      <group position={[0, 1.5, -0.012]} ref={orb}>
        <EnergyOrb color="orange" lightIntensity={3} />
      </group>

      <group rotation={[0, -Math.PI / 2, 0]}>
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
