import { createContext, useContext, useState } from "react";
import { AuthProps, Props } from "../type/Type";

const AuthContext = createContext<AuthProps | undefined>(undefined);

export function Authenticate({ children }: Props) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const Login = () => setIsValid(true);

  const value = {
    isValid,
    Login,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext is undefined");
  }
  return context;
};
