import { createContext, useReducer } from "react";

export const  AuthContext = createContext<{user: any[];dispatch: React.Dispatch<any>;}>({user:[],dispatch:()=> null,});
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
    const [state,dispatch] =  useReducer(authReducer,{user:[]});
console.log('AuthFontext state',state);

return (
    <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>
)
}


