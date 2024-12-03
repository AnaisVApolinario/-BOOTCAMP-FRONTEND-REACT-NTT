import { LoginType } from '../domain/loginType';
const BASE_URL = "https://dummyjson.com";
export const apiService = {
  getCategories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
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
  },
  
  login: async (loginData: LoginType) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: loginData.username, password: loginData.password }),
      });
      if (response.ok) {
        const data = await response.json();
        return { success: true, data }; 
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.message || "Credenciales inválidas" }; 
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: "Error al iniciar sesión. Intenta más tarde." }; 
    }
  },
  

};