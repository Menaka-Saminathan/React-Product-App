import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {PRODUCT_PATH} from "../constant/constant";
import CartItems from "./CartItems";
import Button from "./Button";

const CartDetails = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useCart();

  return (
    <div className=" p-10 ">
      <h2 className="text-3xl font-semibold mb-5">Cart Details</h2>
      {cartItems.length === 0 ? (
        <p className="text-5xl font-semibold mb-4">Your cart is empty.</p>
      ) : (
        <>
        <div className="flex gap-7">
          <CartItems />
        </div>
        <div className="my-6 text-xl font-bold">
        <p>Total: ${cartTotal}</p>
      </div>
        </>
      )}
      <Button
        className="w-40 px-3"
        varient="primary"
        onClick={() => navigate(PRODUCT_PATH)}
        name="Back to product"
      />
    </div>
  );
};

export default CartDetails;
