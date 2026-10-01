import { useEffect, useMemo, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useDocumentVisible from "../../src/ui/useDocumentVisible";
export function VideoPlayer({ videoSrc, position=[0,0,0],rotation=[0,0,0],scale=1,...props }) {
  const mesh=useRef();
  const documentVisible=useDocumentVisible();
  const elapsed=useRef(0);
  const [active,setActive]=useState(false);
  const previous=useRef(false);
  const poster=useTexture(videoSrc.replace('.mp4','.webp'));
  const [loaded,setLoaded]=useState(false);
  const video=useMemo(()=>{ const element=document.createElement('video');element.loop=true;element.muted=true;element.playsInline=true;element.preload='none';return element;},[]);
  const texture=useMemo(()=>{const value=new THREE.VideoTexture(video);value.colorSpace=THREE.SRGBColorSpace;return value;},[video]);
  const worldPosition=useMemo(()=>new THREE.Vector3(),[]);
  useFrame(({camera},delta)=>{elapsed.current+=delta;if(elapsed.current<0.1||!mesh.current)return;elapsed.current=0;mesh.current.getWorldPosition(worldPosition);const visible=camera.position.distanceToSquared(worldPosition)<1225;if(visible!==previous.current){previous.current=visible;setActive(visible);}});
  useEffect(()=>{
    if(!active || !documentVisible){video.pause();return;}
    const onLoaded=()=>{setLoaded(true);video.play().catch(()=>{});};
    video.addEventListener('loadeddata',onLoaded);
    if(!video.src){video.src=videoSrc;video.load();}else video.play().catch(()=>{});
    return ()=>{video.removeEventListener('loadeddata',onLoaded);video.pause();};
  },[active,documentVisible,video,videoSrc]);
  useEffect(()=>()=>{video.pause();video.removeAttribute('src');video.load();texture.dispose();},[video,texture]);
  return <group position={position} rotation={rotation} scale={scale} {...props}><mesh ref={mesh}><planeGeometry args={[3.2,1.8]} /><meshBasicMaterial map={loaded?texture:poster} toneMapped={false} side={THREE.FrontSide} /></mesh></group>;
}
