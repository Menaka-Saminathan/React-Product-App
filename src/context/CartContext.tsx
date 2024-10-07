import { createContext, useContext, useState, ReactNode } from "react";
import { Product, Carts } from "../type/Type";
import { ProductList } from "../data/ProductList";

const CartContext = createContext<Carts | undefined>(undefined);

export const Cart = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [product, setProduct] = useState(ProductList);

  const addToCart = (product: Product) => {
    const existingCart = cartItems.find((item) => item.id == product.id);
    if (existingCart) {
      existingCart.quantity += 1;
      setProduct((prev) =>
        prev.map((data) => (data.id === existingCart.id ? existingCart : data))
      );
    } else {
      product.quantity += 1;
      setCartItems(() => [...cartItems, product]);
    }
  };

  console.log(product)
  const removeFromCart = (product: Product) => {
    if (product.quantity == 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      product.quantity -= 1;
      setProduct((prev) =>
        prev.map((data) => (data.id === product.id ? product : data))
      );
      setCartItems(cartItems);
    }
  };

  const value = {
    removeFromCart,
    addToCart,
    product,
    cartItems,
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
