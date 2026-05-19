import axios from "axios";
import { redirect } from "react-router-dom";

const redirectLoader = async () => {
  const url = `http://localhost:3000/authentication/verify`;
  try {
    const res = await axios.get(url, { withCredentials: true });
    return redirect("/home");
  } catch (err) {
    console.log(err);
  }
};

export default redirectLoader;
