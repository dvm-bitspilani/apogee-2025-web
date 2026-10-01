import "./dracoConfig";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import Experience from "../Experience/Experience";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Navbar from "./Navbar/Navbar";
import Overlay from "../Overlay/Overlay";
import Menu from "./Menu/Menu";
import LandingArtwork from "./LandingArtwork";
import useDocumentVisible from "../../src/ui/useDocumentVisible";

function CanvasLifecycle({ onFailure }) {
  const { gl } = useThree();
  useEffect(() => {
    const canvas = gl.domElement;
    const fail = event => { event.preventDefault(); onFailure(); };
    canvas.addEventListener("webglcontextlost", fail);
    return () => canvas.removeEventListener("webglcontextlost", fail);
  }, [gl, onFailure]);
  return null;
}

export default function CityCanvas({ onFailure }) {
  const allowed = useSelector(state => state.experienceAnimations.isPointerEventsAllowed);
  const visible = useDocumentVisible();
  return <><Overlay /><Navbar /><Menu />
    <Canvas id="landingExperience" dpr={[1, 1.25]} frameloop={visible ? "always" : "never"}
      gl={{ powerPreference: "high-performance" }} camera={{ position: [0, 2.5, 0], fov: 50, zoom: window.innerWidth < 850 ? 0.5 : 1 }}
      style={{ pointerEvents: allowed ? "auto" : "none" }} fallback={<LandingArtwork />}>
      <CanvasLifecycle onFailure={onFailure} />
      <Suspense fallback={<LoadingScreen />}><Experience /></Suspense>
    </Canvas>
  </>;
}
