import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const {dispatch :workoutsDispatch} = useWorkoutContext();
  const logout = () => {
    //remove user from local storage
    localStorage.removeItem("user");
    //dispacth logout action

    dispatch({ type: "LOGOUT" });
    workoutsDispatch({type:'SET_WORKOUT',payload:null})
  };
  return { logout };
};
