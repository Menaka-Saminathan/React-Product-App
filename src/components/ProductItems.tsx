import { Product } from "../type/Type";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";

function ProductItems(props: { element: Product }) {
  const { addToCart, cartItems } = useCart();
  const { id, title, price, image } = props.element;
  const [carts, setCarts] = useState(
    cartItems.find((items) => items.id == id)
  );
  useEffect(() => {
    setCarts(cartItems.find((items) => items.id == id));
  }, [cartItems, id]);

  return (
    <div key={id} className="border rounded-xl p-5 bg-rose-50">
      <div className="m-5">
        <img src={image} alt={title} width={300} />
      </div>
      <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
        <p>{title}</p>
        <span>Price : {price}</span>
        {carts ? (
          <div className="border-black rounded-lg w-32 px-5 py-1 bg-indigo-500 text-white">
            <CartButton element={carts} />
          </div>
        ) : (
          <Button
            className="w-36 text-lg"
            varient="primary"
            onClick={() => addToCart(props.element)}
            name="Add Cart"
          />
        )}
      </div>
    </div>
  );
}

export default ProductItems;
