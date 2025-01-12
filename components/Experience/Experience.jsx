import { Canvas } from "@react-three/fiber";
import { BakeShadows, Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { TestComp2 } from "../TestComp2/TestComp2.jsx";
import { TestComp, TestInstances } from "../TestComp/TestComp.jsx";

export default function Experience() {
  return (
    <Canvas
      camera={{
        position: [2, 2, 2],
        far: 8,
        near: 0.01,
      }}
    >
      <Perf position="top-left" />

      <OrbitControls
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 5}
        // enablePan={false}
        // enableZoom={false}
      />

      <Environment
        files="/environments/kloppenheim_06_puresky_1k.hdr"
        background={true}
      />

      <BakeShadows />

      {/*<fogExp2 attach="fog" color='#564d65' density={0.03}/>*/}

      <ambientLight intensity={2} />
      {/*<group scale={0.02}>*/}
      {/*    <TestInstances>*/}
      {/*        <TestComp/>*/}
      {/*    </TestInstances>*/}
      {/*</group>*/}
      <group scale={0.02}>
        <TestComp2 />
      </group>
    </Canvas>
  );
}
