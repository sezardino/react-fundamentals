import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context";

export const ProtectedRoute = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
