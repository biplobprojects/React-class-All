import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/" className='navbar-brand' >USER APP IN FUNCTIONAL COMPONENT</Link>

        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'> <Link to="/home"  className='nav-link' >HOME</Link></li>
                <li  className='nav-list'><Link to="/about" className='nav-link'>ABOUT</Link></li>
                <li  className='nav-list'><Link to="/userapp" className='nav-link'>USER APP</Link></li>
            </ul>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar
