import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark text-white bg-dark navbar-expand-lg'>
        <Link to="/" className='navbar-brand '>DATA FETCHING USING AXIOS</Link>

        <div className='ml-auto '>
            <ul className='navbar-nav'>
                <li className='nav-list' ><Link to ="/axiosClass" className='nav-link text-white'>AXIOS-CLASS</Link></li>
                <li className='nav-list '><Link to="/axiosFunc" className='nav-link text-white'>AXIOS-FUNCTION</Link></li>
                <li className='nav-list '><Link to="/userData" className='nav-link text-white'>USERDATA FETCHING BY redux-thunk</Link></li>

            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
