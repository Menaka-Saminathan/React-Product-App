import { Link, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext.tsx";
import CartDetails from "../components/CartDetails.tsx";
import ProductItems from "../components/ProductItems.tsx";
import { ACCESSORY_PATH, CARTDETAILS_PATH } from "../constant/constant.tsx";
import { ProductList } from "../data/ProductList.tsx";

function Product() {
  const { cartItems } = useCart();

  return (
    <div className="bg-slate-50">
      {/* <Navbar /> */}
      <div className="flex gap-80">
        <form className="flex border border-gray-300 ml-96 my-5 rounded-md w-2/5 justify-between p-2">
          <div>
            <i className="fa-solid fa-magnifying-glass h-5 text-gray-500 pr-2"></i>
            <input
              type="text"
              placeholder="Search..."
              className="outline-0 bg-transparent"
            />
          </div>
        </form>
        <div className="flex mt-7 gap-3">
          <i className="fa-solid fa-cart-shopping text-lg"></i>
          <div>
            <Link to={CARTDETAILS_PATH}>
              <button className="text-lg" onClick={() => CartDetails}>
                Shopping Cart: {cartItems.length}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-36 p-10">
        {ProductList.map((product) => (
          <ProductItems element={product} />
        ))}
      </div>
      <hr className="b-2 my-10 w-full" />
      <div className="text-center bg text-3xl text-slate-600">
        <button>
          Click here to Get More{" "}
          <Link className="text-4xl" to={ACCESSORY_PATH}>
            Accessories
          </Link>
        </button>
      </div>
      <hr className="b-2 my-10 w-full" />
      <Outlet />
    </div>
  );
}

export default Product;
