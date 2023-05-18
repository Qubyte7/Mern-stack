import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WorkoutContextProvider } from './context/WorkoutContext.tsx'
import {AuthContextProvider } from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
        <WorkoutContextProvider>
            <App />
         </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
