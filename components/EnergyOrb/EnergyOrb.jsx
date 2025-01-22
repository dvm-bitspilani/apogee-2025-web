import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { shaderMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

const OuterGlowRadial = shaderMaterial(
  // Uniforms
  {
    uColor: new THREE.Color("orange"),
  },
  // Vertex
  `
    varying vec3 vNormal;
    varying vec3 vPosition;

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

extend({ OuterGlowRadial });

export default function EnergyOrb({
  luminanceThreshold = 0.2,
  luminanceSmoothing = 0.9,
  bloomIntensity = 0.5,
  color = "red",
  emissiveIntensity = 4,
  lightIntensity = 2,
}) {
  return (
    <>
      {/* <EffectComposer>
        <Bloom
          luminanceThreshold={luminanceThreshold}
          luminanceSmoothing={luminanceSmoothing}
          intensity={bloomIntensity}
        />
      </EffectComposer> */}

      {/* <Sphere args={[0.1, 32, 32]}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          toneMapped={false}
        />
        <pointLight
          position={[0, 0.05, 0]}
          intensity={lightIntensity}
          color={color}
        />
      </Sphere> */}

      <Sphere args={[0.1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
        />
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
