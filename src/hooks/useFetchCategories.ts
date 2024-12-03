import { useEffect } from "react";
import { apiService } from "../proxy/apiService";
import { useCategoryContext } from "../context/CategoryContext";

export const useFetchCategories = () => {
  const { setCategories } = useCategoryContext();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiService.getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    fetchCategories();
  }, [setCategories]);
};