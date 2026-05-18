import { useNavigation, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import LoadingOverlay from "../../ui/Loader";
import Footer from "../Footer/Footer";
import { AuthProvider } from "../../contexts/authContext";

const Layout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className="relative flex flex-1 flex-col">
      <AuthProvider>
        <Navigation />
        {loading && <LoadingOverlay />}
        {!loading && (
          <div className="flex flex-1 flex-col items-center justify-center bg-slate-300">
            <Outlet />
          </div>
        )}
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Layout;
