const BASE_URL = "https://dummyjson.com";
export const apiService = {
  getCategories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
      console.log(response)
      if (!response.ok) throw new Error("Error al obtener las categorías");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  getProducts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      if (!response.ok) throw new Error("Error al obtener los productos");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
};