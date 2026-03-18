import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Navigation />
      <div className="flex flex-1 flex-col items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
