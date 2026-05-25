import { use, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext.jsx";

const Profile = () => {
  const auth = use(AuthContext);

  return (
    <>
      <div className="ml-28 flex h-full flex-1 flex-col justify-evenly">
        <div>
          <p class="text-heading text-4xl font-black text-emerald-400 text-shadow-emerald-900 text-shadow-md">
            Username
          </p>
          <div className="text-heading text-2xl font-bold text-blue-400 text-shadow-blue-900 text-shadow-md">
            {auth.user}
          </div>
        </div>
        <div>Cheese</div>
      </div>
    </>
  );
};

export default Profile;
