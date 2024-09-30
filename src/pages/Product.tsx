import { Link, Outlet } from "react-router-dom";
import { useCart} from '../components/CartContext';
import {ProductList} from "./ProductList";
import CartDetails from "./CartDetails";

function Product() {
  const { addToCart, cartItems } = useCart();
  
  return (
    <div className="bg-slate-50">
      <div className="flex gap-80">
        <form className="flex border border-gray-300 ml-96 my-5 rounded-md w-2/5 justify-between p-2">
          <div>
            <i className="fa-solid fa-magnifying-glass h-5 text-gray-500 pr-2"></i>
            <input type="text" placeholder="Search..." className="outline-0 bg-transparent" />
          </div>
        </form>
        <div className="flex mt-7 gap-3">
          <i className="fa-solid fa-cart-shopping text-lg"></i>
          <div>
            <Link to={'/CartDetails'}>
              <button className="text-lg" onClick={()=>CartDetails}>Shopping Cart: {cartItems.length}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-36 p-10">
        {ProductList.map((product) => (
          <div key={product.id} className="border rounded-xl p-5 bg-rose-50">
            <div className="m-5">
              <img src={product.image} alt={product.title} width={300} />
            </div>
            <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
              <p>{product.title}</p>
              <span>Price : {product.price}</span>
              <button className="text-xl py-3 w-36 rounded-lg text-center bg-green-50" onClick={() => addToCart(product)}>Add Cart</button>
            </div>
          </div>
        ))}
      </div>
      <hr className='b-2 my-10 w-full' />
      <div className="text-center bg text-4xl">
        <button>
          Click here to Get More <Link className='text-4xl' to='Accessories'>Accessories</Link>
        </button>
      </div>
      <hr className='b-2 my-10 w-full' />
      <Outlet />
    </div>
  );
}

export default Product;

