import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import { Cart } from "./context/CartContext";
import UserLogin from "./pages/UserLogin";
// import Index from "./pages/Index";
import Home from "./pages/Home";
import Product from "./pages/Product";
import CartDetails from "./components/CartDetails";
import { Authenticate } from "./context/Authenticate";
import { PrivateRoute } from "./router/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cart>
          <Authenticate>
            <Routes>
              <Route path="/" element={<UserLogin />} />
              <Route element={<PrivateRoute/>}>
                <Route
                  path="/Home"
                  element={<Home />}
                />
              </Route>
              <Route path="/Product" element={<Product />}>
                <Route path="Accessories" element={<Accessories />} />
              </Route>
              <Route path="/Contact" element={<Contact />} />
              <Route path="/CartDetails" element={<CartDetails />} />
            </Routes>
          </Authenticate>
        </Cart>
      </BrowserRouter>
    </>
  );
}

export default App;
