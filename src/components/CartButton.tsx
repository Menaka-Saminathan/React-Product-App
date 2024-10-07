import { useCart } from "../context/CartContext";
import { Product } from "../type/Type";
import Button from "./Button";

function CartButton(props: { element: Product }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex gap-6">
      <Button
        className="text-3xl"
        varient="secondary"
        onClick={() => addToCart(props.element)}
        name="+"
      />
      <p className=" text-2xl mt-1">{props.element.quantity}</p>
      <Button
        className="text-3xl"
        varient="secondary"
        onClick={() => removeFromCart(props.element)}
        name="-"
      />
    </div>
  );
}

export default CartButton;
