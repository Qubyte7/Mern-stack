import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

interface User {
  email: string;
  password: string | any;
}

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isloading, setIsloading] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (email: string, password: string) => {
    setIsloading(true);
    setError(null);
    const user: User = { email, password };
    try {
      const response = await axios.post<User>(
        "http://localhost:8080/api/user/signup",
        user
      );
      console.log(response)
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setIsloading(false);
    } catch (err:any) {
      setIsloading(false);
      setError((err).response.data.error);
      console.log(err)
    }
  };
  return { signup, isloading, error };
};
 