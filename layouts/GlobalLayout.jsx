import {Outlet} from "react-router";

export default function GlobalLayout() {
    return (
        <>
            <h1>Global Layout</h1>
            <Outlet/>
        </>
    )
}