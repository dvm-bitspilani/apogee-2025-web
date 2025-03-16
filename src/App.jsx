import { Route, Routes, useLocation } from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Landing from "../components/Landing/Landing.jsx";
import ShaderDev from "../components/ShaderDev/ShaderDev.jsx";
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";
import ReactGA from "react-ga4";
import Instructions from "../components/Registration/Instructions/Instruction.jsx";
import ContactPage from "../routes/ContactPage/ContactPage.jsx";
import Quantaculus from "../routes/Quantaculus.jsx";
import QuantaculusSubmitted from "../routes/QuantaculusSubmitted.jsx";
import GamblingMaths from "../routes/GamblingMaths.jsx";
import { useEffect } from "react";

ReactGA.initialize("G-H9LEY5519K");

function App() {
  // useEffect(() => {
  //   if (
  //     navigator.userAgent.includes("Instagram") &&
  //     /android/i.test(navigator.userAgent)
  //   ) {
  //     console.log("Redirect");
  //     window.location.href = "intent:https://bits-apogee.org#Intent;end";
  //   }
  // }, []);
  return (
    <>
      <a
        href="https://bits-apogee.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in External Browser
      </a>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/shader-dev" element={<ShaderDev />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/registration" element={<Instructions />} />
          <Route path="*" element={<ComingSoon />} />
          <Route path="/quantaculus" element={<Quantaculus />} />
          <Route
            path="/quantaculus/submitted"
            element={<QuantaculusSubmitted />}
          />
          <Route path="/gamblingmaths" element={<GamblingMaths />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
