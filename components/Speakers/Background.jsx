// import { Environment, Sphere } from "@react-three/drei";
// import { Gradient, LayerMaterial } from "lamina";

// import * as THREE from "three";

// export const Background = () => {
//   const colorA = "#0923be";
//   const colorB = "#ffad30";
//   const start = 0.2;
//   const end = -0.5;
//   return (
//     <>
//       <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
//         <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
//           <Gradient
//             colorA={colorA}
//             colorB={colorB}
//             axes={"y"}
//             start={start}
//             end={end}
//           />
//         </LayerMaterial>
//       </Sphere>
//       <Environment resolution={256}>
//         <Sphere
//           scale={[100, 100, 100]}
//           rotation-y={Math.PI / 2}
//           rotation-x={Math.PI}
//         >
//           <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
//             <Gradient
//               colorA={colorA}
//               colorB={colorB}
//               axes={"y"}
//               start={start}
//               end={end}
//             />
//           </LayerMaterial>
//         </Sphere>
//       </Environment>
//     </>
//   );
// };

import { Plane } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export const Background = () => {
  const texture = useLoader(TextureLoader, "/images/speakersBackground.png");

  return (
    <Plane args={[400, 400]} position={[0, 0, -300]}>
      <meshBasicMaterial map={texture} />
    </Plane>
  );
};