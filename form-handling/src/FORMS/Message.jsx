import React from 'react'

class Message extends React.Component{


    // STATE OBJECT PROPERTY@
    state={

        email:"",
        password:""
    }


    // HANDLERS:
    emailhandler=(event)=>{
// console.log(event);
// console.log(event.target);
// console.log(event.target.value);
        this.setState({email:event.target.value})
    }

    passhandler=(event)=>{

        this.setState({password:event.target.value})
    }

    loginhandler=(event)=>{
    event.preventDefault()
    // console.log(this.state);

    }


    render(){

        return(

            <>

            <h1>Form Handling</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form>
<label > Email:</label>
<input type="text" onChange={this.emailhandler}/><br /><br />

<label >Password:</label>
<input type="text" onChange={this.passhandler}/><br /><br />


<button onClick={this.loginhandler}> Login</button>
            </form>
            
            </>
        )
    }
}
export default Message