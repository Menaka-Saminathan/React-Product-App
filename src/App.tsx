import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accessories from './components/Accessories';
import Contact from './components/Contact';
import Shopping from './components/Shopping';
import Index from './components/Index';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Home' element={<Home />}/>
        <Route path='Product' element={<Product />}>
          <Route path='Accessories' element={<Accessories />} />
        </Route>
        <Route path='/Shopping' element={<Shopping />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
