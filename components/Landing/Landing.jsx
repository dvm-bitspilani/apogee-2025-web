import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";
import ErrorBoundary from "../../src/ui/ErrorBoundary";
import LandingArtwork from "./LandingArtwork";
const CityCanvas = lazy(() => import("./CityCanvas"));
function canRenderWebGL() {
  try { const canvas = document.createElement("canvas"); const context = canvas.getContext("webgl2") || canvas.getContext("webgl"); if (!context) return false; context.getExtension("WEBGL_lose_context")?.loseContext(); return true; } catch { return false; }
}
export default function Landing() {
  const dispatch = useDispatch();
  const [available] = useState(canRenderWebGL);
  const [enter, setEnter] = useState(true);
  useEffect(() => { dispatch(experienceAnimationsActions.resetState()); return () => dispatch(experienceAnimationsActions.resetState()); }, [dispatch]);
  return <><Helmet><title>APOGEE 2025 | Revved-Up Rhapsody</title><link rel="canonical" href="https://apogee2025.bits-apogee.org/" /></Helmet>
    {available && enter ? <ErrorBoundary fallback={<LandingArtwork />}><Suspense fallback={<LandingArtwork />}><CityCanvas onFailure={()=>setEnter(false)} /></Suspense></ErrorBoundary> : <LandingArtwork />}
  </>;
}
