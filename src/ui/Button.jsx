import { Link } from "react-router-dom";

const Button = ({ variant = "primary", children }) => {
  const base = "mx-2 px-2 py-1 rounded-lg";

  const variants = {
    primary: "border-solid border-1 border-emerald-400 bg-emerald-50",
    secondary: "border-0",
  };

  return <Link className={`${base} ${variants[variant]}`}>{children}</Link>;
};

export default Button;
