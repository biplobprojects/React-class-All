import React from "react"

class Digiclock extends React.Component{

   

    constructor(props){

        super(props)
        this.state={
            ct: new Date().toLocaleTimeString()
        }

    }

    componentDidMount(){

setInterval(()=>{

    this.setState({ct:new Date().toLocaleTimeString()})
},[1000])
    }

    render(){

        return(

            <>
            <h1>DIGITAL CLOCK 
               </h1>

               <div className="card">
                <div className="card-body">
                    <h2 >{this.state.ct} </h2>
                </div>
               </div>
            </>
        
        )
        
    }
}
export default Digiclock