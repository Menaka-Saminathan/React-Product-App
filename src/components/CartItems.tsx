import { Key } from "react";
import { ProductType } from "../type/Type";
import CartButton from "./CartButton";

export const CartItems = (props: {
  element: ProductType;
  index: Key | null | undefined;
}) => {
  // const { removeFromCart, addToCart } = useCart();

  return (
    <>
      <div
        key={props.index}
        className="flex justify-between items-center border p-4 rounded-md"
      >
        <div className="flex items-center gap-10">
          <img src={props.element.image} alt={props.element.title} width={80} />
          <p className="text-2xl">{props.element.title}</p>
        </div>
        <p className="text-xl font-bold">${props.element.price}</p>
        <div className="flex gap-5">
        <CartButton element={props.element} /> 
          {/* <Button
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
          /> */}
        </div>
      </div>
    </>
  );
}

export default CartItems;
