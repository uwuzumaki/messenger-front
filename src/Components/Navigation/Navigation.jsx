import { Link } from "react-router-dom";
import Button from "../../ui/Button.jsx";

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-between border-b p-2">
        <Link to="/">Chat</Link>
        <div>
          <Button variant="secondary">Chat</Button>
          <Button variant="secondary">Profile</Button>
          <Button variant="secondary">Sign Out</Button>
        </div>
        <div className="flex">
          <Button variant="secondary">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

//  Note for self
// Before logging in, it should have sign in and sign up
// after logging in, both should disappear and only signout should be there
