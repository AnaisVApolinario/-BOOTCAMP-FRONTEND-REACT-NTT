import styles from "./HeaderRightIcons.module.css";
import useIsDesktop from "../../hooks/useIsDesktop";
import Icon from "../Icon/Icon";
import { useCartContext } from "../../context/CartContext";
import { IconName } from "../../domain/IconName";
interface IHeaderRightIcons {
  events?: {
    [key: string]: () => void;
  };
}
const HeaderRightIcons: React.FC<IHeaderRightIcons> = ({ events = {}}) => {
  // deber'ia leer del contexto no del storage de lo contrario cualquiera podr'ia modificarlo
  const firstname = sessionStorage.getItem("firstname");
  const isDesktop = useIsDesktop();

  const { getCartQuantity } = useCartContext();

  return (
    <div className={styles["header__icons"]}>
      {isDesktop && (
        <div className={styles['session__container']}>
          <p className={styles['session__title']}>Hola {firstname}</p>
          <Icon iconName={IconName.User} onClick={events["user"]} />
        </div>
      )}

      <Icon iconName={IconName.Search} onClick={events["search"]} />

      <Icon iconName={IconName.Cart} onClick={events["cart"]}>
        <span>{getCartQuantity()}</span>
      </Icon>
    </div>
  );
};

export default HeaderRightIcons;
