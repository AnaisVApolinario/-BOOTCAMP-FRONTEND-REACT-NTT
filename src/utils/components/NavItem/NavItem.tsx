import styles from './NavItem.module.css'
import { DropdownList } from "../../../utils/components/DropdownList/DropdownList";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../../context/CategoryContext';

interface INavItem {
  name: string; 
  path?: string; 
  isDropdown?: boolean; 
}

export const NavItem: React.FC<INavItem> = ({ name, path, isDropdown }) => {
  const {categories}=useCategoryContext();
  const [isSubmenuActive, setSubmenuActive] = useState(false);
  // Función para manejar el clic en el elemento <li> 
  const handleItemClick = () => { 
    setSubmenuActive(!isSubmenuActive); 
  };

  return (
    <li className={styles.nav__item} onClick={handleItemClick}>
      <Link to={path || ""} className={styles.nav__link}>
        {name}
      </Link>
      {isDropdown && categories && <DropdownList isSubmenuActive={isSubmenuActive}/>}
    </li>
  );
};