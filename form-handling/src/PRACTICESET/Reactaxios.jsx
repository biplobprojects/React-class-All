import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Reactaxios = () => {


  //USESTATE():
  let [user, setUser] = useState({})


  //USEFFECT():
  useEffect = (() => {

    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        setUser( res.data)
      })
      .catch()
  }, []);


  return (
    <div className="container">
      <pre>{JSON.stringify(user)}</pre>
      <div className="row">
        <div className="col-md-8">
          <table className='table table-hover'>
            <thead className='bg-dark text-white'>
              <tr>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>AGE</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(user).length > 0 ? 
                <>
                {
                  user.users.map((user1)=>{

                    return <tr>
                      <td>{user1.id}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  })
                }
                </> : null
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reactaxios
