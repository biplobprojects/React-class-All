//STATE: COMPONENT OWNED DATA:
import React from "react"

class MessageBackup extends React.Component{
  
  state={
    message:"Hello"
  }




    //METHODS:
    changeMessageHandler=()=>{  //fat arrow function:

   this.setState({ message: "Hello,Goodmorning"})
    }

   myHandler=()=>{

   

    this.setState({message:"hello,good  night had dinner"})
   }
        
    

    render(){

        return <>
        <h1>MESSAGE COMPONENT</h1>
        <h3>Message :{this.state.message}</h3>

        <button onClick={this.changeMessageHandler}>goodmorning</button>
        <hr />
        <button onClick={this.myHandler}>GOODNIGHT</button>
        </>
    }
}


export default MessageBackup;