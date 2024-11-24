import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { NavItem } from "../../../utils/components/NavItem/NavItem";
import { Icon } from "../../../utils/components/Icon/Icon";
import useIsDesktop from '../../hooks/useIsDesktop';
import { apiService } from "../../proxy/apiService";
interface INav {
  isMenuActive?: boolean;
  onCategoryChange?: (category: string) => void;
}

const Nav: React.FC<INav> = ({ isMenuActive, onCategoryChange }) => {
  const [categories, setCategories] = useState<{ name: string }[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiService.getCategories();
        setCategories(data);
        console.log(data)
      } catch (err) {
        throw new Error("Error al obtener las categorías");
      }
    };

    fetchCategories();
  }, []);
  const isDesktop = !useIsDesktop();
  return (
    <nav className={`${styles.nav} ${isMenuActive ? styles.active : ""}`}>
      { isDesktop &&    <div className={styles.nav__header}>
        <Icon name="bx-user" />
        <Icon name="bx-x" />
      </div>
      }
        
      <ul className={styles.nav__list}>
        <NavItem name="Home" link="#home" />
        <NavItem name="Categorias" link="#" categories={categories} onCategoryChange={onCategoryChange} />
        <NavItem name="Soporte" link="#support" />
      </ul>
    </nav>
  );
};

export default Nav;
