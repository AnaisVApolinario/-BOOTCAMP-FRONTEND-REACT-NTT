import React from 'react'
import { CounterButton } from '../../../utils/components/CounterButton/CounterButton';
import styles from './ProductQuantity.module.css';
interface IProductQuantity {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}
const ProductQuantity:React.FC<IProductQuantity>= ({quantity,onQuantityChange}) => {
  const increase = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(newQuantity);
      };
  const decrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className={styles.product__quantity}>
      <CounterButton type={'decrement'} onClick={decrease}/>
      <p className={styles['product__quantity-value']}>{quantity}</p>
      <CounterButton type={'increment'} onClick={increase}/>
    </div>
  );
};
export default ProductQuantity;