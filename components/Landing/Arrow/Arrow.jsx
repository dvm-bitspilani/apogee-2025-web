import React, { useRef } from "react";
import { Image } from "@react-three/drei";
import gsap from "gsap";
import down from "../../../src/assets/Landing/down.png";
import { useGSAP } from "@gsap/react";
import { DoubleSide } from "three";

const Arrow = ({ basePosition, scale }) => {
  const arrows = [useRef(), useRef(), useRef()];

  useGSAP(
    () => {
      arrows.forEach((arrowRef, index) => {
        gsap.to(arrowRef.current.position, {
          y: basePosition[1] + index * 0.03 + 0.035,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "back.inOut",
          delay: index * 0.15,
        });
      });
    },
    { dependencies: [basePosition] }
  );

  return (
    <group>
      {arrows.map((ref, index) => (
        <Image
          key={index}
          ref={ref}
          url={down}
          position={[
            basePosition[0],
            basePosition[1] + index * 0.03,
            basePosition[2] + index * 0.001,
          ]}
          scale={scale}
          transparent
          side={DoubleSide}
        />
      ))}
    </group>
  );
};

export default Arrow;
