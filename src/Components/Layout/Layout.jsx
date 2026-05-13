import { data, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { AuthProvider, AuthContext } from "../../contexts/authContext";
import { use, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-1 flex-col">
      <AuthProvider>
        <Navigation />
        <div className="flex flex-1 flex-col items-center justify-center bg-slate-300">
          <Outlet />
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Layout;
