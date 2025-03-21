import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function VideoPlayer({ videoSrc, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }) {
  const meshRef = useRef();
  const [loaded, setLoaded] = useState(false);
  
  // Create video element
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
  
  // Ensure video plays when the component mounts
  useEffect(() => {
    // Try to start playback
    video.muted = true;
    const playPromise = video.play();
    
    // Catch and handle any autoplay restrictions
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented by browser", error);
        
        // Set up event listener to try playing on user interaction
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
  
  // Cloud model for decorative frame
  const { nodes } = useGLTF("./models/cloud/model.glb");
  const cloudOpacity = 0.7;

  return (
    <group position={position} rotation={rotation} scale={scale} {...props}>
      {/* Video Screen */}
      <mesh 
        ref={meshRef}
        position={[0, 0, 0.1]}
      >
        <planeGeometry args={[3.2, 1.8]} />
        <meshBasicMaterial map={videoTexture} toneMapped={false} side={THREE.FrontSide} />
      </mesh>
      
      {/* Cloud frame */}
      {/* <group position={[0, 0, 0]} scale={[1.8, 1.1, 0.4]}>
        <mesh geometry={nodes.Node.geometry}>
          <meshStandardMaterial
            envMapIntensity={2}
            transparent
            opacity={cloudOpacity}
            color="#ffffff"
          />
        </mesh>
      </group> */}
    </group>
  );
}

// Cloud component (your existing code)
export function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("./models/cloud/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

// Preload assets
useGLTF.preload("./models/cloud/model.glb");