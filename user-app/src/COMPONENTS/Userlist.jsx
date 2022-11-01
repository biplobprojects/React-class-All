import React from "react";

const Userlist = (props) => {

  //  useList HANDLER:
 let selectedUserHandler=(list)=>{
// console.log(list);
   props.selectedUserinfo(list)

 }

  return (
    <div className="container">
      <h4>USER LIST</h4>
      {/* <pre>{JSON.stringify(props)}</pre> */}

      <div className="row">
        <div className="col">
          <table className="table table-hover">
          
          
            <thead className="bg-dark text-primary">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            
            
            <tbody className="bg-secondary">
              {
              props.userslist.map((list) => {
                return (
                  <tr key={list.id} onMouseOver={selectedUserHandler.bind(this,list)}>
                    <td>{list.id}</td>
                    <td>{list.firstName}</td>
                    <td>{list.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
