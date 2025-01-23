import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const CloudShaderMaterial = shaderMaterial(
  // Uniforms
  {},
  // Vertex
  ``,
  // Fragment
  ``
);

extend({ CloudShaderMaterial });

export default function Clouds({ args }) {
  return (
    <mesh>
      <planeGeometry args={args} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
