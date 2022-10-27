import React, { Component } from "react";
import Axios from "axios";

class Product extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    Axios.get("https://dummyjson.com/products12").then((res) => {
      console.log(res);
      this.setState({ products: res.data.products });
    });


    try {
      
    } catch (error) {
      console.log("errorrrrrrrrr");
      
    }
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.products)}</pre>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <table className="table table-hover">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.length > 0 ? (
                    <>
                      {this.state.products.map((product) => {
                        return (
                          <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                          </tr>
                        );
                      })}
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
