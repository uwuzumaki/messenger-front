import { Link } from "react-router-dom";
import Button from "../../ui/Button.jsx";

const Navigation = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-2">
        <Link className="text-3xl drop-shadow" to="/">
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
          <Button variant="secondary">Sign Out</Button>
        </div>
        <div className="flex">
          <Button variant="secondary" to="login">
            Sign In
          </Button>
          <Button to="/register">Sign Up</Button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

//  Note for self
// Before logging in, it should have sign in and sign up
// after logging in, both should disappear and only signout should be there
