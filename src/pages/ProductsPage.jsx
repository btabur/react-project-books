import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../componenets/Loading'
import Card from '../componenets/Card'
import { useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
    const [books,setBooks] =useState(null);

    // iki değer döndürür
    //1. url de ekli olan arama parametrelerini
    // 2. parametreleri değiştirmeye yarayan fonksiyonu
    const [searchParams,setSearchParams] = useSearchParams();

    useEffect(()=> {
        axios.get('http://localhost:3030/books')
        .then((res)=> setBooks(res.data))
        .catch((err) => console.log(err))
    },[])
  
    const handleChange = (e) => {
      setSearchParams({order:e.target.value})
    }
  return (
    <div> 
        {!books && <Loading/>  /*apiden cevap gelmediğinde */} 
        <h3 className='mx-5 mt-5'>{books?.length} kitap Bulundu</h3>
        <div className='mx-5 mt-5 fs-4'>
          <label className='me-3' >İsme Göre Sırala</label>
          <select onChange={handleChange} className='px-4 rounded'>
            <option> a-z </option>
            <option> z-a </option>
          </select>
        </div>
    <div className="card-container">
        {books?.map((book)=> (  //books dizi geldiğinde maplamaya başlar
            <Card key={book.id} book={book}/>
         ))}
   </div>
    </div>
  )
}

export default ProductsPage
