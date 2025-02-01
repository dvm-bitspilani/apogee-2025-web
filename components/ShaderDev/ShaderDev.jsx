import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Line,
  Sphere,
  Torus,
  Text3D,
  Text,
} from "@react-three/drei";
import ShaderDevMesh from "./ShaderDevMesh";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import EnergyOrb from "../EnergyOrb/EnergyOrb";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Bloom,
  EffectComposer,
  SelectiveBloom,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import ParticleOrb from "../EnergyOrb/ParticleOrb";
import GlowingSphere from "./GlowingSphere";

export default function ShaderDev() {
  const lineRef1 = useRef();
  const lineRef2 = useRef();
  const lineRef3 = useRef();
  const lineRef4 = useRef();
  const pointsRef1 = useRef([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const pointsRef2 = useRef([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const pointsRef3 = useRef([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const pointsRef4 = useRef([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  // useGSAP(
  //   () => {
  //     const timeline = gsap.timeline({
  //       onUpdate: () => {
  //         lineRef1.current.geometry.setPositions(pointsRef1.current.flat());
  //         lineRef2.current.geometry.setPositions(pointsRef2.current.flat());
  //         lineRef3.current.geometry.setPositions(pointsRef3.current.flat());
  //         lineRef4.current.geometry.setPositions(pointsRef4.current.flat());
  //       },
  //     });

  //     timeline
  //       .to(
  //         [pointsRef1.current[1], pointsRef1.current[2]],
  //         {
  //           0: 1,
  //           duration: 0.75,
  //         },
  //         0
  //       )
  //       .to(pointsRef1.current[2], {
  //         1: 1,
  //         duration: 0.75,
  //       })
  //       .to(
  //         [pointsRef2.current[1], pointsRef2.current[2]],
  //         {
  //           1: 1,
  //           duration: 0.75,
  //         },
  //         0
  //       )
  //       .to(pointsRef2.current[2], {
  //         0: -1,
  //         duration: 0.75,
  //       })
  //       .to(
  //         [pointsRef3.current[1], pointsRef3.current[2]],
  //         {
  //           0: -1,
  //           duration: 0.75,
  //         },
  //         0
  //       )
  //       .to(pointsRef3.current[2], {
  //         1: 1,
  //         duration: 0.75,
  //       })
  //       .to(
  //         [pointsRef4.current[1], pointsRef4.current[2]],
  //         {
  //           1: 1,
  //           duration: 0.75,
  //         },
  //         0
  //       )
  //       .to(pointsRef4.current[2], {
  //         0: -1,
  //         duration: 0.75,
  //       });
  //   },
  //   { dependencies: [] }
  // );
  return (
    <Canvas>
      <OrbitControls />
      <Environment preset="dawn" background />

      <Perf />

      {/* <ParticleOrb /> */}
      {/* <GlowingSphere /> */}
      {newFunction()}

      <group rotation={[0, 0, Math.PI / 4]}>
        <Line
          points={pointsRef1.current}
          color="black"
          lineWidth={5}
          segments={false}
          dashed={false}
          vertexColors={[
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]}
          ref={lineRef1}
        />
        <Line
          points={pointsRef2.current}
          color="black"
          lineWidth={5}
          segments={false}
          dashed={false}
          vertexColors={[
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]}
          ref={lineRef2}
        />
        <Line
          points={pointsRef3.current}
          color="black"
          lineWidth={5}
          segments={false}
          dashed={false}
          vertexColors={[
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]}
          ref={lineRef3}
        />
        <Line
          points={pointsRef4.current}
          color="black"
          lineWidth={5}
          segments={false}
          dashed={false}
          vertexColors={[
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]}
          ref={lineRef4}
        />
      </group>

      {/* <EffectComposer> */}
      {/* <Bloom /> */}
      {/* <SelectiveBloom /> */}
      {/* </EffectComposer> */}

      {/* <Sphere>
        <meshStandardMaterial emissive={"red"} emissiveIntensity={1.5} />
      </Sphere> */}

      {/* <ShaderDevMesh /> */}
    </Canvas>
  );
}
export function TestBoard({ text = "Skill Issue" }) {
  return (
    <group>
      <Text
        color="orange"
        anchorX="center"
        anchorY="middle"
        position={[0, 3, 0]}
        scale={3}
      >
        {text}
      </Text>
      <Torus
        args={[1, 0.05, 64, 64]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0} />
      </Torus>
      <Torus
        args={[2, 0.05, 64, 64]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0.75, 0]}
      >
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0} />
      </Torus>
      <Torus
        args={[3, 0.05, 64, 64]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 1.5, 0]}
      >
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0} />
      </Torus>
    </group>
  );
}
