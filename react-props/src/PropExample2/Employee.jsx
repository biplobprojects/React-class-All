//FUNCTION COMPONENT:

const Employee=(props)=>{

    return(
        <>
        <h1>EMPLOYEE COMPONENT</h1>
  <pre>{JSON.stringify(props)}</pre>

  <h3>hello {props.name} you are from {props.location}</h3>
        </>
    )
}

export default Employee;


//TRANSFER FROM FUNCTION TO CLASS:
import React from "react";
class Employee extends React.Component{

    render(){

        return(
            <>
            <hr />
            <h1>COMPONENT EMPLOYEE</h1>
            
            <pre>{JSON.stringify(this.props)}</pre>
            {/* <h3>hello {this.props.name}</h3>
            <h3>Employee location:{this.props.location}</h3>
            <h3>employee id: {this.props.n}</h3>op
            <h3>Employee salary: {this.props.salary}</h3> */}

            <h2>Employee name: {this.props.array[0].name}</h2>
            <h2>2ND emp name: {this.props.array[1].name}</h2>

            
             
            


            </>
        )
    }
}

let newArr = this.props.array.map((arr)=>{
  return arr

})

console.log(newArr);
export default Employee;