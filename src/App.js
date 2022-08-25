import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
