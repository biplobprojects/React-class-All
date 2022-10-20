
import React from "react";
class Comp2 extends React.Component {
  render() {
    return (
      <>
        <h1>COMPONENT 2</h1>
       
       <pre>{JSON.stringify(this.props)}</pre>
      </>
    );
  }
}

export default Comp2;
