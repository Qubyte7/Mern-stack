import { useEffect, useState } from "react"
import axios from "axios"
interface Workout{
    _id:string;
    title:string,
    reps:number;
    load:number;  
    createdAt:Date;   
    updatedAt:Date
}
//components 
import WorkOutDetails from '../components/WorkOutDetails'


 const Home = ()=>{
    const [workouts,setworkouts] = useState<Array<Workout>>([])
    // useEffect(()=>{
    //     const fetchWorkout = async ()=>{
    //     const response = await fetch('http://localhost:8080/api/workouts')
    //      const json = await response.json()
    //      if(response.ok){
    //      setworkouts(json)
    //      }
    //     }
    //     fetchWorkout()
    // },[])

    //USING AXIOS
    const fetching = async ()=>{
        axios.get('http://localhost:8080/api/workouts')
        .then((response)=>{
            setworkouts(response.data)
            console.log(response.data)})
        .catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
     fetching()
    },[])
    
    return(
        <div> 
            <h2>Home</h2>
            <div className="workouts">
                {workouts && workouts.map((workout:any)=>(<WorkOutDetails key={workout._id} title={workout.title} reps={workout.reps} load={workout.load} createdAt={workout.createdAt}/>//the reasin that yousee that we used brackets is beacuse brackets help in Automatic return no nedd to specify the return type
                ))}
            </div>
        </div>
    )
}
 
export default Home



