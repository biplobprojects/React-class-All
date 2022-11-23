import React, { useEffect, useState } from 'react'
import Axios from 'axios'


const Product = () => {

  //useState:
  let [product, setProduct] = useState({})

  //useEffect:
  useEffect(() => {

    Axios.get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data)
      })
      .catch(() => {

      })
  }, [])





  return (
    <div>
      <h1><pre>{JSON.stringify(product)}</pre></h1>



    </div>
  )
}

export default Product
