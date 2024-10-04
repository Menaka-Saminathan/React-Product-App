import { useCart } from "../context/CartContext";
import { ProductType } from "../type/Type";
import Button from "./Button";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";

export default function AccessoryItem(props: { accessory: ProductType }) {
  const { addToCart, cartItems } = useCart();
  const [accessory, setAccessory] = useState(
    cartItems.find((items) => items.id == props.accessory.id)
  );

  useEffect(() => {
    setAccessory(cartItems.find((item) => item.id == props.accessory.id));
  });

  return (
    <div key={props.accessory.id} className="border rounded-xl p-5 bg-rose-50">
      <div className="m-5">
        <img
          src={props.accessory.image}
          alt={props.accessory.title}
          width={300}
        />
      </div>
      <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
        <p>{props.accessory.title}</p>
        <span>Price : {props.accessory.price}</span>
        {accessory ? (
          <div className="border-black rounded-lg w-32 px-5 py-1 bg-indigo-500 text-white">
            <CartButton element={accessory} />
          </div>
        ) : (
          <Button
            className="w-36 text-lg"
            varient="primary"
            onClick={() => addToCart(props.accessory)}
            name="Add Cart"
          />
        )}
      </div>
    </div>
  );
}
