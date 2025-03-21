// import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useMemo, useRef } from "react";
// import * as THREE from "three";
// import { Airplane } from "./Airplane";
// import { Background } from "./Background";
// import { Cloud } from "./Cloud";
// import { TextSection } from "./TextSection";
import { FloatingVideo } from "./FloatingText";

// const LINE_NB_POINTS = 12000;
// const CURVE_DISTANCE = 250;
// // const LINE_NB_POINTS = 1000;
// const CURVE_AHEAD_CAMERA = 0.008;
// const CURVE_AHEAD_AIRPLANE = 0.02;
// const AIRPLANE_MAX_ANGLE = 35;
// const FRICTION_DISTANCE = 42;

// export const Experience = () => {
//     const curve = useMemo(() => {
//         return new THREE.CatmullRomCurve3(
//             [
//                 new THREE.Vector3(0, 0, 0),
//                 new THREE.Vector3(0, 0, -10),
//                 new THREE.Vector3(-2, 0, -20),
//                 new THREE.Vector3(-3, 0, -30),
//                 new THREE.Vector3(0, 0, -40),
//                 new THREE.Vector3(5, 0, -50),
//                 new THREE.Vector3(7, 0, -60),
//                 new THREE.Vector3(5, 0, -70),
//                 new THREE.Vector3(0, 0, -80),
//                 new THREE.Vector3(0, 0, -90),
//                 new THREE.Vector3(0, 0, -100),
//             ],
//             false,
//             "catmullrom",
//             0.5
//         );
//     }, []);

//     const linePoints = useMemo(() => {
//         return curve.getPoints(LINE_NB_POINTS);
//     }, [curve]);

//     const shape = useMemo(() => {
//         const shape = new THREE.Shape();
//         shape.moveTo(0, -0.2);
//         shape.lineTo(0, 0.2);

//         return shape;
//     }, [curve]);

//     const cameraGroup = useRef();
//     const scroll = useScroll();

//     useFrame((_state, delta) => {
//         const curPointIndex = Math.min(
//             Math.round(scroll.offset * linePoints.length),
//             linePoints.length - 1
//         );
//         const curPoint = linePoints[curPointIndex];
//         const pointAhead =
//             linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

//         const xDisplacement = (pointAhead.x - curPoint.x) * 80;

//         // Math.PI / 2 -> LEFT
//         // -Math.PI / 2 -> RIGHT

//         const angleRotation =
//             (xDisplacement < 0 ? 1 : -1) *
//             Math.min(Math.abs(xDisplacement), Math.PI / 3);

//         const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
//             new THREE.Euler(
//                 airplane.current.rotation.x,
//                 airplane.current.rotation.y,
//                 angleRotation
//             )
//         );
//         const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
//             new THREE.Euler(
//                 cameraGroup.current.rotation.x,
//                 angleRotation,
//                 cameraGroup.current.rotation.z
//             )
//         );

//         airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
//         cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

//         cameraGroup.current.position.lerp(curPoint, delta * 24);
//     });

//     const airplane = useRef();

//     return (
//         <>
//             {/* <OrbitControls enableZoom={false} /> */}
//             <group ref={cameraGroup}>
//                 <Background />
//                 <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
//                 <group ref={airplane}>
//                     <Float floatIntensity={2} speed={2}>
//                         <Airplane
//                             rotation-y={Math.PI / 2}
//                             scale={[0.2, 0.2, 0.2]}
//                             position-y={0.1}
//                         />
//                     </Float>
//                 </group>
//             </group>

//             {/* LINE */}
//             <group position-y={-2}>
//                 <mesh>
//                     <extrudeGeometry
//                         args={[
//                             shape,
//                             {
//                                 steps: LINE_NB_POINTS,
//                                 bevelEnabled: false,
//                                 extrudePath: curve,
//                             },
//                         ]}
//                     />
//                     <meshStandardMaterial color={"white"} opacity={0.7} transparent />
//                 </mesh>
//             </group>

//             {/* CLOUDS */}
//             {/* <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
//       <Cloud opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
//       <Cloud
//         opacity={0.7}
//         scale={[0.3, 0.3, 0.4]}
//         rotation-y={Math.PI / 9}
//         position={[2, -0.2, -2]}
//       />
//       <Cloud
//         opacity={0.7}
//         scale={[0.4, 0.4, 0.4]}
//         rotation-y={Math.PI / 9}
//         position={[1, -0.2, -12]}
//       />
//       <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
//       <Cloud opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0, 1, -100]} /> */}
//             {/* <FloatingText opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
//             <FloatingText opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
//             <FloatingText
//                 opacity={0.7}
//                 scale={[0.3, 0.3, 0.4]}
//                 rotation-y={Math.PI / 9}
//                 position={[2, -0.2, -2]}
//             />
//             <FloatingText
//                 opacity={0.7}
//                 scale={[0.4, 0.4, 0.4]}
//                 rotation-y={Math.PI / 9}
//                 position={[1, -0.2, -12]}
//             />
//             <FloatingText opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
//             <FloatingText opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0, 1, -100]} /> */}
//             {/* <FloatingVideo  opacity={0.9} index={0} position={[1.5, -0.5, -2]} /> */}
//             {/* <FloatingVideo opacity={0.8} index={1} position={[-1.5, -0.2, -4]} /> */}
//             {/* <FloatingVideo opacity={0.7} index={2} position={[1, -0.2, -12]} /> */}
//             <FloatingVideo opacity={0.6} index={3} position={[-1, 1, -53]} />
//             <FloatingVideo opacity={0.5} index={4} position={[0, 1, -100]} />
//         </>
//     );
// };

import { Float, PerspectiveCamera, Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Group } from "three";
import { Airplane } from "./Airplane";
import { Background } from "./Background";
import { Cloud } from "./Cloud";

const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;

export const Experience = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
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

    // Airplane rotation

    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
  });

  const airplane = useRef();

  return (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      {/* <OrbitControls /> */}
      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        <group ref={airplane}>
          <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
            {/* <Airplane
              rotation-y={Math.PI / 2}
              scale={[0.2, 0.2, 0.2]}
              position-y={0.1}
            /> */}
            <FloatingVideo opacity={0.8} index={1} />
          </Float>
        </group>
      </group>
      {/* TEXT */}
      {/* <group position={[-3, 0, -100]}>
        <FloatingVideo  opacity={0.9} index={0} position={[1.5, -0.5, -2]} />
      </group>

      <group position={[-3, 0, -600]}>
        <FloatingVideo opacity={0.8} index={1} position={[3.5, 0.5, -10]} />
      </group> */}

      {/* LINE */}
      <group position-y={-2}>
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
      </group>

      {/* CLOUDS */}
      {/* <Cloud scale={[1, 1, 1.5]} position={[-3.5, -1.2, -7]} />
      <Cloud scale={[1, 1, 2]} position={[3.5, -1, -10]} rotation-y={Math.PI} />
      <Cloud
        scale={[1, 1, 1]}
        position={[-3.5, 0.2, -12]}
        rotation-y={Math.PI / 3}
      />
      <Cloud scale={[1, 1, 1]} position={[3.5, 0.2, -12]} />

      <Cloud
        scale={[0.4, 0.4, 0.4]}
        rotation-y={Math.PI / 9}
        position={[1, -0.2, -12]}
      />
      <Cloud scale={[0.3, 0.5, 2]} position={[-4, -0.5, -53]} />
      <Cloud scale={[0.8, 0.8, 0.8]} position={[-1, -1.5, -100]} /> */}
    </>
  );
};

