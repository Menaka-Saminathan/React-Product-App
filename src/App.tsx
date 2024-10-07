import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./context/CartContext";
import { Authenticate } from "./context/Authenticate";
import CartDetails from "./components/CartDetails";
import {
  PRODUCT_PATH,
  HOME_PATH,
  CONTACT_PATH,
  CARTDETAILS_PATH,
  USER_LOGIN,
  ACCESSORY_PATH,
} from "./constant/Constants";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Product from "./pages/Product";
import UserLogin from "./pages/UserLogin";
import { PrivateRoute } from "./router/PrivateRoute";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cart>
          <Authenticate>
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path={USER_LOGIN} element={<UserLogin />} />
              <Route element={<PrivateRoute />}>
                <Route path={HOME_PATH} element={<Home />} />
              </Route>
              <Route path={PRODUCT_PATH} element={<Product />}>
                <Route path={ACCESSORY_PATH} element={<Accessories />} />
              </Route>
              <Route path={CONTACT_PATH} element={<Contact />} />
              <Route path={CARTDETAILS_PATH} element={<CartDetails />} />
            </Routes>
          </Authenticate>
        </Cart>
      </BrowserRouter>
    </>
  );
}

export default App;
