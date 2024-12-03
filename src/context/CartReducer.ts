import { CartAction, CartActionType, CartItem } from "../domain/cartActionType";

export const CartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case CartActionType.UPDATE_CART_ITEM: {
      const { id, quantity, img, title, price } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
  
        return state.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
      } else {

        return [...state, { id, img, title, price, quantity }];
      }
    }
    case CartActionType.REMOVE_CART_ITEM: {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    }
    case CartActionType.CLEAR_CART:
      return [];
    default:
      return state;
  }
}