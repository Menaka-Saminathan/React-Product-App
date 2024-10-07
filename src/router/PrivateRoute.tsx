import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Authenticate";
import { USER_LOGIN } from "../constant/Constants";

export function PrivateRoute() {
  const { isValid } = useAuth();
  return isValid ? <Outlet /> : <Navigate to={USER_LOGIN} />;
}
