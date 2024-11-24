import styles from "./header.module.css";
import logo from "../../../assets/logo.png";
import Nav from "../Nav/Nav";
import { Icon } from "../../../utils/components/Icon/Icon";
import HeaderRightIcons from "../HeaderRightIcons/HeaderRightIcons";
import React, { useState } from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
import SearchBoxM from "../../../utils/components/SearchBox/SearchBoxM";
interface IHeader{
  onCategoryChange: (category: string) => void;
  cartQuantity: number;
  onSearchChange: (search: string) => void;
}
const Header:React.FC<IHeader> = ({onCategoryChange, cartQuantity, onSearchChange}) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsMenuActive(false);
  };

 
  // Función para eventos click en los iconos del componente HeaderRightIcons
  const handleUserClick = () => {
    console.log("User icon clicked");
  };
  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };
  const handleCartClick = () => {
    console.log("Cart icon clicked");
  };
  const eventHandlers = {
    user: handleUserClick,
    search: handleSearchClick,
    cart: handleCartClick,
  };

  const isDesktop = !useIsDesktop();
  return (
    <>
      <header className={styles.header}>
        {/* Icono del menú */}
        {isDesktop && <Icon name="bx-menu" onClick={toggleMenu} />}

        {/* Logo */}
        <a href="#" className={styles.header__logo}>
          <img
            src={logo}
            alt="Logo de TAM"
            className={styles.header__logo_img}
          />
        </a>

        {/* Lista de navegación */}
        <Nav isMenuActive={isMenuActive} onCategoryChange={onCategoryChange} />

        {/* Íconos a la derecha */}
        <HeaderRightIcons events={eventHandlers} cartQuantity={cartQuantity} />

        {/* Caja de búsqueda */}
        <SearchBoxM isSearchActive={isSearchActive} onSearchChange={onSearchChange}/>
      </header>
      {/* Overlay (invisible por defecto) */}
      <div
        className={`${styles.overlay} ${isMenuActive ? styles.active : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};
export default Header;
