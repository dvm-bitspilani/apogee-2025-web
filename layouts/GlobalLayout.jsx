import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export default function GlobalLayout() {
  const location = useLocation();
  return (
    <>
      {/* <h1>Global Layout</h1> */}
      <Outlet />
    </>
  );
}
