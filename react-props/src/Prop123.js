import React from "react";

class Prop123 extends React.Component{
   
   render(){

    return (
    <>
    <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
    {this.props.children}
    </>
    )
    
   }
   
}

//FUNCTION COMPONENT:
// let Prop123=(props)=>{

//   return <>

//   <h1>{props.name}</h1>
//   </>


// } 
export default Prop123;
