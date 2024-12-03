import { useEffect, useState } from "react";
import IProducts from "../domain/IProducts";
import { apiService } from "../proxy/apiService";

export const useFetchProducts = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiService.getProducts();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading };
};