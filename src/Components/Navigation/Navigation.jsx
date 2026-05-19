import { Link } from "react-router-dom";
import Button from "../../ui/Button.jsx";
import { AuthContext } from "../../contexts/authContext.jsx";
import { use } from "react";

const Navigation = () => {
  const auth = use(AuthContext);
  return (
    <>
      <nav className="flex items-center justify-between p-2">
        <div className="flex items-end justify-center">
          <Link
            className="text-3xl drop-shadow"
            to={auth.authenticated ? "/home" : "/"}
          >
            <span className="text-emerald-400">Mess</span>
            <span className="text-sky-500">ages</span>
          </Link>
          <div className="text-lg">
            <Button variant="secondary" to="/chat">
              Chat
            </Button>
            <Button variant="secondary" to="/profile">
              Profile
            </Button>
          </div>
        </div>
        <div className="flex">
          {auth.authenticated ? (
            <button
              className="mx-2 rounded-lg px-2 py-1 transition duration-250 hover:cursor-pointer hover:text-emerald-400 hover:drop-shadow"
              onClick={auth.logout}
            >
              Sign Out
            </button>
          ) : (
            <>
              <Button variant="secondary" to="login">
                Sign In
              </Button>
              <Button to="/register">Sign Up</Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

//  Note for self
// Before logging in, it should have sign in and sign up
// after logging in, both should disappear and only signout should be there
