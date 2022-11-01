import React from "react";

const Userdetails = (props) => {
  return (
    <div className="container">
      <h4>USER DETAILS</h4>
      {/* <h3>{JSON.stringify(props)}</h3>/ */}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <img src={props.selectedUser2.image} alt="" />
            </div>
            <div className="card-body bg-primary">
              <ul className="list-group" >
                <li className="list-group-item">Age: {props.selectedUser2.age}</li>
                <li className="list-group-item">Name:{props.selectedUser2.firstName}</li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
