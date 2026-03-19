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

  console.log(watch("username"));

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <input
            placeholder="Username"
            {...register("username", { required: true })}
          />
          <input
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
