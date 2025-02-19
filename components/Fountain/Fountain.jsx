import * as THREE from "three";

import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Fountain() {
  const meltTexture = useTexture("/textures/Melt 1 - 128x128.png");
  meltTexture.wrapS = THREE.RepeatWrapping;
  meltTexture.wrapT = THREE.RepeatWrapping;

  const FountainMaterial = shaderMaterial(
    // Uniforms
    { uTime: 0, uPerlinTexture: meltTexture },
    // Vertex shader
    `
        varying vec2 vUv;

        void main() {
            vec4 modelPosition = modelMatrix * vec4(position , 1.0);

            // Final position
            gl_Position = projectionMatrix * viewMatrix * modelPosition;

            // Varyings
            vUv = uv;
        }
    `,
    // Fragment shader
    `
        uniform sampler2D uPerlinTexture;
        uniform float uTime;

        varying vec2 vUv;

        void main() {
            // Scale and Animate
            vec2 waterUv = vUv;
            waterUv.x *= 2.0;
            waterUv.y *= 0.2;
            waterUv.y += uTime * 0.4;

            // Water
            float water = texture(uPerlinTexture, waterUv).r;

            // Remap
            // water = smoothstep(0.05, 0.95, water);


            // Final Color
            gl_FragColor = vec4(1.0, 1.0, 1.0, water);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }
    `
  );

  extend({ FountainMaterial });

  const fountainMatRef = useRef();

  useFrame((state) => {
    fountainMatRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh>
      {/* <planeGeometry args={[15, 10]} /> */}
      <sphereGeometry />
      <fountainMaterial
        transparent
        // side={THREE.DoubleSide}
        ref={fountainMatRef}
      />
    </mesh>
  );
}
