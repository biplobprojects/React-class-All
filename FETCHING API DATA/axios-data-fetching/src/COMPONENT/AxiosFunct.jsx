import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const AxiosFunct = () => {


  //USESTATE ():

  let [user, setUser] = useState({})


  //useEffect():

  useEffect(() => {

    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data)
      })
      .catch()

  })
  return (
    <div className="container">
      <pre>{JSON.stringify(user)}</pre>
      <div className="row">
        <div className="col-md-8">
          <table className='table table-hover'>
            <thead className='bg-dark text-white'>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
              </tr>
            </thead>
            <tbody>
              {
                user.length > 0 ?
                  <>
                    {
                      user.map((user1) => {

                        return <tr>
                          <td>{user1.id}</td>
                          <td>{user1.name}</td>
                          <td>{user1.username}</td>
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

export default AxiosFunct
