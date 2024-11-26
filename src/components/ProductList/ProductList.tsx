import styles from "./ProductLis.module.css";
import { apiService } from "../../proxy/apiService";
import {useEffect, useState } from "react";
import Card from "../Card/Card";
import IProducts from "../../domain/IProducts";
import { useSearchContext } from "../../context/searchContext";
import { useCategoryContext } from "../../context/CategoryContext";
import { useVisibilityContext } from "../../context/VisibilityContext";
import NoProductsAvailable from "../../utils/components/NoProductsAvailable/NoProductsAvailable";
import Loader from "../../utils/components/Loader/Loader";

const ProductList = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true); 
  
  const { selectedCategory } = useCategoryContext();
  const { searchQuery } = useSearchContext()
  const { setIsFooterEmpty } = useVisibilityContext(); 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiService.getProducts();
        setProducts(data.products);
        setFilteredProducts(data.products); 
        setLoading(false);
      } catch (err) {
        throw new Error("Error al obtener los productos");
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered= products;
    if (selectedCategory) {
       filtered = filtered.filter(
        (product) => product.category === selectedCategory.toLowerCase()
      );
    } 
    if (searchQuery) {
       filtered = filtered.filter((product) =>
        product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
    setIsFooterEmpty(filtered.length === 0);
  }, [selectedCategory, searchQuery, products, setIsFooterEmpty]);

  // Renderizar mientras se cargan los datos
  if (loading) {
    return <Loader/>;
  }
  // Renderizar un mensaje si no hay productos
  if (filteredProducts.length === 0) {
    return <NoProductsAvailable />;
  }
  return (
    <section className={styles.products}>
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          id={Number(product.id)}
          img={product.thumbnail}
          title={product.title}
          description={product.description}
          category={product.category}
          price={product.price}
        />
      ))}
    </section>
  );
};

export default ProductList;
