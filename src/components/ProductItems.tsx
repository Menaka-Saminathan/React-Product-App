import { ProductType } from "../type/Type";
import { useCart } from "./CartContext";
import Button from "./Button";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";

function ProductItems(props: { element: ProductType }) {
  const { addToCart, cartItems } = useCart();
  const [carts, setCarts] = useState(
    cartItems.find((items) => items.id == props.element.id)
  );
  useEffect(() => {
    setCarts(cartItems.find((items) => items.id == props.element.id));
  }, [cartItems, props.element.id]);
  return (
    <div key={props.element.id} className="border rounded-xl p-5 bg-rose-50">
      <div className="m-5">
        <img src={props.element.image} alt={props.element.title} width={300} />
      </div>
      <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
        <p>{props.element.title}</p>
        <span>Price : {props.element.price}</span>
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
