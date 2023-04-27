import React from 'react'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {
    const {id} = useParams();
    console.log(id)
  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo