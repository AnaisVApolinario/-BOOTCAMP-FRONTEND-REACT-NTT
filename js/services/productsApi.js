import { apiService } from "./apiService.js";

// es buena la separaci'on de esta url, una mejora adicional ser'ia usando variables de entorno
const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  return await apiService(`${BASE_URL}/products`);
};

