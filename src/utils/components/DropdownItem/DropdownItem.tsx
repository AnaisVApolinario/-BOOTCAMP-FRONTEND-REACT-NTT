import styles from './DropdownItem.module.css'

interface IDropdownItem{
  name: string;
  onCategoryChange?:()=>void
}

export const DropdownItem: React.FC<IDropdownItem> = ({ name, onCategoryChange}) => {
  return (
    <li onClick={onCategoryChange}>
      <a href="#" className={styles['nav__submenu-link']}>
        {name}
      </a>
    </li>
  );
};