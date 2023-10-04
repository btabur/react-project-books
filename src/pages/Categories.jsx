import React from 'react'
import { Outlet } from 'react-router-dom'

const Categories = () => {
  return (
    <div>
        {/* alt yollarda gözükecek ortak kısım */}
        <h1>Ortak Başlık</h1>

        {/* Alt yolların gözükmesi için hangi noktalar da gösükeceğini belirler */}
        <Outlet/>

    </div>
  )
}

export default Categories