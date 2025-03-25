import { RigidBody } from "@react-three/rapier";
import { CarModel } from "./CarModel";

export default function CharacterController({ carPos, carRot, carScale }) {
  return (
    <RigidBody colliders="hull">
      <CarModel position={carPos} rotation={carRot} scale={carScale} />
    </RigidBody>
  );
}
