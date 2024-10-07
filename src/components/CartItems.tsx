import { Key } from "react";
import { Product } from "../type/Type";
import CartButton from "./CartButton";
import { useCart } from "../context/CartContext";

export const CartItems = () => {
  
  const { cartItems } = useCart();
  return (
    <>
      {cartItems.map((cart: Product, index: Key | null | undefined) => (
            <div
            key={index}
            className="border p-4 rounded-md"
          >
            <div className="">
              <img src={cart.image} alt={cart.title} width={80} />
              <p className="text-2xl my-3">{cart.title}</p>
              <p className="text-xl font-bold">${cart.price}</p>
              <CartButton element={cart} />
            </div>
          </div>
          ))}
    </>
  );
};

export default CartItems;
