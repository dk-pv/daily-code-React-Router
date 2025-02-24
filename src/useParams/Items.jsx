import React from 'react'
import { useParams } from 'react-router-dom'

const Items = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>this is ITEM {id} DETALS</h1>
      
    </div>
  )
}

export default Items
