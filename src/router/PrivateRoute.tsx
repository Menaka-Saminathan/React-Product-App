import { useAuth } from "../context/Authenticate";
import { Navigate, Outlet } from "react-router-dom";

export function  PrivateRoute () {
  const { isValid } = useAuth();
  return ( 
    isValid ? <Outlet/> : <Navigate to="/" />
  )
}