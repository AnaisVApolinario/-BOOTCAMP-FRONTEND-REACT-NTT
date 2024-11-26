import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext'
import styles from './ResumenM.module.css'

const ResumenM = () => {
  const {getCartTotal}= useCartContext();
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/form');
  }
  const cartSubTotal = getCartTotal();
  const cartTotal = getCartTotal() + 15;
  return (
   <>
      <h2 className={styles["cart__subtitle"]}>Total del Carrito</h2>
          <p className={styles["cart__line"]}>
            Subtotal: <span>$ {cartSubTotal.toFixed(2)}</span>
          </p>
          <p className={styles["cart__line"]}>
            Envío: <span>$ 15.00</span>
          </p>
          <p className={styles["cart__total"]}>
            Total: <span>$ {cartTotal.toFixed(2)}</span>
          </p>
          <button className={styles["cart__button-buy"]} onClick={handleNextPage}>
            Finalizar Compra
          </button>
   </>
  )
}

export default ResumenM