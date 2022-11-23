
import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className='navbar navbar-dark bg-dark navbar-expang-lg'>
    <Link to="/" className='navbar-brand'>REACT HOOKS</Link>

    <div className='ml-auto'>
        <ul className='navbar-nav'> 
            <li><Link to="/msg">HANDLERS WITH HOOKS FOR MESSAGE</Link></li>
            <li><Link to="/pro">PRODUCT DATA WITH HOOKS</Link></li>
        </ul>
    </div>
   </nav>
   
   </>
  )
}

export default Navbar
