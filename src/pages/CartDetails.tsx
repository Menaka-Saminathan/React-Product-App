import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import CartItems from "../components/CartItems";
import Button from "../components/Button";

const CartDetails = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="bg-slate-50 p-10 ">
      <h2 className="text-3xl mb-5">Cart Details</h2>
      {cartItems.length === 0 ? (
        <p className="text-5xl font-semibold mb-4">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((cart, index) => (
            <CartItems element={cart} index={index} />
          ))}
          <div className="my-6 text-xl font-bold">
            <p>Total: ${cartTotal}</p>
          </div>
        </div>
      )}
      <Button
        className="w-40 px-3"
        varient="primary"
        onClick={() => navigate(-1)}
        name="Back to product"
      />
    </div>
  );
};

export default CartDetails;
