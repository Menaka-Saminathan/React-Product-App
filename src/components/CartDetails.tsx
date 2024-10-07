import { useState, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
// import { useCartTotal } from "../context/CartTotal";
import { PRODUCT_PATH } from "../constant/Constants";
import CartItems from "./CartItems";
import Button from "./Button";

export default function CartDetails() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const value: number = useMemo(() => {
    let total =0 
    cartItems.map((items) => total += items.price * (items.quantity || 0))
    return total;
  }, [cartItems])

  return (
    <div className=" p-10 ">
      <h2 className="text-3xl font-semibold mb-5">Cart Details</h2>
      {cartItems.length === 0 ? (
        <p className="text-5xl font-semibold mb-4">Your cart is empty.</p>
      ) : (
        <>
          <CartItems />
          <div className="my-6 text-xl font-bold">
            <p>Total: ${value}</p>
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
