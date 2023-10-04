import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='d-flex gap-5 p-5'
     style={{minHeight:'80vh'}}>
        {/* alt yollarda gözükecek ortak kısım */}
        <aside className='bg-white p-3 rounded d-flex flex-column '>
          <NavLink to={'/kategori'}>Hikaye</NavLink>
          <NavLink to={'/kategori/roman'}>Roman</NavLink>
        </aside>

        {/* Alt yolların gözükmesi için hangi noktalar da gösükeceğini belirler */}
        <Outlet/>

    </div>
  )
}

export default Categories