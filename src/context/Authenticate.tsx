import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AuthProps, Props } from "../type/Type";

const AuthContext = createContext<AuthProps | undefined>(undefined)

export function Authenticate({ children }: Props) {
  const [isValid , setIsValid] = useState<boolean>(false);
  const Login = useCallback(() => setIsValid(true),[]);
  const Logout = useCallback(() => setIsValid(false),[]);
  
  const value = useMemo(() => ({
    isValid,
    Login,
    Logout
    }), [isValid, Login, Logout]
  );
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext is undefined");
  }
  return context;
};

