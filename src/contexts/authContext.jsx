import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const loaderData = useLoaderData();
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    const url = "http://localhost:3000/authentication/logout";
    console.log("123");
    try {
      const res = await axios.get(url, { withCredentials: true });
      setUser(null);
      setAuthenticated(false);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      setUser(loaderData.user.username);
      setAuthenticated(true);
    } catch (err) {
      // Needs to do something if no loader data (maybe redirect to home?)
      console.log(err);
    }
  }, [loaderData]);

  const value = {
    user,
    setUser,
    authenticated,
    setAuthenticated,
    logout,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export { AuthContext, AuthProvider };
