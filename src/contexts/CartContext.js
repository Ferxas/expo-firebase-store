import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Agregar producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                // Si ya existe, aumenta la cantidad
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Si no existe, lo agrega con cantidad inicial de 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Eliminar un producto (una unidad) del carrito
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === productId);

            if (existingItem.quantity > 1) {
                // Si hay más de una unidad, reduce la cantidad
                return prevItems.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                // Si solo queda una unidad, elimina el producto
                return prevItems.filter((item) => item.id !== productId);
            }
        });
    };

    // Vaciar todo el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);