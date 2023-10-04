
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductsPage from './pages/ProductsPage'
import UndefinedPage from './pages/UndefinedPage'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import ProductDetail from './pages/ProductDetail'
import Categories from './pages/Categories'

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

        {/* İç içe route lar  alt yollarda / işaretine gerek yoktur */}
        <Route path='/kategori' element={<Categories/>}>
          <Route index element={<h1>Hikayeler</h1>}/> 
          <Route path='roman' element={<h1>Romanlar</h1>}/>

        </Route>

      </Routes>
    
    <Footer/>
    
    </BrowserRouter>

  )
}

export default App
