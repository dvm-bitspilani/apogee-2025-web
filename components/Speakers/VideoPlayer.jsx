import { useEffect, useMemo, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export function VideoPlayer({ videoSrc, position=[0,0,0],rotation=[0,0,0],scale=1,...props }) {
  const mesh=useRef();
  const [active,setActive]=useState(false);
  const previous=useRef(false);
  const poster=useTexture(videoSrc.replace('.mp4','.webp'));
  const [loaded,setLoaded]=useState(false);
  const video=useMemo(()=>{ const element=document.createElement('video');element.loop=true;element.muted=true;element.playsInline=true;element.preload='none';return element;},[]);
  const texture=useMemo(()=>{const value=new THREE.VideoTexture(video);value.colorSpace=THREE.SRGBColorSpace;return value;},[video]);
  const worldPosition=useMemo(()=>new THREE.Vector3(),[]);
  useFrame(({camera})=>{if(!mesh.current)return;mesh.current.getWorldPosition(worldPosition);const visible=camera.position.distanceTo(worldPosition)<35;if(visible!==previous.current){previous.current=visible;setActive(visible);}});
  useEffect(()=>{
    if(!active){video.pause();return;}
    const onLoaded=()=>{setLoaded(true);video.play().catch(()=>{});};
    video.addEventListener('loadeddata',onLoaded);
    if(!video.src){video.src=videoSrc;video.load();}else video.play().catch(()=>{});
    return ()=>{video.removeEventListener('loadeddata',onLoaded);video.pause();};
  },[active,video,videoSrc]);
  useEffect(()=>()=>{video.pause();video.removeAttribute('src');video.load();texture.dispose();},[video,texture]);
  return <group position={position} rotation={rotation} scale={scale} {...props}><mesh ref={mesh}><planeGeometry args={[3.2,1.8]} /><meshBasicMaterial map={loaded?texture:poster} toneMapped={false} side={THREE.FrontSide} /></mesh></group>;
}
