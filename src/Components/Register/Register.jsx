import { use } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Spinner from "../../ui/Spinner";

import { AuthContext } from "../../contexts/authContext";
import { LoadingContext } from "../../contexts/loadingContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const auth = use(AuthContext);
  const load = use(LoadingContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    load.setLoading(true);
    const url = `http://localhost:3000/register`;
    const info = {
      email: data.email,
      username: data.username,
      password: data.password,
    };
    let result;
    try {
      result = await axios.post(url, info, {
        withCredentials: true,
      });
      console.log(result);
      auth.setUser(result.data.user.username);
      auth.setAuthenticated(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      load.setLoading(false);
    }
  };

  return (
    <>
      <div className="w-1/4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="my-1 rounded border-2 border-white p-1 focus:border-emerald-400 focus:ring-0 focus:outline-none"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="my-4 flex flex-col">
            <label>Username</label>
            <input
              className="my-1 rounded border-2 border-white p-1 focus:border-emerald-400 focus:ring-0 focus:outline-none"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="my-1 rounded border-2 border-white p-1 focus:border-emerald-400 focus:ring-0 focus:outline-none"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <label>Confirm Password</label>
            <input
              className="my-1 rounded border-2 border-white p-1 focus:border-emerald-400 focus:ring-0 focus:outline-none"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  return value === watch("password")
                    ? true
                    : "Passwords must match!";
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div>
            <button
              className="relative container my-2 flex cursor-pointer justify-around rounded-lg border border-emerald-400 bg-emerald-400 p-2 text-center hover:border-emerald-600 hover:bg-emerald-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              value="Sign In"
              disabled={load.loading}
            >
              <span className="my-auto flex-2">Register &#8250;</span>
              {load.loading ? <Spinner /> : null}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
