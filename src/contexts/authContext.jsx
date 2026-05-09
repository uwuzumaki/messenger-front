import { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const loaderData = useLoaderData();
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (loaderData) {
      setUser(loaderData.user.username);
      setAuthenticated(true);
    }
  }, [loaderData]);

  const value = {
    user,
    setUser,
    authenticated,
    setAuthenticated,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export { AuthContext, AuthProvider };
