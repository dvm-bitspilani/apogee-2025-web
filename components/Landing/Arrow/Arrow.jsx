import React, { useEffect, useRef } from "react";
import { Image } from "@react-three/drei";
import gsap from "gsap";
import down from "../../../src/assets/Landing/down.png";

const Arrow = ({ basePosition, scale }) => {
  const arrows = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1, ease: "power1.inOut" },
    });

    const yOffsets = [0, 0.03, 0.06];
    const moveDistance = 0.02;

    arrows.forEach((arrowRef, index) => {
      tl.to(
        arrowRef.current.position,
        {
          y: basePosition[1] + yOffsets[index] + moveDistance,
          duration: 1,
          ease: "power1.inOut",
        },
        index * 0.2
      ).to(
        arrowRef.current.position,
        {
          y: basePosition[1] + yOffsets[index],
          duration: 1,
          ease: "power1.inOut",
        },
        `>-0.5`
      );
    });

    // return () => {
    //   tl.kill();
    // };
  }, [basePosition]);

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
            basePosition[2],
          ]}
          scale={scale}
          transparent
        />
      ))}
    </group>
  );
};

export default Arrow;
