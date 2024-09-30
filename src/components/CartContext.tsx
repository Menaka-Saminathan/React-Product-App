import{ createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
    cartCount: number;
    addToCart: (amount: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const Cart = ({ children }: { children: ReactNode }) => {
    const [cartCount, setCartCount] = useState<number>(0);

    const addToCart = (amount: number) => {
        console.log('amount:'+amount); 
        setCartCount(cartCount + amount);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    console.log("contexttttttttttttttttttttttttttttttttttttttt"+context);
    
    if (context === undefined) {
        throw new Error('useCart must be used within a Cart');
    }
    return context;
};































// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface CartContextType {
//     cartCount: number;
//     addToCart: (amount: number) => void; // Type for the amount parameter
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// interface CartProviderProps {
//     children: ReactNode; // Type for children prop
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//     const [cartCount, setCartCount] = useState<number>(0);

//     const addToCart = (amount: number): void => {
//         setCartCount(prevCount => prevCount + amount);
//     };

//     return (
//         <CartContext.Provider value={{ cartCount, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = (): CartContextType => {
//     const context = useContext(CartContext);
//     if (context === undefined) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };























// // CartContext.tsx
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// type Product = {
//     id: number; // Unique identifier for the product
//     name: string; // Name of the product
//     price: number; // Price of the product
// };

// type CartContextType = {
//     cartCount: number;
//     cartItems: Product[]; // Array to hold cart items
//     addToCart: (product: Product, amount: number) => void; // Accept product details
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//     const [cartCount, setCartCount] = useState<number>(0);
//     const [cartItems, setCartItems] = useState<Product[]>([]); // Initialize cart items

//     const addToCart = (product: Product, amount: number) => {
//         setCartCount(prevCount => prevCount + amount); // Update cart count
//         setCartItems(prevItems => [...prevItems, product]); // Add product to cart
//     };

//     return (
//         <CartContext.Provider value={{ cartCount, cartItems, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (context === undefined) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };

