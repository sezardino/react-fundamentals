import { useState } from "react";
import { AuthContext } from "./context";

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
