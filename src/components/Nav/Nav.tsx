import React, { useEffect } from "react";
import styles from "./Nav.module.css";
import { NavItem } from "../../utils/components/NavItem/NavItem";
import { Icon } from "../../utils/components/Icon/Icon";
import useIsDesktop from '../../hooks/useIsDesktop';
import { apiService } from "../../proxy/apiService";
import { useCategoryContext } from "../../context/CategoryContext";
interface INav {
  isMenuActive?: boolean;
}

const Nav: React.FC<INav> = ({ isMenuActive }) => {
  const {setCategories } = useCategoryContext();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiService.getCategories();
        setCategories(data);
      } catch (err) {
        throw new Error("Error al obtener las categorías");
      }
    };

    fetchCategories();
  }, [setCategories]);
  const isDesktop = !useIsDesktop();
  return (
    <nav className={`${styles.nav} ${isMenuActive ? styles.active : ""}`}>
      { isDesktop &&    <div className={styles.nav__header}>
        <Icon name="bx-user" />
        <Icon name="bx-x" />
      </div>
      }
        
      <ul className={styles.nav__list}>
        <NavItem name="Home" path="/"/>
        <NavItem name="Categorias" isDropdown={true}/>
      </ul>
    </nav>
  );
};

export default Nav;
