
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