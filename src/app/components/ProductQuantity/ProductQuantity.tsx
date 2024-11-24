import React from 'react'
import { CounterButton } from '../../../utils/components/CounterButton/CounterButton';
import styles from './ProductQuantity.module.css';
// interface IProductQuantity {
//   // handleAddToCart: (quantity: number) => void;
// }
// ProductQuantity.jsx
const ProductQuantity = () => {
  const [quantity, setQuantity] = React.useState(1);

  const increase = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
      };
  const decrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
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