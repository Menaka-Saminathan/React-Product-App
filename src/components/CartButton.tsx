import Button from "./Button";
import { useCart } from "./CartContext";
import { ProductType } from "../type/Type";

function CartButton(props: { element: ProductType }) {
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
