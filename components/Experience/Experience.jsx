import {
  BakeShadows,
  Environment,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { TestComp2 } from "../TestComp2/TestComp2.jsx";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { useControls } from "leva";
import { Bloom, Noise } from "@react-three/postprocessing";

export default function Experience() {
  //   const directionalLightHelper = useRef();
  const pointLightHelper = useRef();
  //   useHelper(directionalLightHelper, DirectionalLightHelper, "red");
  useHelper(pointLightHelper, PointLightHelper, "purple");
  return (
    <>
      <Perf position="top-left" />

      {/* <Bloom intensity={4.0} /> */}

      <Noise />

      <OrbitControls
      // maxPolarAngle={Math.atan(1.5 / 0.25)}
      // minPolarAngle={Math.PI / 3}
      // enablePan={false}
      // enableZoom={false}
      />

      <BakeShadows />

      <Environment
        files="/environments/kloppenheim_06_puresky_1k.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
      />

      <fogExp2 attach="fog" color="#564d65" density={0.3} />

      {/* <directionalLight
        ref={directionalLightHelper}
        position={[3, 1, 0]}
        // target={[0, 1, 0]}
        intensity={5}
      /> */}

      {/* <pointLight
        ref={pointLightHelper}
        intensity={1}
        color="blue"
        position={[1, 1, 0]}
      /> */}

      <group rotation={[0, -Math.PI / 2, 0]} scale={0.02}>
        <TestComp2 />
      </group>
    </>
  );
}
