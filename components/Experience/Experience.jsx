import { Sky, OrbitControls, useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { TestComp2 } from "../TestComp2/TestComp2.jsx";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";

export default function Experience() {
  const directionalLightHelper = useRef();
  const pointLightHelper = useRef();
  useHelper(directionalLightHelper, DirectionalLightHelper, "red");
  useHelper(pointLightHelper, PointLightHelper, "purple");

  const {
    skyDistance,
    sunPosition,
    inclination,
    azimuth,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    turbidity,
  } = useControls({
    skyDistance: {
      value: 450000,
      min: 0,
      max: 1000000,
      step: 1000,
    },
    sunPosition: {
      value: [10, 2, 5],
    },
    inclination: {
      value: 0,
      min: 0,
      max: 2,
      step: 0.01,
    },
    azimuth: {
      value: 0.25,
      min: 0,
      max: 2,
      step: 0.01,
    },
    rayleigh: {
      value: 1.5,
      min: 0,
      max: 2,
      step: 0.01,
    },
    mieCoefficient: {
      value: 0.005,
      min: 0,
      max: 0.1,
      step: 0.001,
    },
    mieDirectionalG: {
      value: 0.8,
      min: 0,
      max: 1,
      step: 0.01,
    },
    turbidity: {
      value: 8,
      min: 0,
      max: 100,
      step: 1,
    },
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

      {/* <Environment
        files="/environments/kloppenheim_06_puresky_1k.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        // background={true}
        /> */}

      <Sky
        distance={skyDistance}
        sunPosition={sunPosition}
        inclination={inclination}
        azimuth={azimuth}
        rayleigh={rayleigh}
        mieCoefficient={mieCoefficient}
        mieDirectionalG={mieDirectionalG}
        turbidity={turbidity}
        expo
      />

      <group position={[0, 0.2, 0.075]}>
        <EnergyOrb color="orange" />
      </group>

      {/* <fogExp2 attach="fog" color="#564d65" density={0.3} /> */}

      <ambientLight intensity={1} />

      <group rotation={[0, -Math.PI / 2, 0]} scale={0.02}>
        <TestComp2 />
      </group>
    </>
  );
}
