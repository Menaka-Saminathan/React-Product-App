import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import CartButton from "./CartButton";
import { Element } from "../type/Type";
import { ActionType } from "../enum/Action";

export default function ProductItems({element}: Element) {
  const { dispatch, cartItems } = useCart();
  const [carts, setCarts] = useState(
    cartItems.find((items) => items.id == element.id)
  );

  useEffect(() => {
    setCarts(cartItems.find((items) => items.id == element.id));
  }, [cartItems, element.id]);

  return (
    <div key={element.id} className="border rounded-xl p-5 bg-rose-50">
      <div className="m-5">
        <img src={element.image} alt={element.title} width={300} />
      </div>
      <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
        <p>{element.title}</p>
        <span>Price : {element.price * element.quantity}</span>
        {carts ? (
          <div className="border-black rounded-lg w-32 px-5 py-1 bg-indigo-500 text-white">
            <CartButton element={carts} />
          </div>
        ) : (
          <Button
            className="w-36 text-lg"
            varient="primary"
            onClick={() => dispatch({ type: ActionType.ADD_CART, payload: element })}
            name="Add Cart"
          />
        )}
      </div>
    </div>
  );
}
