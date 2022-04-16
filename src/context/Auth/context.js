import { createContext } from "react";

const defaultValue = {
  isAuth: false,
  setIsAuth: (value) => {},
  isLoading: true,
};

export const AuthContext = createContext(defaultValue);
