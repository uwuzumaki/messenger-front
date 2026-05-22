import { useNavigation, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import LoadingOverlay from "../../ui/Loader";
import Footer from "../Footer/Footer";
import { AuthProvider } from "../../contexts/authContext";

const Layout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className="relative flex h-screen flex-col">
      <AuthProvider>
        <Navigation />
        {loading && <LoadingOverlay />}
        {!loading && (
          <div className="flex min-h-0 flex-1 flex-col bg-slate-300">
            <Outlet />
          </div>
        )}
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Layout;
