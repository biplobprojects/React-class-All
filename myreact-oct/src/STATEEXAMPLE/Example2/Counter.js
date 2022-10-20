import React from "react";

class Counter extends React.Component {
  state = {
    qty: 1,
  };

  IncreHandler = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };

  DecreHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  render() {
    return <>

    <h3>qty :{this.state.qty}</h3>
    <button onClick={this.IncreHandler}>INCRE</button>
    <button onClick={this.DecreHandler}>DECRE</button>
    
    </>;
  }
}
export default Counter;
