
import { DropdownItem } from "../DropdownItem/DropdownItem";
import styles from './DropdownList.module.css'
import { useCategoryContext } from "../../../context/CategoryContext";
interface IDropdownList {
  isSubmenuActive: boolean;
}

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