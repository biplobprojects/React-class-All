import React, { useState } from 'react'



const Message = () => {

    //USESTATE HOOK:
    let [product, setProduct] = useState("Hello")


    //HANDLERS:
    // let gmHandler = () => {

    //     setProduct(product = "hello goodmorning")
    // }

    // let gnHandler = () => {

    //     setProduct(product = "hello goodnight")
    // }


    return (
        <div>
            <h1>MESSAGE DATA: {product}</h1>
            <button onClick={()=>{
                setProduct("hello goodmorning")
            }}>GM</button>
            <button onClick={()=>{
                setProduct("goodnight")
            }}>GN</button>


        </div>
    )
}

export default Message
