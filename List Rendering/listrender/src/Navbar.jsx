import React, { Component } from 'react'
import Employees from './Employee'

 class Navbar extends Component {
  render() {
    return (
      <div>

        <nav className='navbar navbar-dark  bg-dark'>
            <a href="" className='navbar-brand'>List Rendering</a>
        </nav>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
<table className='table table-hover bg-dark text-white'>
    <thead>
        <th>Name </th>
        <th>gender</th>
        <th>Email</th>
        <th>Salary</th>
        
    </thead>
    <tbody>
        {
           Employees.map((emp)=>{

            return <tr key={emp.name}>
                <td>{emp.name}</td>
                <td>{emp.gender}</td>
                <td>{emp.email}</td>
                <td>{emp.salary}</td>
            </tr>
           })
        }

    </tbody>
</table>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Navbar
