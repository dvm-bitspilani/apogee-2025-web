import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import ArchiveBar from "./portfolio/ArchiveBar.jsx";
import ErrorBoundary from "./portfolio/ErrorBoundary.jsx";
const Landing = lazy(() => import("../components/Landing/Landing.jsx"));
const Registration = lazy(() => import("../components/Registration/Instructions/Instruction.jsx"));
const Contact = lazy(() => import("../routes/ContactPage/ContactPage.jsx"));
const Quantaculus = lazy(() => import("../routes/Quantaculus.jsx"));
const Submitted = lazy(() => import("../routes/QuantaculusSubmitted.jsx"));
const Speakers = lazy(() => import("../routes/SpeakersPage/Speakers.jsx"));
const Sponsors = lazy(() => import("../components/Sponsors/Sponsors.jsx"));
const Media = lazy(() => import("../components/MediaPatners/MediaPatners.jsx"));
const Developers = lazy(() => import("../components/DevPage/DevPage.jsx"));
const Events = lazy(() => import("../components/Events/Events.jsx"));
const About = lazy(() => import("../components/About/About.jsx"));
const ComingSoon = lazy(() => import("../components/ComingSoon/ComingSoon.jsx"));
export default function App() {
  return <><ArchiveBar /><ErrorBoundary><Suspense fallback={<p className="archive-loading" role="status">Opening the archive…</p>}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quantaculus" element={<Quantaculus />} />
      <Route path="/quantaculus/submitted" element={<Submitted />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/media" element={<Media />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  </Suspense></ErrorBoundary></>;
}
