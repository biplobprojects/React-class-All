import React, { Component } from "react";
import Axios from "axios";


class Users extends Component {
  state = {
    users: [],
  };


  //USING PROMISES:
  getDtaHandler = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch(()=>{

        console.log("error message");
      });
  };

  render() {
    return (
      <div>
        <h1>AXIOS TUTORIAL</h1>
        {/* <pre> {JSON.stringify(this.state.users)}</pre> */}
<button onClick={this.getDtaHandler}>GET DATA</button>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
           
          </tr>
        </thead>
        <tbody>
{
this.state.users.length >0 ? <>
{
  this.state.users.map((x)=>{

    return <tr key={x.id}>

      <td>{x.id}</td>
      <td>{x.name}</td>
      <td>{x.email}</td>
      <td>{x.address.street.concat(x.address.suite).concat(x.address.zipcode)}</td>
     
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

      </div>
    );
  }
}

export default Users;
