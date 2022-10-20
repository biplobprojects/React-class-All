import React from "react"

class Product extends React.Component{


    //STATE OBJECT PROPERTIES:
  state = {

    product:"APPLE iPhone 14",
    image:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    price:80000,
    qty:1
  }

  increHandler=()=>{

    this.setState({qty:this.state.qty +1})
  }

  decreHandler=()=>{

    this.setState({qty: this.state.qty -1})
  }

 
  

    render(){



        return <>

        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <table className="table table-hover">

                        <thead className="bg-dark text-info">

                            <th>Product</th>
                            <th>IMAGE</th>
                            <th>PRICE</th>
                            <th>qty</th>
                            <th>Total Price</th>

                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product}</td>
                                <td><img src={this.state.image} height="100px" /></td>
                                <td>{this.state.price}</td>
                                <td><i class="fa fa-plus-circle" onClick={this.increHandler}></i>
                                    {this.state.qty}
                                    <i class="fa fa-minus-circle" onClick={this.decreHandler} ></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        
        </>
    }
}

export default Product