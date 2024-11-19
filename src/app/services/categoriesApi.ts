import { apiService } from "./apiService.ts";
import {CategoryI} from "../interface/categoryInterface.ts"

const BASE_URL = "https://dummyjson.com";

export const getCategories = async (): Promise<CategoryI[]> => {
  return await apiService<CategoryI[]>(`${BASE_URL}/products/categories`);
};