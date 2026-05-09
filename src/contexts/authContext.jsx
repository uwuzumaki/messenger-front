import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  const value = {
    user,
    setUser,
    authenticated,
    setAuthenticated,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export { AuthContext, AuthProvider };
