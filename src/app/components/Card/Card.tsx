import React, { useState } from "react";
import { Button } from "../../../utils/components/Button/Button";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import styles from "./Card.module.css";
interface IProduct {
  id:string;
  img: string;
  title:string;
  description:string;
  category:string;
  handleCartQuantity?: (quantity: number) => void;
}
const Card:React.FC<IProduct> = ({id,img,title,description,category, handleCartQuantity}) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity); // Actualizar la cantidad desde ProductQuantity
  };
  
  const handleAdd = () => {
    if (handleCartQuantity) {
      if (quantity > 0) {
        handleCartQuantity(quantity); 
        setQuantity(1); 
      }
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
        <ProductQuantity quantity={quantity} onQuantityChange={handleQuantityChange}/>
        <Button name={"Agregar"} onClick={handleAdd}/>
      </div>
    </div>
  );
};
export default Card;
