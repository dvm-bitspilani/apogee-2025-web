import { Route, Routes } from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Register from "../routes/Register.jsx";
import ShaderDev from "../components/ShaderDev/ShaderDev.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/registration" element={<Register />} />
      <Route path="/shader-dev" element={<ShaderDev />} />
    </Routes>
  );
}

export default App;
