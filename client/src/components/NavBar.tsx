import {Link} from 'react-router-dom'

export const NavBar = ()=>{
    return (
        <header>
        <div className="container">
         <Link to='/'>Workout Buddy</Link>
        </div>
        </header>
    )
}