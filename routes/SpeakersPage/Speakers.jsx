import { lazy, Suspense, useState } from "react";
import { Link } from "react-router";
import ErrorBoundary from "../../src/ui/ErrorBoundary";
import SpeakerStrip from "./SpeakersPage";
const DesktopSpeakers = lazy(() => import("./DesktopSpeakers"));
function supportsWebGL() {
  try { const canvas=document.createElement('canvas');const context=canvas.getContext('webgl2')||canvas.getContext('webgl');if(!context)return false;context.getExtension('WEBGL_lose_context')?.loseContext();return true; } catch { return false; }
}
export default function Speakers() {
  const [use3D] = useState(() => window.innerWidth >= 850 && !window.matchMedia('(prefers-reduced-motion:reduce)').matches && supportsWebGL());
  const fallback = <><Link className="page-home" to="/">← City</Link><SpeakerStrip /></>;
  return use3D ? <ErrorBoundary fallback={fallback}><Suspense fallback={fallback}><DesktopSpeakers /></Suspense></ErrorBoundary> : fallback;
}
