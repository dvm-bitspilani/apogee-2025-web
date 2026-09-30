import "./dracoConfig";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Experience from "../Experience/Experience";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Navbar from "./Navbar/Navbar";
import Overlay from "../Overlay/Overlay";
import Menu from "./Menu/Menu";
function Ready({ onReady }) { useEffect(onReady, [onReady]); return null; }
export default function CityCanvas({ onFailure }) {
  const allowed = useSelector(state=>state.experienceAnimations.isPointerEventsAllowed);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);
  useEffect(() => { if(ready) return; const timer=setTimeout(()=>setSlow(true),12000); return ()=>clearTimeout(timer); }, [ready]);
  return <><Overlay /><Navbar /><Menu />{slow && !ready && <div className="city-slow" role="status">City assets are taking a while. <button onClick={onFailure}>Explore without 3D</button></div>}
    <Canvas id="landingExperience" dpr={[1,1.25]} camera={{ position:[0,2.5,0],fov:50,zoom:window.innerWidth<850?0.5:1 }} style={{ pointerEvents:allowed?'auto':'none' }} fallback={<p className="archive-loading">3D is unavailable. Use the archive menu to explore.</p>} onCreated={({gl})=>gl.domElement.addEventListener('webglcontextlost',onFailure,{once:true})}>
      <Suspense fallback={<LoadingScreen />}><Experience /><Ready onReady={()=>setReady(true)} /></Suspense>
    </Canvas>
  </>;
}
