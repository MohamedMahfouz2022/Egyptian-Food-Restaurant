"use client";
import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  // cart = { [itemId]: { name, price, qty } }

  const addItem = useCallback((item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...prev[item.id], qty: prev[item.id].qty + 1 }
        : { name: item.name, price: item.price, qty: 1 },
    }));
  }, []);

  const removeItem = useCallback((itemId) => {
    setCart((prev) => {
      if (!prev[itemId]) return prev;
      if (prev[itemId].qty === 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return { ...prev, [itemId]: { ...prev[itemId], qty: prev[itemId].qty - 1 } };
    });
  }, []);

  const clearCart = useCallback(() => setCart({}), []);

  const totalQty = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const totalPrice = Object.values(cart).reduce((s, i) => s + i.price * i.qty, 0);
  const cartItems = Object.entries(cart).map(([id, v]) => ({ id, ...v }));

  return (
    <CartContext.Provider value={{ cart, cartItems, addItem, removeItem, clearCart, totalQty, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}