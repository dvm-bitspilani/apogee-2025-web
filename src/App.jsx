import { Route, Routes } from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Landing from "../components/Landing/Landing.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import ShaderDev from "../components/ShaderDev/ShaderDev.jsx";
import Contact from "../components/Contact/Contact.jsx";
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";
import About from "../components/About/About.jsx";
import ReactGA from "react-ga4";
import { lazy, Suspense } from "react";
import Preloader from "../components/Registration/Preloader/Preloader.jsx";

ReactGA.initialize("G-45DB3M9465");

const Register = lazy(() => import("../routes/Register.jsx"));

function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/shader-dev" element={<ShaderDev />} />
        <Route
          path="/registration"
          element={
            <Suspense fallback={<Preloader />}>
              <Register />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        {/* <Route element={<ProtectedRoute />}>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/shader-dev" element={<ShaderDev />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route element={<ProtectedRoute />}>
        <Route path="/registration" element={<Register1 />} />
        </Route> */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
