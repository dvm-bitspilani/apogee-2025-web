import { useGSAP } from "@gsap/react";
import { Line } from "@react-three/drei";
import { useRef } from "react";

export default function Lines() {
  const pointsRef1 = useRef();
  const lineRef1 = useRef();

  useGSAP(() => {}, { dependencies: [] });

  return (
    <>
      <Line
        points={pointsRef1.current}
        color="black"
        lineWidth={5}
        segments={false}
        dashed={false}
        vertexColors={[
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]}
        ref={lineRef1}
      />
    </>
  );
}
