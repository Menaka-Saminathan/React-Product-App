import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import { Cart } from "./components/CartContext";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Product from "./pages/Product";
import CartDetails from "./components/CartDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cart>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Product" element={<Product />}>
              <Route path="Accessories" element={<Accessories />} />
            </Route>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CartDetails" element={<CartDetails />} />
          </Routes>
        </Cart>
      </BrowserRouter>
    </>
  );
}

export default App;
