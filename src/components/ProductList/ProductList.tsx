import styles from "./ProductLis.module.css";
import Card from "../Card/Card";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import Loader from "../Loader/Loader";
import NoProductsAvailable from "../NoProductsAvailable/NoProductsAvailable";
const ProductList = () => {
  const { products, loading } = useFetchProducts();
  const filteredProducts = useFilteredProducts(products);
  if (loading) {
    return <Loader />;
  }

  if (filteredProducts.length === 0) {
    return <NoProductsAvailable />;
  }

  return (
    <section className={styles["products"]}>
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
