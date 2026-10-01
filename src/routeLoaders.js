export const loadLanding = () => import("../components/Landing/Landing.jsx");
export const loadAbout = () => import("../components/About/About.jsx");
export const loadEvents = () => import("../components/Events/Events.jsx");
export const loadSpeakers = () => import("../routes/SpeakersPage/Speakers.jsx");
export const loadContact = () => import("../routes/ContactPage/ContactPage.jsx");
export const loadSponsors = () => import("../components/Sponsors/Sponsors.jsx");
export const loadMedia = () => import("../components/MediaPatners/MediaPatners.jsx");
export const loadDevelopers = () => import("../components/DevPage/DevPage.jsx");
export const loadQuantaculus = () => import("../routes/Quantaculus.jsx");

const routeLoaders = { "/": loadLanding, "/about": loadAbout, "/events": loadEvents, "/speakers": loadSpeakers, "/contact": loadContact, "/sponsors": loadSponsors, "/media": loadMedia, "/developers": loadDevelopers, "/quantaculus": loadQuantaculus };
export function prefetchRoute(path) {
  if (!navigator.connection?.saveData) routeLoaders[path]?.().catch(() => {});
}
