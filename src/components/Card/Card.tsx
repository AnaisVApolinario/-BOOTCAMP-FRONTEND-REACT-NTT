import React, { useState } from "react";
import { Button } from "../../utils/components/Button/Button";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import styles from "./Card.module.css";
import { useCartContext } from "../../context/CartContext";
interface IProduct {
  id:number,
  img: string;
  title: string;
  description: string;
  category: string;
  price:number
}
const Card: React.FC<IProduct> = ({
  id,
  img,
  title,
  description,
  category,
  price
}) => {
  const { updateCartItem } = useCartContext(); 
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    if(quantity>0){
      updateCartItem(id, quantity, img, title, price);
      setQuantity(1);
    }
  };
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity); // Actualiza la cantidad localmente
  };
  return (
    <div className={styles.product}>
      <div className={styles.product__top}>
        <div className={styles.product__image}>
          <img src={img} alt="Avena" />
        </div>
        <div className={styles.product__info}>
          <p className={styles.product__name}>{title}</p>
          <p className={styles.product__description}>{description}</p>
          <p className={styles.product__weight}>{category}</p>
        </div>
      </div>
      <div className={styles.product__bottom}>
        <p className={styles.product__price}>${price}</p>
        <ProductQuantity quantity={quantity}
          onQuantityChange={handleQuantityChange} />
        <Button name={"Agregar"} onClick={handleAddToCart} />
      </div>
    </div>
  );
};
export default Card;
