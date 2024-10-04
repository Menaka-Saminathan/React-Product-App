import { Key } from "react";
import { ProductType } from "../type/Type";
import CartButton from "./CartButton";

export const CartItems = (props: {
  element: ProductType;
  index: Key | null | undefined;
}) => {

  return (
    <>
      <div
        key={props.index}
        className="border p-4 rounded-md"
      >
        <div className="">
          <img src={props.element.image} alt={props.element.title} width={80} />
          <p className="text-2xl my-3">{props.element.title}</p>
          <p className="text-xl font-bold">${props.element.price}</p>
          
          <CartButton element={props.element} />
        </div>
      </div>
    </>
  );
};

export default CartItems;
