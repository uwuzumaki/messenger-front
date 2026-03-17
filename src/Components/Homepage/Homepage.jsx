import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/chat">Chat</Link>
    </>
  );
};

export default Homepage;
