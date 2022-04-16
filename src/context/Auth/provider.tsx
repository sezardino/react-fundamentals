import React, { useState } from "react";
import { AuthContext } from "./context";

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
