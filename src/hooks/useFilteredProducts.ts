import { useEffect, useState } from "react";
import { useCategoryContext } from "../context/CategoryContext";
import { useSearchContext } from "../context/searchContext";
import IProducts from "../domain/IProducts";
import filterProducts from "../utils/helpers/filter";
import { useVisibilityContext } from "../context/VisibilityContext";

export const useFilteredProducts = (products: IProducts[]) => {
  const { selectedCategory } = useCategoryContext();
  const { searchQuery } = useSearchContext();
  const {setActive} = useVisibilityContext();
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    const filtered = filterProducts(products, selectedCategory, searchQuery);
    setFilteredProducts(filtered);
    if(filtered.length > 0){
      setActive("footer", false);
    }else{
      setActive("footer", true);
    }
  }, [products, selectedCategory, searchQuery]);

  return filteredProducts;
};
