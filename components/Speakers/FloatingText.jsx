// import React from "react";
// import { Text } from "@react-three/drei";

// export function FloatingText({ opacity, ...props }) {
//   return (
//     <Text
//       {...props}
//       fontSize={1}
//       color="white"
//       anchorX="center"
//       anchorY="middle"
//       outlineWidth={0.05}
//       outlineColor="black"
//       fillOpacity={opacity}
//     >
//       See More
//     </Text>
//   );
// }

// import React, { useRef, useEffect } from "react";
// import { Html } from "@react-three/drei";
import manas from "../../public/videos/akbar.mp4";
// // import styles from "./VideoPlayer.module.css"; // Ensure you have relevant styles

// export function FloatingVideo({ opacity, index, ...props }) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <group position={[0, -index * 2, 0]} {...props}>
//       <Html center>
//         <video
//           ref={videoRef}
//           src={manas}
//           muted
//           controls
//           loop
//           style={{ opacity, height: "400px" }}
//         >
//           Your browser does not support the video tag.
//         </video>
//       </Html>
//     </group>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function FloatingVideo({ opacity, index, ...props }) {
  const videoRef = useRef(null);
  const groupRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Listen to scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust z-position based on scroll (videos move out as you scroll down)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z = -index * 10 + scrollY * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} {...props}>
      <Html center>
        <video
          ref={videoRef}
          src={manas}
          muted
          controls
          loop
          style={{ opacity, height: "400px" }}
        >
          Your browser does not support the video tag.
        </video>
      </Html>
    </group>
  );
}

