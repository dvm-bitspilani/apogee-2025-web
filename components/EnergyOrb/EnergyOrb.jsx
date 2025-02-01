import { shaderMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const GLITCH_STRENGTH_FACTOR = 0.025;

const OuterGlowRadial = shaderMaterial(
  // Uniforms
  {
    uColor: new THREE.Color("orange"),
  },
  // Vertex
  `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;

    float random2D(vec2 value)
    {
        return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main(){
        // Position
        vec4 modelPosition = modelMatrix * vec4(position , 1.0);

        // Glitch
        // float glitchTime = uTime - modelPosition.y;
        // float glitchStrength = sin(glitchTime) + sin(glitchTime * 3.45) + sin(glitchTime * 8.76);
        // glitchStrength /= 3.0;
        // glitchStrength = smoothstep(0.3, 1.0, glitchStrength);
        // glitchStrength *= ${GLITCH_STRENGTH_FACTOR};
        // modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;
        // modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;

        // Final position
        gl_Position = projectionMatrix * viewMatrix * modelPosition;

        // Model normal
        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

        // Varyings
        vPosition = modelPosition.xyz;
        vNormal = modelNormal.xyz;
    }
  `,
  // Fragment
  `
    varying vec3 vPosition;
    varying vec3 vNormal;

    uniform vec3 uColor;

    float a = 1.0;
    float b = 0.0;
    float c = 2.1;

    void main(){
        // Normal
        vec3 normal = normalize(vNormal);

        // Fresnel
        vec3 viewDirection = normalize(vPosition - cameraPosition);
        float fresnel = abs(pow(dot(viewDirection, normal), a) + b);
        fresnel = tan(pow(fresnel, c));

        gl_FragColor = vec4(uColor, fresnel);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
  `
);

const SphereMaterial = shaderMaterial(
  // Uniforms
  { uTime: new THREE.Uniform(0), uColor: new THREE.Color("yellow") },
  // Vertex
  `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;

    float random2D(vec2 value)
    {
        return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float random3D(vec3 value) 
    {
        vec3 dotVec = vec3(12.9898, 78.233, 37.719);
        return fract(sin(dot(value.xyz, dotVec)) * 43758.5453123);
    }

    void main(){
        // Position
        vec4 modelPosition = modelMatrix * vec4(position , 1.0);

        // Glitch
        float glitchTime = uTime - modelPosition.y;
        float glitchStrength = sin(glitchTime) + sin(glitchTime * 3.45) + sin(glitchTime * 8.76);
        glitchStrength /= 3.0;
        glitchStrength = smoothstep(0.3, 0.8, glitchStrength);
        glitchStrength *= ${GLITCH_STRENGTH_FACTOR};
        modelPosition.x += (random3D(modelPosition.xyz + uTime) - 0.5) * glitchStrength;
        modelPosition.z += (random3D(modelPosition.zxy + uTime) - 0.5) * glitchStrength;
        modelPosition.y += (random3D(modelPosition.yzx + uTime) - 0.5) * glitchStrength;

        // Final position
        gl_Position = projectionMatrix * viewMatrix * modelPosition;

        // Model normal
        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

        // Varyings
        vPosition = modelPosition.xyz;
        vNormal = modelNormal.xyz;
    }
  `,
  // Fragment
  `
    uniform vec3 uColor;
    varying vec3 vPosition;

    void main(){
        gl_FragColor = vec4(uColor, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
  `
);

extend({ OuterGlowRadial, SphereMaterial });

export default function EnergyOrb({
  luminanceThreshold = 0.2,
  luminanceSmoothing = 0.9,
  bloomIntensity = 0.5,
  color = "red",
  emissiveIntensity = 4,
  lightIntensity = 2,
  isBloom = false,
}) {
  const sphereMatRef = useRef();
  useFrame((state) => {
    sphereMatRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <>
      <Sphere args={[0.1, 64, 64]} position={[0, 0, 0]}>
        <sphereMaterial ref={sphereMatRef} transparent />
        <pointLight
          color={color}
          position={[0, 0.05, 0]}
          intensity={lightIntensity}
        />
      </Sphere>

      <Sphere args={[0.12, 32, 32]} position={[0, 0, 0]}>
        <outerGlowRadial transparent blending={THREE.AdditiveBlending} />
      </Sphere>
    </>
  );
}
