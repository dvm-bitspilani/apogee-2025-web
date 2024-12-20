import Counter from "../components/Counter/Counter.jsx";
import {Route, Routes} from "react-router";
import GlobalLayout from "../layouts/GlobalLayout.jsx";

function App() {
    return (
        <Routes>
            <Route element={<GlobalLayout/>}>
                <Route path="/" element={<Counter/>}/>
                <Route path="test" element={<><h1>Test Page</h1></>}/>
            </Route>
        </Routes>
    )
}

export default App
