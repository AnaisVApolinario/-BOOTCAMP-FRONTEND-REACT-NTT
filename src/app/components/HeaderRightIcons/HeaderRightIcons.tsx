import styles from "./HeaderRightIcons.module.css"; // Asegúrate de definir tus estilos aquí.
import useIsDesktop from '../../hooks/useIsDesktop';
import { Icon } from "../../../utils/components/Icon/Icon";
interface IHeaderRightIcons {
  events?: {
    [key:string]: ()=>void
  };
  cartQuantity: number; 
}
const HeaderRightIcons: React.FC<IHeaderRightIcons> = ({events = {},  cartQuantity}) => {
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.header__icons}>
      {/* Ícono de usuario solo para desktop */}
      {isDesktop && <Icon name="bx-user" onClick={events['user']} />}
      {/* Ícono de búsqueda */}
      <Icon name="bx-search" onClick={events['search']} />

      {/* Ícono de carrito */}
      <Icon name="bx-cart" onClick={events['cart']}>
        <span>{cartQuantity}</span>
      </Icon>
    </div>
  );
};

export default HeaderRightIcons;
