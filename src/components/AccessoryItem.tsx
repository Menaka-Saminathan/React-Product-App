import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Accesses } from "../type/Type";
import Button from "./Button";
import CartButton from "./CartButton";

export default function AccessoryItem({accessories}: Accesses ) {
  const { addToCart, cartItems } = useCart();
  const [accessory, setAccessory] = useState(
    cartItems.find((items) => items.id == accessories.id)
  );

  useEffect(() => {
    setAccessory(cartItems.find((item) => item.id ==accessories.id));
  }, [cartItems, accessories.id]);

  return (
    <div key={accessories.id} className="border rounded-xl p-5 bg-rose-50">
      <div className="m-5">
        <img
          src={accessories.image}
          alt={accessories.title}
          width={300}
        />
      </div>
      <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
        <p>{accessories.title}</p>
        <span>Price : {accessories.price}</span>
        {accessory ? (
          <div className="border-black rounded-lg w-32 px-5 py-1 bg-indigo-500 text-white">
            <CartButton element={accessory} />
          </div>
        ) : (
          <Button
            className="w-36 text-lg"
            varient="primary"
            onClick={() => addToCart(accessories)}
            name="Add Cart"
          />
        )}
      </div>
    </div>
  );
}
