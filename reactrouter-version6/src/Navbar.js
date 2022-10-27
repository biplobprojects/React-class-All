
import {Link} from 'react-router-dom'
import React, { Component } from 'react'

 class Navbar extends Component {
  render() {
    return (
      <div>

        <nav className='navbar navbar=dark bg-dark navbar-expand-lg'>
            <Link to="/Home" className='navbar-brand'>React Router DOM-6</Link>
     

        <div className='ml-auto'>
            <ul className='navbar-nav'> 
                <li className='nav-list' ><Link to="/Home" className='nav-link'>Home</Link></li>
                <li className='nav-list'><Link to="/About" className='nav-link'>About</Link></li>
               <li className='nav-list'><Link to="/Contact" className='nav-link'>Contact</Link></li>

            </ul>
        </div>
        </nav>
        
      </div>
    )
  }
}

export default Navbar
