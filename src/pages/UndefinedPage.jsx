import React from 'react'
import { useLocation } from 'react-router-dom'

const UndefinedPage = () => {
  //farklı sayfadan gelen bilgi var ise bu bilgiyi tutar
  const  {state} = useLocation();
  return (
    <div className='d-flex align-items-center flex-column container pt-5 gap-5'>

        <img className='rounded img-fluid w-50 ' src="https://cdn.dribbble.com/users/604891/screenshots/16581214/media/bb111973c18ec6b36a067efdecc9a8ff.gif" alt="" />
      <p className='text-center fs-4'>Üzgünüz aradığınız sayfa bulunamadı</p>

      {state && 
        <p className='fs-3 text-center'>
          Hata Kodunuz   <span className='badge bg-warning'>{state}</span>
        </p>
      }


    </div>
  )
}

export default UndefinedPage
