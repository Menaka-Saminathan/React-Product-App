import { createContext, useContext, useState, ReactNode } from "react";
import { totalPrice } from "../type/Type";

const CartTotalContext = createContext<totalPrice | undefined>(undefined);

export const CartTotal = ({ children }: { children: ReactNode}) => {
  const [cartTotal, setCartTotal] = useState<number>(0);

  const increaseTotal = (amount: number) => {
    setCartTotal((prevTotal) => prevTotal + amount);
  };

  const decreaseTotal = (amount: number) => {
    setCartTotal((prevTotal) => prevTotal - amount);
  };

  const totalValue = {
    cartTotal,
    increaseTotal,
    decreaseTotal,
  };

  return (
    <CartTotalContext.Provider value={totalValue}>
      {children}
    </CartTotalContext.Provider>
  );
};

export const useCartTotal = () => {
  const context = useContext(CartTotalContext);
  if (context === undefined) {
    throw new Error("useCartTotal must be used within a CartTotal");
  }
  return context;
};
