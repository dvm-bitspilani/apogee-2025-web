import React, { useEffect, useRef } from "react";
import { Image } from "@react-three/drei";
import gsap from "gsap";
import down from "../../../src/assets/Landing/down.png";

const Arrow = ({ basePosition, scale }) => {
  const arrows = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const masterTl = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 1.5,
        ease: "sine.inOut",
      },
    });

    const yOffsets = [0, 0.03, 0.06];
    const moveDistance = 0.025;
    const staggerDelay = 0.15;
    arrows.forEach((arrowRef, index) => {
      const arrowTl = gsap
        .timeline()
        .to(arrowRef.current.position, {
          y: basePosition[1] + yOffsets[index] + moveDistance,
          duration: 1.5,
          ease: "sine.inOut",
          
        })
        .to(
          arrowRef.current.position,
          {
            y: basePosition[1] + yOffsets[index],
            duration: 1.5,
            ease: "sine.inOut",
          },
          ">"
        );

      masterTl.add(arrowTl, index * staggerDelay);
    });

    return () => {
      masterTl.kill();
    };
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
