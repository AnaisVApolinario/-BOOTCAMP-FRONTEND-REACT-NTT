
import { DropdownItem } from "../DropdownItem/DropdownItem";
import styles from './DropdownList.module.css'
import { useCategoryContext } from "../../../context/CategoryContext";
interface IDropdownList {
  isSubmenuActive: boolean;
}

// igual este componente al usar el drowndownitem est'a amarrado a usarse unicamente en market
export const DropdownList: React.FC<IDropdownList> = ({isSubmenuActive}) => {
  const { categories } = useCategoryContext();
  return (
    <ul className={`${styles.nav__submenu} ${isSubmenuActive ? styles.show : ""}`}>
      {categories.map((category, index) => (
        <DropdownItem  key={index} name={category.name}/>
      ))}
    </ul>
  );
};