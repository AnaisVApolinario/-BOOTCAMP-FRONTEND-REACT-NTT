import { useCategoryContext } from '../../../context/CategoryContext';
import { useVisibilityContext } from '../../../context/VisibilityContext';
import styles from './DropdownItem.module.css'

interface IDropdownItem{
  name: string;
}

export const DropdownItem: React.FC<IDropdownItem> = ({ name}) => {
  const { setSelectedCategory } = useCategoryContext();
  const { setIsBannerVisible } = useVisibilityContext();

  const handleCategorySelected = () => {
    setSelectedCategory(name); // Actualiza la categoría seleccionada en el contexto
    if (name !== '') {
          setIsBannerVisible(false);
        } else {
          setIsBannerVisible(true);  // Mostrar el banner si no hay filtro
        }
  };

  return (
    <li onClick={handleCategorySelected}>
      <a className={styles['nav__submenu-link']}>
        {name}
      </a>
    </li>
  );
};