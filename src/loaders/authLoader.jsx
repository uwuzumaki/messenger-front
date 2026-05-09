import axios from "axios";

const authLoader = async () => {
  const url = `http://localhost:3000/authentication/verify`;
  try {
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    if (res.statusText == "OK") {
      const user = res.data.user;
      return { user, authenicated: true };
    }
    return { user: null, authenticated: false };
  } catch (err) {
    console.log(err);
    return { user: null, authenicated: false };
  }
};

export default authLoader;
