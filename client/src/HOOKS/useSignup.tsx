import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { json } from "react-router-dom";

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
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "SIGNUP", payload: response.data });
      setIsloading(false);
      // axios.post("http://localhost:8080/api/user/signup")
      // .then((response)=>{
      // //storing the user in the local storage so that when the user leaves and came back he have till that token
      //      localStorage.setItem('user',JSON.stringify(json));//the llocal storage will be called the user //>>>>>;to ee this devtools>application
      // //upadating then     auth context
      //     dispatch({type:'LOGIN',payload:response.data});
      //     setIsloading(false)
      // })
      // .catch((err) => {
      //     setIsloading(false);
      //     setError(err)
      // });
    } catch (err) {
      setIsloading(false);
      setError((err as Error).message);
    }
  };
  return { signup, isloading, error };
};
