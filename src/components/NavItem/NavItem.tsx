import styles from './NavItem.module.css'
import { DropdownList } from "../DropdownList/DropdownList";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../context/CategoryContext';

interface INavItem {
  name: string; 
  path?: string; 
  isDropdown?: boolean;
  onClick?: () => void; 
}

export const NavItem: React.FC<INavItem> = ({ name, path, isDropdown,onClick }) => {
  
  const {categories}=useCategoryContext();
  const [isSubmenuActive, setSubmenuActive] = useState(false);
  const handleItemClick = () => { 
    setSubmenuActive(!isSubmenuActive); 
  };

  return (
    <li className={styles['nav__item']} onClick={handleItemClick}>
      <Link to={path || ""} className={styles['nav__link']} onClick={onClick}>
        {name}
      </Link>
      {isDropdown && categories && <DropdownList isSubmenuActive={isSubmenuActive}/>}
    </li>
  );
};