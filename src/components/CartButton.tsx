import { useCart } from "../context/CartContext";
import { Element } from "../type/Type";
import Button from "./Button";

export default function CartButton({element}: Element) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex gap-6">
      <Button
        className="text-3xl"
        varient="secondary"
        onClick={() => addToCart(element)}
        name="+"
      />
      <p className=" text-2xl mt-1">{element.quantity}</p>
      <Button
        className="text-3xl"
        varient="secondary"
        onClick={() => removeFromCart(element)}
        name="-"
      />
    </div>
  );
}
