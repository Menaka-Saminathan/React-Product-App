import { useCart } from "../context/CartContext";
import { Element } from "../type/Type";
import Button from "./Button";
import { ActionType } from "../enum/Action";

export default function CartButton({element}: Element) {
  const { dispatch } = useCart();

  return (
    <div className="flex gap-6">
      <Button
        className="text-3xl"
        varient="secondary"
        onClick={() => dispatch({ type: ActionType.ADD_CART, payload: element })}
        name="+"
      />
      <p className=" text-2xl mt-1">{element.quantity}</p>
      <Button
        className="text-3xl"
        varient="secondary"
        onClick={() => dispatch({ type: ActionType.REMOVE_CART, payload: element })}
        name="-"
      />
    </div>
  );
}
