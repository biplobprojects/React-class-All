import React from "react";

class Registrationform extends React.Component {

    state={

        name:"",
        email:"",
        password:"",
        number:""
    }

    finalHandler=(event)=>{

        this.setState({[event.target.name]:event.target.value})
    }

    submitHandler=(event)=>{

        event.preventDefault()
    }
  render() {
    return (
<>
        <h1>REGISTRATION FORM</h1>
        <pre>{JSON.stringify(this.state)}</pre>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={this.submitHandler}>
              <label htmlFor=""> Name</label>
              <input type="text" onChange={this.finalHandler} placeholder="enter your name"  name="name"/>
              <br />
              <br />
              <label htmlFor=""> Email</label>

              <input type="email" onChange={this.finalHandler} placeholder="enter your email" name="email"/>
              <br />
              <br />
              <label htmlFor=""> Password</label>

              <input type="password" onChange={this.finalHandler} placeholder="enter your password" name="password"/>
              <br />
              <br />
              <label htmlFor="">Number</label>

              <input type="number" onChange={this.finalHandler} placeholder="enter your number" name="number"/>
              <br />
              <br />

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default Registrationform;
