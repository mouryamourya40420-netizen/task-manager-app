import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user } = useAuth();

  if (user?.role !== "admin") {
    return <Navigate to="/not-found" />;
  }
  return <Outlet />;
}