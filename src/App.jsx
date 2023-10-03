
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductsPage from './pages/ProductsPage'
import UndefinedPage from './pages/UndefinedPage'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import ProductDetail from './pages/ProductDetail'

function App() {
 

  return (
    <BrowserRouter>
    <Header/>
   
      <Routes>
        <Route path='/' element= {<MainPage/>}/>
        <Route path='/ürünler' element = {<ProductsPage/>} />
        <Route path='/ürün/:id' element = {<ProductDetail/>} />    {/* ürünün url si dinamik olacak  */}
        {/* bu sayfalar dışında bir sayfa girilirse */}
        <Route path='*' element = {<UndefinedPage/>} />

      </Routes>
    
    <Footer/>
    
    </BrowserRouter>

  )
}

export default App
