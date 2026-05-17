import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Profile = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    !loaderData.authenticated ? navigate("/unauthorized") : null;
  });

  return (
    <>
      <div className="mx-auto flex h-full flex-1 flex-col justify-evenly">
        <div>Email</div>
        <div>Username</div>
        <div>Cheese</div>
      </div>
    </>
  );
};

export default Profile;
