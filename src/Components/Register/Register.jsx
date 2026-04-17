import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "123");
  };

  console.log(watch(errors.email));

  return (
    <>
      <div className="w-1/3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="my-1 rounded border border-white p-1"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="my-4 flex flex-col">
            <label>Username</label>
            <input
              className="my-1 rounded border border-white p-1"
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
              className="my-1 rounded border border-white p-1"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <label>Confirm Password</label>
            <input
              className="my-1 rounded border border-white p-1"
              placeholder="Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => {
                  value === watch("password") || "Passwords must match!";
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    </>
  );
};

export default Register;
