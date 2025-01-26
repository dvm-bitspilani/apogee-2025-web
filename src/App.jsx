import { Route, Routes } from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Register from "../routes/Register.jsx";
import Register1 from "../routes/Register1.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/instructions" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/registration" element={<Register1 />} />
      </Route>
    </Routes>
  );
}

export default App;
