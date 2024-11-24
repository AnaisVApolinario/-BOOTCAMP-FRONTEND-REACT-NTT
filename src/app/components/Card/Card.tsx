import React from "react";
import { Button } from "../../../utils/components/Button/Button";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import styles from "./Card.module.css";
interface IProduct {
  id:string;
  img: string;
  title:string;
  description:string;
  category:string;
  handleAddToCart?: (quantity: number) => void; // Función para agregar al carrito
}
const Card:React.FC<IProduct> = ({id,img,title,description,category, handleAddToCart}) => {
  const onAddToCart = (quantity: number) => {
    if (handleAddToCart) {
      handleAddToCart(quantity); // Pasamos la cantidad al carrito
    }
  };
  return (
    <div key={id} className={styles.product}>
      <div className={styles.product__top}>
        <div className={styles.product__image}>
          <img src={img}alt="Avena" />
        </div>
        <div className={styles.product__info}>
          <p className={styles.product__name}>{title}</p>
          <p className={styles.product__description}>{description}</p>
          <p className={styles.product__weight}>{category}</p>
        </div>
      </div>
      <div className={styles.product__bottom}>
        <p className={styles.product__price}>S/.2.50</p>
        <ProductQuantity />
        <Button name={"Add"} onClick={() => onAddToCart(1)}
        />
      </div>
    </div>
  );
};
export default Card;
