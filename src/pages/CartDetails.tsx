import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const CartDetails = () => {
  const navigate = useNavigate()
  const { removeFromCart, cartItems, cartTotal, addToCart } = useCart();

  return (
    <div className="bg-slate-50 p-10">
      <h2 className="text-3xl mb-5">Cart Details</h2>
       {cartItems.length === 0 ? (
        <p className='text-5xl font-semibold'>Your cart is empty.</p>
      ) :  (
        <div className="flex flex-col gap-6">
          {cartItems.map((product, index) => (
            <>
              <div key={index} className="flex justify-between items-center border p-4 rounded-md">
                <div className="flex items-center gap-10">
                  <img src={product.image} alt={product.title} width={80} />
                  <p className='text-2xl'>{product.title}</p>
                </div>
                <p className="text-xl font-bold">${product.price}</p>
                <div className='flex gap-5'>
                  <button className=" text-3xl" onClick={() => addToCart(product)}>
                    +
                  </button>
                  <p className=' text-2xl mt-1'>{product.quantity}</p>
                  <button className=" text-3xl" onClick={() => removeFromCart(product)}>
                    -
                  </button>
                </div>
              </div>
            </>
          ))}
          <div className="mt-6 text-xl font-bold">
            <p>Total: ${cartTotal}</p>
          </div>
        </div>
      )}
      <button className="border px-3 py-2 mt-7 rounded-lg bg-gray-200" onClick={() => navigate(-1)}>
        Back to product
      </button>
    </div>

  );
};

export default CartDetails;

