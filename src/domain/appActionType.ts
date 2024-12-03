export interface IAppState {
  cartQuantity: number;
  searchQuery: string;
  selectedCategory: string;
  isBannerVisible: boolean;
  isFooterEmpty: boolean;
}
export enum AppActionType {
  SET_CART_QUANTITY = "SET_CART_QUANTITY",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY",
  TOGGLE_BANNER_VISIBILITY = "TOGGLE_BANNER_VISIBILITY",
  TOGGLE_FOOTER_EMPTY = "TOGGLE_FOOTER_EMPTY",
}
export type AppPayloads = 
{ type: AppActionType.SET_CART_QUANTITY, payload: number }
| { type: AppActionType.SET_SEARCH_QUERY, payload: string }
| { type: AppActionType.SET_SELECTED_CATEGORY, payload: string }
| { type: AppActionType.TOGGLE_BANNER_VISIBILITY }
| { type: AppActionType.TOGGLE_FOOTER_EMPTY };