import { Route, Routes, useLocation } from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Landing from "../components/Landing/Landing.jsx";
import ShaderDev from "../components/ShaderDev/ShaderDev.jsx";
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";
import About from "../components/About/About.jsx";
import ReactGA from "react-ga4";
import Instructions from "../components/Registration/Instructions/Instruction.jsx";
import ContactPage from "../routes/ContactPage/ContactPage.jsx";

ReactGA.initialize("G-45DB3M9465");

function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/shader-dev" element={<ShaderDev />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/registration" element={<Instructions />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
