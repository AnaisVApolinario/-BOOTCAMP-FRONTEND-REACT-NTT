import { apiService } from "./apiService.ts";
import {CategoryResponse} from "../interface/categoryInterface.ts"

const BASE_URL = "https://dummyjson.com";

export const getCategories = async (): Promise<CategoryResponse[]> => {
  return await apiService<CategoryResponse[]>(`${BASE_URL}/products/categories`);
};