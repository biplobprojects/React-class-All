// WE USE PROPS FOR TRANSFERRING DATA FROM ONE COMPONENT TO ANOTHER:

// DATA TRANSFER FROM CLASS TO CLASS COMPONENT:

import React from "react";
import Comp2 from "./Comp2";

class Comp1 extends React.Component {
  //OVERRIDING RENDER METHOD:
  render() {
    return (
      <>
        <h1>COMPONENT 1</h1>
        
        {/* THIS IS AN OBJECT: */}
        <Comp2 name={"Biplob"} salary={"78999"} location={"assam"}/>  
      </>
    );
  }
}

export default Comp1;
