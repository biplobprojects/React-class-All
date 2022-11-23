import React, { Component } from 'react'
import Axios from 'axios'

 class AxiosClass extends Component {

    state={
        products:[]
    }

    componentDidMount(){

        Axios.get('https://dummyjson.com/products')
        .then((res)=>{
            this.setState({products: res.data.products})
        })
        .catch()
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.products)}</pre>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>

                {
                    this.state.products.map((pro)=>{
                        return <tr>
                            <td>{pro.id}</td>
                            <td>{pro.title}</td>
                            <td>{pro.description}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default AxiosClass
