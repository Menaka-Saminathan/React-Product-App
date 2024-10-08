import { createContext, useContext, ReactNode, useReducer } from "react";
import { Product, Carts, Action, InitialType } from "../type/Type";
import { ActionType } from "../enum/Action";

const initialState: InitialType = {
  cartItems: [],
};

const cardReducer = (state: { cartItems: Product[] }, action: Action): any => {
  switch (action.type) {
    case ActionType.ADD_CART:
      const existingCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((items) =>
            items.id === existingCart.id
              ? { ...existingCart, quantity: existingCart.quantity + 1 }
              : items
          ),
        };
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, newProduct],
        };
      }
    case ActionType.REMOVE_CART:
      const removeProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (removeProduct?.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== removeProduct.id
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === removeProduct?.id
              ? { ...removeProduct, quantity: removeProduct!.quantity - 1 }
              : item
          ),
        };
      }
    default:
      return state;
  }
};

const CartContext = createContext<Carts | undefined>(undefined);

export const Cart = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  
  const value = {
    dispatch,
    cartItems: state.cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a Cart");
  }
  return context;
};
