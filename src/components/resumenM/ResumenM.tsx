import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import styles from './ResumenM.module.css'
import { ModuleRoutes } from '../../router/routes';

const ResumenM = () => {
  const {getCartTotal}= useCartContext();
  const navigate = useNavigate();
  const handleNextPage = () => {
    if(getCartTotal()){
      navigate(ModuleRoutes.FORM);
    }
  }
  const cartSubTotal = getCartTotal();
  const COSTO_ENVIO: number = 10;
  const cartTotal: number= getCartTotal() + COSTO_ENVIO;
  return (
   <>
      <h2 className={styles["cart__subtitle"]}>Total del Carrito</h2>
          <p className={styles["cart__line"]}>
            Subtotal: <span>$ {cartSubTotal.toFixed(2)}</span>
          </p>
          <p className={styles["cart__line"]}>
            Envío: <span>$ {COSTO_ENVIO}</span>
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