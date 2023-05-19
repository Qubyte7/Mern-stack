import { useEffect, FC } from "react";
import axios from "axios";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../HOOKS/useWorkoutContext";
import WorkOutDetails from "../components/WorkOutDetails";
import { useAuthContext } from "../HOOKS/useAuthContext";

const Home: FC = () => {
  const { workouts, dispatch } = useWorkoutContext(); //here we are descruturing the workoutContext
  const { user } = useAuthContext();
  //USING AXIOS
  const fetchingWorkouts = async () => {
    //set the default authorization header
    const storedUser = localStorage.getItem('user');
    const user = storedUser? JSON.parse(storedUser):null;
    if(user && user.token){
    axios.defaults.headers.common['Authorization']= `Bearer ${user.token}`; 
    //are specifying that every outgoing Axios request should include this header with the provided value. In this case, the value is Bearer ${user.token}, where user.token is the token used for authentication or authorization.
  }
    axios
      .get("http://localhost:8080/api/workouts")
      .then((response) => {
        dispatch({ type: "SET_WORKOUTS", payload: response.data });
        // setworkouts(response.data)
        console.log(response.data);
        console.log("data being fecthed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (user) {
      fetchingWorkouts();
    }
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div className="workouts">
        {workouts &&
          workouts.map((workout: any) => (
            <WorkOutDetails
              _id={workout._id}
              key={workout._id}
              title={workout.title}
              reps={workout.reps}
              load={workout.load}
              createdAt={workout.createdAt}
            /> //the reasin that yousee that we used brackets is beacuse brackets help in Automatic return no nedd to specify the return type
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
