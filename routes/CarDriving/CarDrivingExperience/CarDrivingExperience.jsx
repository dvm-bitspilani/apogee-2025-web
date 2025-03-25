import { Environment, OrbitControls } from "@react-three/drei";
import { CarModel } from "../CarModel/CarModel";
import { Physics } from "@react-three/rapier";
import { CityModel } from "../CityModel/CityModel";
import EnergyOrb from "../../../components/EnergyOrb/EnergyOrb";
import { useControls } from "leva";
import CharacterController from "../CarModel/CharacterController";

export default function CarDrivingExperience() {
  const { orbPos, orbScale, carPos, carRot, carScale } = useControls({
    orbPos: { value: [-0.5, 41, 0], step: 0.1 },
    orbScale: { value: 38, step: 0.1 },
    carPos: { value: [-19.6, 0, 0], step: 0.1 },
    carScale: { value: 2, step: 0.1 },
    carRot: { value: [0, 0, 0], step: 0.1 },
  });
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
      <group position={orbPos} scale={orbScale}>
        <EnergyOrb color="orange" lightIntensity={3} />
      </group>
      <Physics debug>
        <CharacterController
          carPos={carPos}
          carRot={carRot}
          carScale={carScale}
        />
        <CityModel />
      </Physics>
    </>
  );
}
