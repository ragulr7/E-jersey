
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };
    function removeFromCart(indexToRemove) {
    setCart(prev => prev.filter((_, index) => index !== indexToRemove));
  }

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart , clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
