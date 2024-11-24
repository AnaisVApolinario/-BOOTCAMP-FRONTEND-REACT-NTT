import styles from "./ProductLis.module.css";
import { apiService } from "../../proxy/apiService";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import IProducts from "../../domain/IProducts";
interface IProductList{
  category:string,
  handleCartQuantity:(quanty:number)=>void
  searchQuery?: string;
  onEmptyProducts: (isEmpty: boolean) => void;
}
const ProductList:React.FC<IProductList> = ({category, handleCartQuantity, searchQuery, onEmptyProducts}) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true); 
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
    if (category) {
      filtered = filtered.filter(
        (product) => product.category === category.toLowerCase()
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((product) =>
       product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
     );
   }
   setFilteredProducts(filtered);
   onEmptyProducts(filtered.length === 0);
  }, [category, products, searchQuery, onEmptyProducts]);

  // Renderizar mientras se cargan los datos
  if (loading) {
    return <p>Cargando productos...</p>;
  }
  // Renderizar un mensaje si no hay productos
  if (filteredProducts.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }
  return (
    <section className={styles.products}>
      {filteredProducts.map((product) => (
        <Card
          id={product.id}
          img={product.thumbnail}
          title={product.title}
          description={product.description}
          category={product.category}
          handleCartQuantity={handleCartQuantity}
        />
      ))}
    </section>
  );
};

export default ProductList;
