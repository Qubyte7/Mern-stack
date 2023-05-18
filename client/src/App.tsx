import './App.css'
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { NavBar } from './components/NavBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {


  return (
      <div>
        <Router>
          <NavBar />
          <div className='pages'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
        </div>
        </Router>
      </div>
  )
}
export default App
