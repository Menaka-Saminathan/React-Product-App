import { createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
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
const CartContext = createContext<CartContextType | undefined>(undefined);

export const Cart = ({ children }: { children: ReactNode }) => {
    const [cartTotal, setCartTotal] = useState<number>(0);
    const [cartItems, setCartItems] = useState<ProductType[]>([]);

    const addToCart = (product: ProductType) => {
        const existingCart = cartItems.find (item => item.id == product.id) 
        if(existingCart) {
            existingCart.quantity += 1
            setCartItems(cartItems);
        } else {
            product.quantity += 1
            setCartItems([...cartItems, product]);
        }
        setCartTotal(cartTotal + product.price); 
    };

    const removeFromCart = (product: ProductType) => {
        const existingCart = cartItems.find (item => item.id == product.id) 
        if(existingCart) {
            existingCart.quantity -= 1
            if(existingCart.quantity == 0) {
                setCartItems(cartItems.filter(item => item.id !== product.id))
            } else {
                setCartItems(cartItems);
            }
        }
        setCartTotal(cartTotal - product.price); 
    };

    return (
        <CartContext.Provider value={{removeFromCart, cartTotal, addToCart, cartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a Cart');
    }
    return context;
};
