import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { userAction } from '../REDUX/users/users.action'



const Users = () => {


    //USEDISPATCH():
    let dispatch = useDispatch()
   
    //USEEFFECT

    useEffect(()=>{

dispatch(userAction())

    },[dispatch])

    //useselector():
    let user = useSelector((state)=>{
return state.users

    })
  return (
    <div>
        <div className="container">
        <h1>USERS DATA</h1>
        <pre>{JSON.stringify(user)}</pre>
        <div className="row">
            <div className="col-md-8">
                <table className='table table-hover'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>ID</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.users.map((use)=>{

                                return <tr>
                                    <td>{use.id}</td>
                                    <td>{use.age}</td>
                                    <td>{use.gender}</td>
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

export default Users
