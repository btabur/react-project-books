import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../componenets/Loading';



const ProductDetail = () => {
  //useParams: url deki parametreleri alır
  const {id} = useParams();

  const [book,setBook] = useState(null);

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(` http://localhost:3030/books/${id}`)
    .then(res => setBook(res.data))
    .catch(err=>{
      //fonksiyon içerisinde farklı bir sayfaya yönlendirmek için 
      //react-router-dom un useNavigate hook u kullanılır.
      navigate('/undefined',{state:err.response.status})  //giden sayfaya bilgi olarak alınan hata kodu eklenir

    })
  },[id])
  return (
    <div>
       {!book ? <Loading/> :
       <div className='row my-5 p-5 ' style={{minHeight:'80vh'}}>
        <div id='detail' className='d-flex rounded detail'>
        <div className='col-md-6 d-flex align-items-center justify-content-center '>
        <img style={{maxHeight:'400px'}} className='img-fluid shadow rounded ' src={book.image} alt="" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-sm-3">
          <h1>{book.title}</h1>
          <div className='my-4'>
            <BookInfo title={'Yazar'} value={book.author}/>
            <BookInfo title={'Açıklama'} value={book.description}/>
            <BookInfo title={'Yıl'} value={book.year}/>
            <BookInfo title={'Sayfa Sayısı'} value={book.page}/>
          </div>
      
        </div>
        </div>

       </div>
       }
    </div>
  )
}
//kitap bilgisi bileşeni
const BookInfo = ({title, value})=> {
  return (
    <p className='fs-5'>
    <span className='badge bg-danger me-3'>{title}</span>
    <span>{value}</span>
  </p>
  )
}

export default ProductDetail
