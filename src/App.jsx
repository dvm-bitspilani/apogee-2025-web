import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import ErrorBoundary from "./ui/ErrorBoundary.jsx";
import PageLoader from "./ui/PageLoader.jsx";
import RoutePrefetch from "./ui/RoutePrefetch.jsx";
import { RegistrationProvider } from "./ui/RegistrationClosed.jsx";
import { loadLanding, loadContact, loadQuantaculus, loadSpeakers, loadSponsors, loadMedia, loadDevelopers, loadEvents, loadAbout } from "./routeLoaders.js";
const Landing = lazy(loadLanding);
const Registration = lazy(() => import("../components/Registration/Instructions/Instruction.jsx"));
const Contact = lazy(loadContact);
const Quantaculus = lazy(loadQuantaculus);
const Speakers = lazy(loadSpeakers);
const Sponsors = lazy(loadSponsors);
const Media = lazy(loadMedia);
const Developers = lazy(loadDevelopers);
const Events = lazy(loadEvents);
const About = lazy(loadAbout);
const ComingSoon = lazy(() => import("../components/ComingSoon/ComingSoon.jsx"));
export default function App() {
  return <RegistrationProvider><RoutePrefetch /><ErrorBoundary><Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quantaculus" element={<Quantaculus />} />
      <Route path="/quantaculus/submitted" element={<Navigate to="/quantaculus" replace />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/media" element={<Media />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  </Suspense></ErrorBoundary></RegistrationProvider>;
}
