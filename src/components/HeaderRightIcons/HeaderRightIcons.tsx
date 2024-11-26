import styles from "./HeaderRightIcons.module.css"; 
import useIsDesktop from '../../hooks/useIsDesktop';
import { Icon } from "../../utils/components/Icon/Icon";
import { useCartContext } from "../../context/CartContext";
interface IHeaderRightIcons {
  events?: {
    [key:string]: ()=>void
  };
}
const HeaderRightIcons: React.FC<IHeaderRightIcons> = ({events = {}}) => {
  const isDesktop = useIsDesktop();

  const { getCartQuantity } = useCartContext();

  return (
    <div className={styles.header__icons}>
      {/* Ícono de usuario solo para desktop */}
      {isDesktop && <Icon name="bx-user" onClick={events['user']} />}
      {/* Ícono de búsqueda */}
      <Icon name="bx-search" onClick={events['search']} />

      {/* Ícono de carrito */}
      <Icon name="bx-cart" onClick={events['cart']}>
        <span>{getCartQuantity()}</span>
      </Icon>
    </div>
  );
};

export default HeaderRightIcons;
