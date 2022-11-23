import React, { Component } from 'react'
// import Msg1 from './Msg1'
 class Msg extends Component {

  state={
    name:"allen ray"
  }

  componentDidMount(){
    this.setState({name:"biplob borboruah"})
  }
  render() {
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
      </div>
    )
  }
}

export default Msg
