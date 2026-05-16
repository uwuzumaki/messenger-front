import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

const Homepage = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="flex w-1/4 flex-1 flex-col items-center justify-center">
      <div className="mb-8 text-3xl">Welcome!</div>
      <div className="flex w-full justify-around">
        <Link
          className="mx-2 rounded-lg border border-solid border-indigo-500 bg-indigo-500 px-2 py-1 text-white"
          to="/profile"
        >
          Profile
        </Link>
        <Link
          className="mx-2 rounded-lg border border-solid border-yellow-500 bg-yellow-500 px-2 py-1 text-black"
          to="/chat"
        >
          Chat
        </Link>
        <>{auth.user}</>
      </div>
    </div>
  );
};

export default Homepage;

// Button colours subject to debate
