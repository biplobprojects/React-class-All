import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>

        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/" className='navbar-brand'>FORM HANDLING AND AXIOS</Link>

            <div className=" ml-auto">
            <ul className='navbar-nav'>
                {/* <li className='nav-item'><Link to="/home" className='nav-link'>HOME</Link></li>
                <li className='nav-item'> <Link to="/about" className='nav-link'>About</Link></li>
                <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link></li>
             
                <li className='nav-item'><Link to="/users" className='nav-link'>USERS</Link></li>
                <li className='nav-item'><Link to="/product" className='nav-link'>PRODUCT</Link></li> */}
                {/* <li className='nav-item'><Link to="/axi" className='nav-link'>FETCHING API USING HOOKS</Link></li> */}
                <li className='nav-item'><Link to="/digi" className='nav-link'> DIGICLOCK</Link></li>




                
            </ul>
            </div>
        </nav>
       
      </div>
    )
  }
}

export default Navbar
