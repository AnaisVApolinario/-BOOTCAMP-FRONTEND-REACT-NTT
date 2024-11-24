import styles from './NavItem.module.css'
import { DropdownList } from "../../../utils/components/DropdownList/DropdownList";
import { useState } from 'react';

interface INavItem {
  name: string; 
  link: string; 
  categories?: { name: string }[]; 
  onCategoryChange?: (category: string) => void;
}

export const NavItem: React.FC<INavItem> = ({ name, link, categories, onCategoryChange }) => {
  const [isSubmenuActive, setSubmenuActive] = useState(false);
 
  const handleItemClick = () => { 
    setSubmenuActive(!isSubmenuActive); 
  };

  return (
    <li className={styles.nav__item} onClick={handleItemClick}>
      <a href={link} className={styles.nav__link}>
        {name}
      </a>
      {categories && <DropdownList categories={categories} isSubmenuActive={isSubmenuActive} onCategoryChange={onCategoryChange}/>}
    </li>
  );
};