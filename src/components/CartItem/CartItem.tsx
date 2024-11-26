// si el c'odigo est'a bien estructurado no es necesario especificar lo que hace cada l'inea
import React from "react";
import styles from "./CartItem.module.css";
import { useCartContext } from "../../context/CartContext";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
interface ICartItem {
  id:number;
  title: string;
  price:number;
  img:string;
  quantity:number;

}
const CartItem:React.FC<ICartItem>= ({id, title,price, img, quantity}) => {
  const { removeCartItem } = useCartContext();
  const { updateCartItem } = useCartContext(); 
  const handleQuantityChange = (newQuantity: number) => {
    updateCartItem(id, newQuantity); 
  };
  const handleRemove = () => {
    removeCartItem(id);
  };
  // hay que mantener un estandar para acceder a las clases en algunas se usar por key usando corchetes styles['...'] y otras de manera directa styles.class
  return (
    <div key={id} className={styles["cart__product"]}>
      <img
        src={img}
        alt={title}
        className={styles["cart__image"]}
      />
      <div className={styles["cart__detail"]}>
        <p className={styles["cart__name"]}>{title}</p>
        <p className={styles["cart__price"]}>S/ {price.toFixed(2)}</p>
      </div>
      <div className={styles["cart__quantity"]}>
        <ProductQuantity quantity={quantity} onQuantityChange={handleQuantityChange} isQuantityButtonCart={true} />
      </div>
      <button className={styles["cart__delete"]} onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;
