import { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LightningSphereShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: new THREE.Uniform(0),
    uColor: new THREE.Color("orange"),
  },
  // Vertex shader
  `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;

      void main(){
          // Position
          vec4 modelPosition = modelMatrix * vec4(position , 1.0);

          // Final position
          gl_Position = projectionMatrix * viewMatrix * modelPosition;

          // Model normal
          vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

          // Varyings
          vPosition = modelPosition.xyz;
          vNormal = modelNormal.xyz;
          vUv = uv;
      }
    `,
  // Fragment shader
  `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
  
      uniform vec3 uColor;
      uniform float uTime;
  
      void main(){
          // Normal
          vec3 normal = normalize(vNormal);

          // Line Parameters
          float lineWidth = 0.0005;
          float lineSpeed = 2.0;
          float lineFrequency = 0.75;

          float alpha = step(1.0 - lineWidth, sin((vUv.y * 10.0 - uTime * lineSpeed) * lineFrequency));

          gl_FragColor = vec4(uColor, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
      }
    `
);

extend({ LightningSphereShaderMaterial });

export default function ShaderDevMesh() {
  const lightningMatRef = useRef();

  useFrame((state) => {
    lightningMatRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      {/* <meshBasicMaterial color="hotpink" /> */}
      <lightningSphereShaderMaterial
        transparent
        side={THREE.DoubleSide}
        ref={lightningMatRef}
      />
    </mesh>
  );
}
