import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Sphere } from "@react-three/drei";

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
      <EffectComposer>
        <Bloom
          luminanceThreshold={luminanceThreshold}
          luminanceSmoothing={luminanceSmoothing}
          intensity={bloomIntensity}
        />
      </EffectComposer>

      <Sphere args={[0.1, 32, 32]}>
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
      </Sphere>
    </>
  );
}
