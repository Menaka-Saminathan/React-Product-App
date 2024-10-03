import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { ProductType, CartContextType } from "../type/Type";
const CartContext = createContext<CartContextType | undefined>(undefined);

export const Cart = ({ children }: { children: ReactNode }) => {
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const addToCart = useCallback(
    (product: ProductType) => {
      const existingCart = cartItems.find((item) => item.id == product.id);
      if (existingCart) {
        existingCart.quantity += 1;
        setCartItems(cartItems);
      } else {
        product.quantity += 1;
        setCartItems([...cartItems, product]);
      }
      setCartTotal(cartTotal + product.price);
    },
    [cartItems]
  );

  const removeFromCart = useCallback((product: ProductType) => {
    const existingCart = cartItems.find((item) => item.id == product.id);
    if (existingCart) {
      existingCart.quantity -= 1;
      if (existingCart.quantity == 0) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(cartItems);
      }
    }
    setCartTotal(cartTotal - product.price);
  }, []);

  const value = useMemo(
    () => ({
      removeFromCart,
      cartTotal,
      addToCart,
      cartItems,
    }),
    [cartItems, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a Cart");
  }
  return context;
};

// import { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';
// import { ProductType, CartContextType } from '../type/Type';

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const Cart = ({ children }: { children: ReactNode }) => {
//     const [cartTotal, setCartTotal] = useState<number>(0);
//     const [cartItems, setCartItems] = useState<ProductType[]>([]);

//     const addToCart = useCallback((product: ProductType) => {
//         setCartItems((prevItems) => {
//             const existingCart = prevItems.find(item => item.id === product.id);
//             if (existingCart) {
//                 existingCart.quantity += 1;
//                 return [...prevItems]; // Return a new array reference
//             } else {
//                 product.quantity = 1; // Ensure new product starts with quantity 1
//                 return [...prevItems, product]; // Add new product
//             }
//         });
//         setCartTotal((prevTotal) => prevTotal + product.price);
//     }, []);

//     const removeFromCart = useCallback((product: ProductType) => {
//         setCartItems((prevItems) => {
//             const existingCart = prevItems.find(item => item.id === product.id);
//             if (existingCart) {
//                 existingCart.quantity -= 1;
//                 if (existingCart.quantity === 0) {
//                     return prevItems.filter(item => item.id !== product.id); // Remove item
//                 }
//                 return [...prevItems]; // Return new array reference
//             }
//             return prevItems; // If not found, return the same array
//         });

//         setCartTotal((prevTotal) => prevTotal - product.price);
//     }, []);

//     const value = useMemo(() => ({
//         removeFromCart,
//         cartTotal,
//         addToCart,
//         cartItems
//     }), [cartItems, cartTotal, removeFromCart, addToCart]);

//     return (
//         <CartContext.Provider value={value}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (context === undefined) {
//         throw new Error('useCart must be used within a Cart');
//     }
//     return context;
// };
