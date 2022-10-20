//STATE: COMPONENT OWNED DATA:
import React from "react"

class Message extends React.Component{
  //PROPERTIES:
    message="hello"
  
    //METHODS:
    changeMessageHandler=()=>{  //fat arrow function:


        console.log("test case 123 ");
        this.message="Goodmorning"
        console.log(this.message);

        this.forceUpdate()
    }

    render(){

        return <>
        <h1>MESSAGE COMPONENT</h1>
        <h3>Message :{this.message}</h3>

        <button onClick={this.changeMessageHandler}>goodmorning</button>
        <hr />
        <button>GOODNIGHT</button>
        </>
    }
}

export default Message;