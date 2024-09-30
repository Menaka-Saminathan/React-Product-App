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


 // <form className='flex flex-col items-center mt-60'>
      //   <div className="border rounded-md px-2 py-1 w-80">
      //     <label className='' >Email id :</label>
      //     <input type="email" placeholder='Enter your email address' className="ml-3 outline-none" />
      //   </div>
      //   <div className="mt-4 border rounded-md px-2 py-1 w-80">
      //     <label className="">Password :</label>
      //     <input type="password" placeholder='Enter your Password' className="ml-3 outline-none" />
      //   </div>
      //   <div className="flex gap-20 mt-5">
      //     <div className="">
      //       <a href="#!">Forgot password?</a>
      //     </div>
      //     <div className="">
      //       <input className="" type="checkbox"/>
      //       <label className=""> Remember me </label>
      //     </div>
      //   </div>
      //   <div className="w-86 mt-3 flex gap-3">
      //     <p>Not a member? <a href="#!">Register</a>or sign up with :</p>
      //     <button >
      //       <i className="fab fa-facebook-f"></i>
      //     </button>
      //     <button type="button" data-mdb-button-init data-mdb-ripple-init className="">
      //       <i className="fab fa-google"></i>
      //     </button>
      //     <button  className="">
      //       <i className="fab fa-twitter"></i>
      //     </button>
      //     <button  className="">
      //       <i className="fab fa-github"></i>
      //     </button>
      //   </div>
      // </form>
