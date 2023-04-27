import './App.css'
import Home from './pages/Home'
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
        </Routes>
        </div>
        </Router>
      </div>
  )
}
export default App
