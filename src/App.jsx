import { Route, Routes } from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Register from "../routes/Register.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import ShaderDev from "../components/ShaderDev/ShaderDev.jsx";
import Contact from "../components/Contact/Contact.jsx";
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/shader-dev" element={<ShaderDev />} />
      <Route path="/registration" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/registration" element={<Register1 />} />
      </Route> */}
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
