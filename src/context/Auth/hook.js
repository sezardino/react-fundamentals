import { useContext } from "react";
import { AuthContext } from "./context";

export const useAuth = () => {
  const { isAuth, isLoading, setIsAuth } = useContext(AuthContext);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return { isAuth, isLoading, login, logout };
};
