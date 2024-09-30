import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accessories from './components/Accessories';
import Contact from './components/Contact';
import { Cart } from './components/CartContext';
import Index from './components/Index';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <>
      {/* <CartProvider>
        <Home />
      </CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Home' element={<Home />}/>
          <Route path='Product' element={<Product />}>
            <Route path='Accessories' element={<Accessories />} />
          </Route>
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Cart>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Product' element={<Product />}>
              <Route path='Accessories' element={<Accessories />} />
            </Route>
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </Cart>
      </BrowserRouter>
    </>
  );
}

export default App;
