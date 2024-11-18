import { apiService } from "./apiService.js";

const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  return await apiService(`${BASE_URL}/products`);
};

