import React from 'react'
import { useParams } from 'react-router-dom'

const BookPage = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>this is book page {id} </h1>
    </div>
  )
}

export default BookPage
