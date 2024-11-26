import { useCategoryContext } from '../../../context/CategoryContext';
import { useVisibilityContext } from '../../../context/VisibilityContext';
import styles from './DropdownItem.module.css'

interface IDropdownItem{
  name: string;
}

// este componente es cross o solo para el proyecto?  ya que el nombre es general, sin embargo, su contenido est'a muy amarrado al proyecto market
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