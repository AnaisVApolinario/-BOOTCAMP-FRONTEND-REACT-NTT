import { useCartContext } from "../../context/CartContext";
import ResumenM from "../../utils/components/resumenM/ResumenM";
import CartItem from "../CartItem/CartItem";
import styles from "./CartProducts.module.css";

const CartProducts = () => {
  const { cartItems } = useCartContext();
  return (
    <div className={styles["carrito"]}>
      <h1 className={styles["carrito__titulo"]}>Carrito de Compras</h1>
      <div className={styles["carrito__contenedor"]}>
        {/* Lista de productos */}
        <div className={styles["carrito__productos"]}>
        {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img || ""} 
                title={item.title || "Producto sin nombre"}
                price={item.price || 0} 
                quantity={item.quantity}
              />
            ))
          ) : (
            <h3>No hay productos en el carrito.</h3>
          )}
        </div>
        {/* Resumen del pedido */}
        <div className={styles["carrito__resumen"]}>
         <ResumenM/>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
