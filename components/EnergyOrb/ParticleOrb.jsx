import React, { useRef, useMemo, useEffect } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Initialize sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

sizes.resolution = new THREE.Vector2(sizes.width, sizes.height);

// Define the custom shader material
const ParticleOrbMaterial = shaderMaterial(
  {
    uSize: 0.1, // Uniform for point size
    uResolution: sizes.resolution, // Uniform for resolution
  },
  `
    uniform float uSize;
    uniform vec2 uResolution;

    void main(){
        // Final position
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position = projectionMatrix * viewPosition;

        // Final Size (scaled by resolution and distance)
        gl_PointSize = uSize * uResolution.y;
        gl_PointSize *= 1.0 / -viewPosition.z;
    }
`,
  `
    void main(){
        // Final color (magenta)
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
`
);

extend({ ParticleOrbMaterial });

const ParticleOrb = ({ count = 100 }) => {
  const materialRef = useRef();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      sizes.resolution.set(sizes.width, sizes.height);

      // Update the uResolution uniform in the shader material
      if (materialRef.current) {
        materialRef.current.uniforms.uResolution.value = sizes.resolution;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate random positions for particles
  const positionsArray = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3 + 0] = (Math.random() - 0.5) * 2;
      array[i3 + 1] = (Math.random() - 0.5) * 2;
      array[i3 + 2] = (Math.random() - 0.5) * 2;
    }
    return array;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positionsArray}
        />
      </bufferGeometry>
      <particleOrbMaterial ref={materialRef} />
    </points>
  );
};

export default ParticleOrb;
