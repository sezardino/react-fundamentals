import { createContext } from "react";

const defaultValue = {
  isAuth: false,
  setIsAuth: (value: boolean) => {},
  isLoading: true,
};

export const AuthContext = createContext(defaultValue);
