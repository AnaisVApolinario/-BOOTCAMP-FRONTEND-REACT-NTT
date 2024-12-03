import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartActionType, CartItem } from "../domain/cartActionType";
import { CartReducer } from "./CartReducer";



interface CartContextType {
  cartItems: CartItem[];
  updateCartItem: (id: number, quantity: number, img?: string, title?: string, price?: number) => void; 
  removeCartItem: (id: number) => void; 
  getCartQuantity: () => number; 
  getCartTotal: () => number; 
  clearCart:()=>void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const initialCartState: CartItem[] = [];

 const [cartItems, dispatch] = useReducer(CartReducer, initialCartState);

  const updateCartItem = (id: number, quantity: number, img?: string, title?: string, price?: number) => {
    const existingItem = cartItems.find(item => item.id === id);
    dispatch({
      type: CartActionType.UPDATE_CART_ITEM,
      payload: { id,  
        quantity: existingItem ? existingItem.quantity + quantity : quantity, 
        img, title, price },
    })
  };
  
  const removeCartItem = (id:number)=>{
    dispatch({
      type:CartActionType.REMOVE_CART_ITEM,
      payload:{id}
    })
  }

  const clearCart=()=>{
    dispatch({
      type:CartActionType.CLEAR_CART,
    })
  }

  const getCartQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCartItem,removeCartItem, clearCart, getCartQuantity, getCartTotal}}>
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