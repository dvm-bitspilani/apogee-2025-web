import { Route, Routes } from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Registration from "../components/Registration/Registration.jsx";

function App() {
  return (
    <Routes>
      {/*<Route element={<GlobalLayout/>}>*/}
      <Route path="/" element={<Landing />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
