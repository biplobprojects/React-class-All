import React from "react";

class CounterBootstrap extends React.Component {
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

    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-secondary text-warning">

                        <h3>qty:{this.state.qty}</h3>

                    </div>
                    <div className="card-body" >

                        <button className="btn btn-success " onClick={this.IncreHandler}>INCRE</button>
                        <button className="btn btn-primary ml-5" onClick={this.DecreHandler}>DECRE</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>;
  }
}
export default CounterBootstrap;
