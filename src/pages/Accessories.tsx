import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { AccessoryList } from '../Data/AccessoriesList'
import CartDetails from './CartDetails'

function Accessories() {
  const { addToCart, cartItems } = useCart();

  return (
    <>
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
                <button className="text-lg" onClick={() => CartDetails}>Shopping Cart: {cartItems.length}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-36 p-10">
          {AccessoryList.map((accessory) => (
            <div key={accessory.id} className="border rounded-xl p-5 bg-rose-50">
              <div className="m-5">
                <img src={accessory.image} alt={accessory.title} width={300} />
              </div>
              <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
                <p>{accessory.title}</p>
                <span>Price : {accessory.price}</span>
                <button className="text-xl py-3 w-36 rounded-lg text-center bg-green-50" onClick={() => addToCart(accessory)}>Add Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Accessories