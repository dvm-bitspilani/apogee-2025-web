import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";
import ErrorBoundary from "../../src/portfolio/ErrorBoundary";
const CityCanvas = lazy(() => import("./CityCanvas"));
function canRenderWebGL() {
  try { const canvas = document.createElement("canvas"); const context = canvas.getContext("webgl2") || canvas.getContext("webgl"); if (!context) return false; context.getExtension("WEBGL_lose_context")?.loseContext(); return true; } catch { return false; }
}
function CityFallback({ onEnter, reason }) {
  return <main className="city-fallback"><img src="/images/logo.svg" alt="APOGEE 2025" /><h1>Revved-Up Rhapsody</h1><p>{reason}</p>
    <p>The original 3D city is available on compatible devices. Every archived page can also be explored directly.</p>
    {onEnter && <button onClick={onEnter}>Explore the 3D city</button>}
    <nav aria-label="Explore the portfolio">{[['/about','About'],['/events','Events'],['/speakers','Speakers'],['/registration','Registration demo'],['/developers','Developers']].map(([to,label])=><Link key={to} to={to}>{label}</Link>)}</nav>
  </main>;
}
export default function Landing() {
  const dispatch = useDispatch();
  const [available] = useState(canRenderWebGL);
  const [enter, setEnter] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => { dispatch(experienceAnimationsActions.resetState()); return () => dispatch(experienceAnimationsActions.resetState()); }, [dispatch]);
  return <><Helmet><title>APOGEE 2025 — DVM Portfolio Archive</title><link rel="canonical" href="https://apogee2025.bits-apogee.org/" /></Helmet>
    {available && enter ? <ErrorBoundary fallback={<CityFallback reason="The city could not load on this device." />}><Suspense fallback={<CityFallback reason="Opening the original city…" />}><CityCanvas onFailure={()=>setEnter(false)} /></Suspense></ErrorBoundary> : <CityFallback reason={available ? 'Motion is reduced on your device.' : 'WebGL is unavailable on your device.'} onEnter={available ? ()=>setEnter(true) : undefined} />}
  </>;
}
