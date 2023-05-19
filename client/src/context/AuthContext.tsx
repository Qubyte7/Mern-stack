import { createContext,useEffect, useReducer } from "react";

export const  AuthContext = createContext<{user:{email:string ,password:string|any} |null;dispatch: React.Dispatch<any>;}>({user:null,dispatch:()=> null,});
export const authReducer = (state:any,action:any)=>{
    switch(action.type){
        case 'LOGIN':
            return{user:action.payload }
        case 'LOGOUT':
            return{user:null}
        default:
            return state;
    }
}
export const AuthContextProvider :React.FC<{children: React.ReactNode;}>= ({children}) =>{
    const [state,dispatch] =  useReducer(authReducer,{user:null});
console.log('AuthContext state',state);

useEffect(()=>{
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser):null;//here we are trying to parse or assign the user found in the local storage of the variable user,
    //we are saying if truly the user (as a local storeage data exists) we assign it to to this variable user and if not we assign null to user
    if(user){
        dispatch({type:'LOGIN',payload:user});
    }
},[])

return (
    <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>
)
}
