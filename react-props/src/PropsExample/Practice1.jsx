

import React, { Component } from 'react'

class Practice1 extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Hello {this.props.ename}</h3>
        <h4>ID: {this.props.allid}</h4>
        <h5>SALARY:{this.props.esal}</h5>
        
      </div>
    )
  }
}

export default Practice1
