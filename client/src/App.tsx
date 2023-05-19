import './App.css'
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { NavBar } from './components/NavBar'
import { BrowserRouter as Router,Routes,Route ,Navigate} from 'react-router-dom';
//navigate is used to direct a user to certain page
import { useAuthContext } from './HOOKS/useAuthContext';
function App() {
const {user} = useAuthContext();

  return (
      <div>
        <Router>
          <NavBar />
          <div className='pages'>
        <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
        </Routes>
        </div>
        </Router>
      </div>
  )
}
export default App
