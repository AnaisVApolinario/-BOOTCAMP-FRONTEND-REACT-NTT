import { DropdownItem } from "../DropdownItem/DropdownItem";
import styles from './DropdownList.module.css'
interface IDropdownList {
  categories: { name: string }[];
  isSubmenuActive: boolean;
  onCategoryChange?: (category: string) => void;
}

export const DropdownList: React.FC<IDropdownList> = ({ categories, isSubmenuActive, onCategoryChange}) => {
  return (
    <ul className={`${styles.nav__submenu} ${isSubmenuActive ? styles.show : ""}`}>
      {categories.map((category, index) => (
        <DropdownItem  key={index} name={category.name} onCategoryChange={() => onCategoryChange && onCategoryChange(category.name)} />
      ))}
    </ul>
  );
};