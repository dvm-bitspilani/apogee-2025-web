import { Sky, OrbitControls, useHelper, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { TestComp2 } from "../TestComp2/TestComp2.jsx";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import Clouds from "./Clouds/Clouds.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";

export default function Experience() {
  const directionalLightHelper = useRef();
  const pointLightHelper = useRef();
  useHelper(directionalLightHelper, DirectionalLightHelper, "red");
  useHelper(pointLightHelper, PointLightHelper, "purple");

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls
        maxPolarAngle={Math.atan(1.5 / 0.25)}
        minPolarAngle={Math.PI / 3}
        enablePan={false}
        enableZoom={false}
      />

      <Environment
        files="/environments/sunset1.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
      />

      <group position={[0, 0.85, -0.012]}>
        <EnergyOrb color="orange" lightIntensity={3} />
      </group>

      {/* <group position={[6, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <Clouds args={[20, 20]} />
      </group> */}

      <fog attach="fog" args={["#564d65", 0.0001, 10]} isFog />

      <group rotation={[0, -Math.PI / 2, 0]} scale={0.02}>
        {/* <TestComp2 /> */}
        <CityModel />
      </group>
    </>
  );
}
