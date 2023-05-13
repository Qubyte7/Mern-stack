import { createContext, useReducer } from "react";
interface Workout{
  _id?:any,
  title?:string,
  reps?:number;
  load?:number;  
  createdAt?:Date;   
  updatedAt?:Date
}

export const WorkoutContext = createContext<{workouts: any[]; dispatch: React.Dispatch<any>;}>({workouts: [],dispatch:()=> null,});
export const workoutsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload }; //Here we are updating thr workouts which was initially null to the workouts object we got from our backend api //we are doing this in home component
    //note that the payload is the object body of what we want to update to mean is the an object of all the workouts
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts], //remember that the three dots ... means that we want to add new thing to an existing array of things
      };
      case "DELETE_WORKOUT":
        return{
          workouts:state.payload.filter((workout:any)=>{workout._id !== action.payload._id})
        }
    default:
      return state;
  }
};

export const WorkoutContextProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: [] }); //workouts :null // is said to be the initial state if this State
  // dispatch({type:'SET_WORKOUTS',payload:[{},{}]})
  //the type property describes the state change
  // the "TYPE:" property that you are seeing describes the state change
  //the 2nd property "PAYLOAD":On the other hand, the payload property is an optional field that provides additional data to the reducer to process the action. It can be any data type and usually carries information relevant to the specific action being dispatched.
  //these 2 arg passed is known as an action

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {/* ...state :here we are spreading out the properties of the workouts which was set to null */}
      {children}
      {/* this children they are saying is the App  root in our case is main.tsx so to mean any component of our apllication will have access to out Workout context*/}
    </WorkoutContext.Provider>
  );
};
