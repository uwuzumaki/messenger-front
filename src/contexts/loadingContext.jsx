import { createContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext value={{ loading, setLoading }}>{children}</LoadingContext>
  );
};

export { LoadingContext, LoadingProvider };
