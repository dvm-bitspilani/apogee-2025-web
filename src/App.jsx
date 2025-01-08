import {Route, Routes} from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";
import Experience from "../components/Experience/Experience.jsx";

function App() {
    return (
        <Routes>
            {/*<Route element={<GlobalLayout/>}>*/}
            <Route path="/" element={<Experience/>}/>
            <Route path="test" element={<><h1>Test Page</h1></>}/>
            {/*</Route>*/}
        </Routes>
    )
}

export default App
