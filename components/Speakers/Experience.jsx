import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Background } from "./Background";
import { VideoPlayer } from "./VideoPlayer";

// import { OrbitControls } from "@react-three/drei";
// import { Html } from "@react-three/drei";

import abhay from "/videos/abhay.mp4";
import vijender from "/videos/vijender.mp4";
import akbar from "/videos/akbar.mp4";
import elenla from "/videos/elenla.mp4";
import shivshankar from "/videos/shivshankar.mp4";

const CURVE_DISTANCE = 50;
const CURVE_AHEAD_CAMERA = 0.008;

export const SpeakerExperience = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-100, 0, 0), // Start from extreme left
        new THREE.Vector3(-80, 0, -CURVE_DISTANCE),
        new THREE.Vector3(-50, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(-10, 0, -3 * CURVE_DISTANCE),
        // new THREE.Vector3(10, 0, -4 * CURVE_DISTANCE),
        // new THREE.Vector3(40, 0, -5 * CURVE_DISTANCE), // Ends towards right
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);

    const curPoint = curve.getPoint(scrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );
  });


  return (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      {/* <OrbitControls /> */}
      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        <group>
          <Float>
            {/* <Airplane
              rotation-y={Math.PI / 2}
              scale={[0.2, 0.2, 0.2]}
              position-y={0.1}
            /> */}
          </Float>
        </group>
      </group>

      <group
        scale={1.5}
        position={[-99.3, -0.6, -10]}
        rotation={[0, Math.PI / -10, 0]}
      >
        <VideoPlayer videoSrc={vijender} />
      </group>

      <group
        scale={1.6}
        position={[-84, -0.6, -40]}
        rotation={[0, Math.PI / -10, 0]}
      >
        <VideoPlayer videoSrc={akbar} />
      </group>

      <group
        scale={1.6}
        position={[-64.5, -0.6, -70]}
        rotation={[0, Math.PI / -6, 0]}
      >
        <VideoPlayer videoSrc={elenla} />
      </group>

      <group
        scale={1.6}
        position={[-43, -0.8, -100]}
        rotation={[0, Math.PI / -6, 0]}
      >
        <VideoPlayer videoSrc={shivshankar} />
      </group>

      <group
        scale={1.85}
        position={[-4, -0.8, -155]}
        rotation={[0, Math.PI / -5, 0]}
      >
        <VideoPlayer videoSrc={akbar} />
      </group>

      {/* LINE */}
      {/* <group position-y={-2}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial
            color={"white"}
            opacity={1}
            transparent
            envMapIntensity={2}
          />
        </mesh>
      </group> */}
    </>
  );
};
