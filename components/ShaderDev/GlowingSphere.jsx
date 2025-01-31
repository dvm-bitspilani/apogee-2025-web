import React, { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Custom ShaderMaterial for fake bloom
const FakeBloomMaterial = shaderMaterial(
  {
    uTime: { value: 0 },
    glowIntensity: { value: 2.0 },
    glowRadius: { value: 0.5 },
  },
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position , 1.0);

        gl_Position = projectionMatrix * viewMatrix * modelPosition;

        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

        vUv = uv;
        vNormal = modelNormal.xyz;
        vPosition = modelPosition.xyz;
    }
  `,
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    uniform float uTime;
    uniform float glowIntensity;
    uniform float glowRadius;

    void main() {
        // Normal
        vec3 normal = normalize(vNormal);

        // Glow
        vec3 viewDirection = normalize(vPosition - cameraPosition);
        float dotProd = 1.0 - cos(dot(viewDirection, normal));

        gl_FragColor = vec4(dotProd, dotProd, dotProd, 1.0);
    }
  `
);

extend({ FakeBloomMaterial });

const GlowingSphere = () => {
  const shaderRef = useRef();

  // Animate the shader's time uniform
  useFrame(({ clock }) => {
    shaderRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <Sphere args={[1, 64, 64]} scale={[2, 2, 2]}>
      <fakeBloomMaterial ref={shaderRef} transparent />
    </Sphere>
  );
};

export default GlowingSphere;
