import { AuthContext } from "../context/AuthContext";
// import {useContext } from 'react'

import React from "react"

export const useAuthContext = ()=>{
    const context = React.useContext(AuthContext)
    if(!context){
        throw Error('useAuthContext must be used inside an WorkoutContext Provider'); 
    }
    return context
}


 






