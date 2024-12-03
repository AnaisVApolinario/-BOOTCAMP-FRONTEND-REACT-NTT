import { useCartContext } from "../../context/CartContext";
import ResumenM from "../resumenM/ResumenM";
import CartItem from "../CartItem/CartItem";
import styles from "./CartProducts.module.css";

const CartProducts = () => {
  const { cartItems } = useCartContext();
  return (
    <div className={styles["cart"]}>
      <h1 className={styles["cart__title"]}>Carrito de Compras</h1>
      <div className={styles["cart__container"]}>
        <div className={styles["cart__products"]}>
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
    
        <div className={styles["cart__resumen"]}>
         <ResumenM/>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
