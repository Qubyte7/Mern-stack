import { FC } from "react";
import { useWorkoutContext } from "../HOOKS/useWorkoutContext";
import axios from "axios";
//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../HOOKS/useAuthContext";
interface Workout {
  _id?: any;
  title: string;
  reps: number;
  load: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const WorkOutDetails: FC<Workout> = ({ _id, title, reps, load, createdAt }) => {
  const { dispatch } = useWorkoutContext();
const {user }= useAuthContext();
  const handledelete = async () => {
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) :null;
    try {
      if(user && user.token){
        axios.defaults.headers.common['Authorization']=`Bearer ${user.token}`
      }
      const response = await axios.delete(
        `http://localhost:8080/api/workouts/${_id}`
      );
      if (response.status === 200) {
        console.log(response);
        dispatch({ type: "DELETE_WORKOUT", payload: response.data });
      }
      window.location.reload(); //this reloads the page after the delete functionhave been successfull
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box">
      <h4>{title}</h4>
      <p>
        <strong>load(kg) :</strong>
        {load}
      </p>
      <p>
        <strong>Reps :</strong>
        {reps}
      </p>
      {/* <p>{createdAt?.toString()}</p> */}
      <p>
        {createdAt &&
          formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </p>
      <button>
        <span onClick={handledelete}>delete</span>{" "}
      </button>
    </div>
  );
};

export default WorkOutDetails;
