import { useEffect, useState } from "react"
import  Axios  from 'axios'
 const Home = ()=>{
    const [workouts,setworkouts] = useState(null)
    // useEffect(()=>{
    //     const fetchWorkout = async ()=>{
    //     const response = await fetch('http://localhost:5000/api/workouts')
    //      const json = await response.json()
    //      if(response.ok){

    //      }
    //     }

    //     fetchWorkout()
    // },[])
    
    const fetching = async ()=>{
        Axios.get('http://localhost:8080/api/workouts')
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
            
        </div>
    )
}
 
export default Home