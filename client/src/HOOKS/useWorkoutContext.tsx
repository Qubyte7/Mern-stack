import { WorkoutContext } from "../context/WorkoutContext";
// import {useContext } from 'react'

import React from "react"

export const useWorkoutContext = ()=>{
    const context = React.useContext(WorkoutContext)
    if(!context){
        throw Error('useWorkoutContext must be used inside an WorkoutContext Provider'); 
    }
    return context
}


 






