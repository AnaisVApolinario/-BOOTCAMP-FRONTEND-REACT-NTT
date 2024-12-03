import { DropdownItem } from "../DropdownItem/DropdownItem";
import styles from "./DropdownList.module.css";
import { useCategoryContext } from "../../context/CategoryContext";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { useVisibilityContext } from "../../context/VisibilityContext";
interface IDropdownList {
  isSubmenuActive: boolean;
}

export const DropdownList: React.FC<IDropdownList> = ({ isSubmenuActive }) => {
  useFetchCategories();
  const { categories } = useCategoryContext();
  const { setSelectedCategory } = useCategoryContext();
  const { setActive } = useVisibilityContext();
  const handleCategorySelected = (name: string) => {
    setSelectedCategory(name);
    if (name !== "") {
      setActive("banner", false);
    }
  };
  return (
    <ul
      className={`${styles["nav__submenu"]} ${
        isSubmenuActive ? styles.show : ""
      }`}
    >
      {categories.map((category, index) => (
        <DropdownItem
          key={index}
          name={category.name}
          onCategorySelected={handleCategorySelected}
        />
      ))}
    </ul>
  );
};
