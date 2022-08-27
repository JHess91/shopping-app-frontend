import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './assets/styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import AddProduct from './pages/AddProduct'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/single-product' element={<SingleProduct />}  />
        <Route path='/add-product' element={<AddProduct />}  />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
