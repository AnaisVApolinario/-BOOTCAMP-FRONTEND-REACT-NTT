import styles from './DropdownItem.module.css'

interface IDropdownItem{
  name: string;
  onCategorySelected: (name:string) => void;
}

export const DropdownItem: React.FC<IDropdownItem> = ({ name, onCategorySelected}) => {
  const handleClick = () => {
    onCategorySelected(name);
  };

  return (
    <li onClick={handleClick}>
      <a className={styles['nav__submenu-link']}>
        {name}
      </a>
    </li>
  );
};