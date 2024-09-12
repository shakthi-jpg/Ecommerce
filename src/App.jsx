import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import AboutUs from './Components/About '
import ContactPage from './Components/contact'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
