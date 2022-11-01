import React, { useEffect, useState } from "react";
import Userlist from "./Userlist.jsx";
import Userdetails from "./Userdetails.jsx";
import Axios from "axios";

const UserApp = () => {
  
    // USESTATE:
    let [user, setUser] = useState({});
   
    let [selectUser,setSelectedUser]= useState({})
  // useEffect: it is used as a side effect to perform operations after return method:
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch();
  }, []);


  //DUMMY METHOD TO SEND TO USERLIST BY USING PROPS:
let selectedUserHandler=(list)=>{
      setSelectedUser(list)
}


  
  
  return (
    <div className="container">
      <div className="row">
        <h2>USER APP</h2>
        <pre>{JSON.stringify(user)}</pre>

        {/* USERLIST@ */}
        <div className="col-md-8">
          {
          Object.keys(user).length > 0 ? 
            <>
              <Userlist userslist={user.users} selectedUserinfo={selectedUserHandler}/>
            </>
           : null
          
          }
        </div>

         {/* USERDETAILS: */}
        <div className="col-md-4">
       {

        Object.keys(selectUser).length > 0 ? 
        
        <>
        <Userdetails selectedUser2={selectUser}/>
        </>: null
       }
       
       
         
        </div>
      </div>
    </div>
  );
};

export default UserApp;
