import React, { useState } from "react";
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
  return (
    <div key={id} className={styles["cart__product"]}>
      {/* Imagen del producto */}
      <img
        src={img}
        alt={title}
        className={styles["cart__image"]}
      />
      {/* Detalles del producto */}
      <div className={styles["cart__detail"]}>
        <p className={styles["cart__name"]}>{title}</p>
        <p className={styles["cart__price"]}>S/ {price.toFixed(2)}</p>
      </div>
      {/* Botones de cantidad */}
      <div className={styles["cart__quantity"]}>
        <ProductQuantity quantity={quantity} onQuantityChange={handleQuantityChange} isQuantityButtonCart={true} />
      </div>
      {/* Botón de eliminar */}
      <button className={styles["cart__delete"]} onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;
