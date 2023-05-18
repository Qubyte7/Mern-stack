import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

interface User {
  email: string;
  password: string | any;
}

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isloading, setIsloading] = useState(false);
  const { dispatch } = useAuthContext();
  const login = async (email: string, password: string) => {
    setIsloading(true);
    setError(null);
    const user: User = { email, password };
    try {
      const response = await axios.post<User>(
        "http://localhost:8080/api/user/login",
        user
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setIsloading(false);
    } catch (err) {
      setIsloading(false);
      setError((err as Error).message);
    }
  };
  return { login, isloading, error };
};
