import { ReactNode } from "react";

export type Carts = {
  product: Product[];
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

export type Product = {
  id?: number | undefined;
  image?: string | undefined;
  title: string;
  price: number;
  quantity: number;
};

export interface Accessory {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}


export type ButtonField = {
  className: String;
  name: String;
  onClick: () => void;
  varient: String;
};

export type login = {
  email: string;
  password: string;
};

export type user = {
  id: number;
  email: string;
  password: string;
};

export type AuthProps = {
  isValid: boolean;
  Login: () => void;
};

export type Props = { 
  children: ReactNode 
};

export type totalPrice = {
  cartTotal: number,
  increaseTotal: (amount: number) => void,
  decreaseTotal: (amount: number) => void,
};

export type Element = {
  element: Product
}

export type Accesses = {
  accessories: Product
}
