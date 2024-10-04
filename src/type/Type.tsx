import { ReactNode } from "react";

export type CartContextType = {
  cartTotal: number;
  cartItems: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
};

export type ProductType = {
  id?: number | undefined;
  image?: string | undefined;
  title: string;
  price: number;
  quantity: number;
};

export interface accessory {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}


export type ButtonType = {
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
  Logout: () => void;
};

export type Props = { 
  children: ReactNode 
};
