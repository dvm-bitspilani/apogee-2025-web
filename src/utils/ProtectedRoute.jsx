import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
    const user = localStorage.getItem('isLoggedIn');
    return user ? <Outlet /> : <Navigate  to="/instructions" />
}

export default ProtectedRoute;