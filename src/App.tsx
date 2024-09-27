import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Accessories from './components/Accessories'
import Contact from './components/Contact'
import Index from './components/Index'
import Home from './components/Home'
import Product from './components/Product'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Index/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Product' element={<Product/>}></Route>
          <Route path='/Accessories' element={<Accessories/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
