import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../componenets/Loading'
import Card from '../componenets/Card'

const ProductsPage = () => {
    const [books,setBooks] =useState(null)

    useEffect(()=> {
        axios.get('http://localhost:3030/books')
        .then((res)=> setBooks(res.data))
        .catch((err) => console.log(err))
    },[])
  
  return (
    <div> 
        {!books && <Loading/>  /*apiden cevap gelmediğinde */} 
    <div className="card-container">
        {books?.map((book)=> (  //books dizi geldiğinde maplamaya başlar
            <Card key={book.id} book={book}/>
         ))}
   </div>
    </div>
  )
}

export default ProductsPage
