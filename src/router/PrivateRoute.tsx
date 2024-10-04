import { useAuth } from "../context/Authenticate";
import { Navigate, Outlet } from "react-router-dom";
import { USER_LOGIN } from "../constant/constant";

export function  PrivateRoute () {
  const { isValid } = useAuth();
  return ( 
    isValid ? <Outlet/> : <Navigate to={USER_LOGIN} />
  )
}