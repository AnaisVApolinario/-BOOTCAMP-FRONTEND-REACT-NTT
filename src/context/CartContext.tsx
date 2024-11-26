import { createContext, ReactNode, useContext, useState } from "react";
import CartItem from "../components/CartItem/CartItem";

interface CartItem {
  id: number;
  img?: string;
  title?: string;
  price?: number;
  quantity: number; 

}

interface CartContextType {
  cartItems: CartItem[];
  updateCartItem: (id: number, quantity: number, img?: string, title?: string, price?: number) => void; // Actualizar cantidad de un producto
  removeCartItem: (id: number) => void; // Eliminar un producto del carrito
  getCartQuantity: () => number; // Obtener cantidad total de productos en el carrito
  getCartTotal: () => number; // Obtener el total del carrito
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateCartItem = (id: number, quantity: number, img?: string, title?: string, price?: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        // Actualiza la cantidad del producto existente
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
      } else {
        // Agrega un nuevo producto al carrito
        return [...prevItems, { id, img, title, price, quantity }];
      }
    });
  };

  const getCartQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);
  const removeCartItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCartItem, getCartQuantity, removeCartItem,getCartTotal}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe ser usado dentro de un CartProvider");
  }
  return context;
};