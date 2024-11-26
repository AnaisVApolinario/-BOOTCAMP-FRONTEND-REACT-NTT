import React, { useState } from "react";
import { CounterButton } from "../../utils/components/CounterButton/CounterButton";
import styles from "./ProductQuantity.module.css";

interface ProductQuantityProps {
  quantity: number; // Cantidad de productos
  onQuantityChange: (quantity: number) => void; 
  isQuantityButtonCart?:boolean
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({quantity, onQuantityChange, isQuantityButtonCart=false}) => {


  const increase = () => onQuantityChange(quantity + 1); 
  const decrease = () => {
    if (quantity > 1) onQuantityChange(quantity - 1); 
  };
  return (
    <div className={isQuantityButtonCart? styles['new-quantity__button']:styles.product__quantity}>
      <CounterButton type={"decrement"} onClick={decrease} />
      <p className={isQuantityButtonCart? styles['new-quantity__value']:styles["product__quantity-value"]}>{quantity}</p>
      <CounterButton type={"increment"} onClick={increase} />
    </div>
  );
};
export default ProductQuantity;
