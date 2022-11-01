import React from 'react'
import Msg2 from './Msg2.jsx'

const Msg1 = () => {
// let A=123;
// let id=545;
    let data ={
        id:102,
        name:"rahul pandey",
        salary:89000,
        desig:"web developer"
    }
  return (
    <div>
        <h1>MSG1 CPMPONENTS</h1>
        <hr />
   
    {/* <Msg2 msgData={data.id} /> */}
    <Msg2 fullData={data}/>

    
      
    </div>
  )
}

export default Msg1
