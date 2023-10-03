import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({book}) => {
  return (
    <div className='card shadow rounded p-1'>
        <img className=' img fluid rounded ' src={book.image} alt="" />
        <div className='card-body'>
            <h4> {book.title}</h4>
            <h5> {book.author}</h5>
            <Link className='btn btn-primary w-100' to= {`/ürün/${book.id}`}>Detay Gör</Link>
        </div>
      
    </div>
  )
}

export default Card
