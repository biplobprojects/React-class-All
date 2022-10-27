import React, { Component } from "react";

class Data extends Component {
  state = {
    msg: "hello",
  };

  finalHandler = (x) => {
    this.setState({msg:x});
  };

  render() {
    return (
      <div>
        <h1>REACT BINDING</h1>
      <h2>wish msg:{this.state.msg}</h2>

      

        <button onClick={this.finalHandler.bind(this, "goodmorning")}>
          GM
        </button>
        <button onClick={this.finalHandler.bind(this, "goodafternoon")}>GA</button>
        <button onClick={this.finalHandler.bind(this, "goodnight")}>GN</button>
      </div>
    );
  }
}

export default Data;
