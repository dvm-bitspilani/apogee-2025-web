import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function VideoPlayer({ videoSrc, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }) {
  const meshRef = useRef();
  const [loaded, setLoaded] = useState(false);
  
  const video = React.useMemo(() => {
    const vid = document.createElement("video");
    vid.src = videoSrc;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true; // For autoplay to work reliably across browsers
    vid.playsInline = true;
    vid.autoplay = true;
    vid.controls = true;
    vid.addEventListener('loadeddata', () => {
      setLoaded(true);
      vid.play().catch(e => console.error("Autoplay failed", e));
    });
    return vid;
  }, [videoSrc]);
  
  // Create video texture
  const videoTexture = React.useMemo(() => {
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    return texture;
  }, [video]);
  
  useEffect(() => {
    video.muted = true;
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented by browser", error);
        
        const attemptPlay = () => {
          video.play();
          document.removeEventListener('click', attemptPlay);
          document.removeEventListener('touchstart', attemptPlay);
        };
        
        document.addEventListener('click', attemptPlay);
        document.addEventListener('touchstart', attemptPlay);
      });
    }
    
    // Clean up on unmount
    return () => {
      video.pause();
      video.remove();
    };
  }, [video]);

  return (
    <group position={position} rotation={rotation} scale={scale} {...props}>
      <mesh 
        ref={meshRef}
        position={[0, 0, 0.1]}
      >
        <planeGeometry args={[3.2, 1.8]} />
        <meshBasicMaterial map={videoTexture} toneMapped={false} side={THREE.FrontSide} />
      </mesh>
    </group>
  );
}