import axios from "axios";
import { redirect } from "react-router-dom";

const authLoader = async () => {
  const url = `http://localhost:3000/authentication/verify`;
  try {
    const res = await axios.get(url, { withCredentials: true });
    const user = res.data.user;
    return { user, authenticated: true };
  } catch (err) {
    console.log(err);
    return redirect("/unauthorized");
  }
};

export default authLoader;
