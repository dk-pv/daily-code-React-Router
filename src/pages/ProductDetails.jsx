import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const prod = useParams()
  return (
    <div>
      <h1>products  details</h1>
      <span>{prod.id}</span>
    </div>
  )
}

export default ProductDetails
