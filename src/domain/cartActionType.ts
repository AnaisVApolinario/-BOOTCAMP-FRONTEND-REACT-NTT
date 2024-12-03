export interface CartItem {
  id: number;
  img?: string;
  title?: string;
  price?: number;
  quantity: number;
}
export enum CartActionType {
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  CLEAR_CART= "CLEAR_CART",
}
export type CartAction =
   { type: CartActionType.UPDATE_CART_ITEM; payload:{ id: number; quantity: number; img?: string; title?: string; price?: number }} 
  | { type: CartActionType.REMOVE_CART_ITEM; payload: { id: number } }
  | { type: CartActionType.CLEAR_CART };