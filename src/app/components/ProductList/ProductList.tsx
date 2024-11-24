import styles from "./ProductLis.module.css";
import { apiService } from "../../proxy/apiService";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import IProducts from "../../domain/IProducts";
interface IProductList{
  category:string,
  handleAddToCart:(quanty:number)=>void
}
const ProductList:React.FC<IProductList> = ({category, handleAddToCart}) => {
  // Estado para los productos
  const [products, setProducts] = useState<IProducts[]>([]);
  // const [error, setError] = useState(null); // Estado para manejar errores
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]); // Estado para productos filtrados
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiService.getProducts();
        setProducts(data.products);
        setFilteredProducts(data.products); // Inicialmente muestra todos los productos
        setLoading(false);
      } catch (err) {
        throw new Error("Error al obtener los productos");
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = products.filter(
        (product) => product.category === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

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
          handleAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
};

export default ProductList;
