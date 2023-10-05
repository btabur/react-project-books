import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../componenets/Loading'
import Card from '../componenets/Card'
import { useSearchParams } from 'react-router-dom'
import Filter from '../componenets/Filter'

const ProductsPage = () => {
    const [books,setBooks] =useState(null);

    // iki değer döndürür
    //1. url de ekli olan arama parametrelerini
    // 2. parametreleri değiştirmeye yarayan fonksiyonu
    const [searchParams,setSearchParams] = useSearchParams();

    //url deki parametrteye erişme
    const order = searchParams.get('order');
    const query = searchParams.get('query');

    //api ye istek atarken istediğimiz sırada değer değer döndürmesi için
    const optition = {
      params:{
        _sort:'title',
        _order:order === 'z-a' ? 'desc' : 'asc',
        q: query
      }
    }

    useEffect(()=> {
        axios.get('http://localhost:3030/books',optition)
        .then((res)=> setBooks(res.data))
        .catch((err) => console.log(err))
    },[order,query])
  
 
  
  return (
    <div> 
        {!books && <Loading/>  /*apiden cevap gelmediğinde */} 
        <div className='d-flex mt-5 flex-column justify-content-center align-items-center'>
       
        <img style={{width:'250px'}} className='img-fluid rounded ' src="src/assets/book.jpeg" alt="" />
        <h3 className='mx-5 mt-1'>{books?.length} kitap Bulundu</h3>
        </div>
      


        <Filter/>
       
    <div className="card-container">
        {books?.map((book)=> (  //books dizi geldiğinde maplamaya başlar
            <Card key={book.id} book={book}/>
         ))}
   </div>
    </div>
  )
}

export default ProductsPage
