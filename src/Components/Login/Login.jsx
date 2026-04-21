import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("email"));

  return (
    <>
      <div className="w-1/4">
        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="my-1 rounded border-2 border-white p-1 focus:border-emerald-400 focus:ring-0 focus:outline-none"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="my-1 rounded border-2 border-white p-1 focus:border-emerald-400 focus:ring-0 focus:outline-none"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>
          <input
            className="container my-2 cursor-pointer rounded-lg border border-emerald-400 bg-emerald-400 p-2 text-center hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
