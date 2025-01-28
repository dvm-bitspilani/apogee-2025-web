import React, { useRef, useMemo } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Vertex shader for sphere particles
const vertexShader = `
    void main(){
        // Final position
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position = projectionMatrix * viewPosition;

        // Final Size
        gl_PointSize = 20.0;
    }
`;

// Fragment shader for particles
const fragmentShader = `
`;

// Create custom shader material
const ParticleOrbMaterial = shaderMaterial(
  {
    uTime: 0,
    uRadius: 0.000001,
    uAnimationSpeed: 1,
  },
  vertexShader,
  fragmentShader
);

extend({ ParticleOrbMaterial });

const ParticleOrb = ({ count = 100 }) => {
  const [positions] = useMemo(() => {
    // Geometry
    const positionsArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positionsArray[i3 + 0] = Math.random() - 0.5;
      positionsArray[i3 + 1] = Math.random() - 0.5;
      positionsArray[i3 + 2] = Math.random() - 0.5;
    }

    return [positionsArray];
  }, [count]);

  return (
    <points>
      {/* <boxGeometry /> */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
        <pointsMaterial />
      </bufferGeometry>
    </points>
  );
};

export default ParticleOrb;
