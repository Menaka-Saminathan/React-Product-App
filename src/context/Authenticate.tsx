import { createContext, useContext, useReducer } from "react";
import { AuthProps, Props } from "../type/Type";
import { Login } from "../enum/Login";

const AuthContext = createContext<AuthProps | undefined>(undefined);

const initialState = {
  valid : false
}

const validation = (state: { valid: boolean; }, action: { type: string; }): any => {
  switch(action.type){
    case Login.LOGIN :
      return state.valid = true;
    case Login.LOGOUT :
      return state.valid = false;
    default: return state;
  }
}

export function Authenticate({ children }: Props) {
  const [state, dispatch] = useReducer(validation, initialState)

  const value = {
    isValid: state.valid,
    dispatch
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
