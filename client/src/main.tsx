import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WorkoutContextProvider } from './context/WorkoutContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>,
)
