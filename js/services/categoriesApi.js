import { apiService } from "./apiService.js";

const BASE_URL = "https://dummyjson.com";

export const getCategories = async () => {
  return await apiService(`${BASE_URL}/products/categories`);
};