import { apiService } from "./apiService.ts";
import {ProductI} from "../interface/productInterface.ts"
const BASE_URL = "https://dummyjson.com";

export const getProducts = async (): Promise<ProductI>  => {
  return await apiService<ProductI>(`${BASE_URL}/products`);
};

