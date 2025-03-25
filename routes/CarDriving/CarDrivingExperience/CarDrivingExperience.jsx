import { Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { CityModel } from "../CityModel/CityModel";
import EnergyOrb from "../../../components/EnergyOrb/EnergyOrb";
import CharacterController from "../CarModel/CharacterController";

export default function CarDrivingExperience() {
  return (
    <>
      {/* <OrbitControls /> */}
      <Environment
        files="/environments/sunset1by16Orange.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
        resolution={128}
      />
      <ambientLight intensity={1} />
      <group position={[-0.5, 41, 0]} scale={38}>
        <EnergyOrb color="orange" lightIntensity={3} />
      </group>
      <Physics>
        <CharacterController />
        <CityModel />
      </Physics>
    </>
  );
}
