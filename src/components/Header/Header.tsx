import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import Nav from "../Nav/Nav";
import { Icon } from "../../utils/components/Icon/Icon";
import HeaderRightIcons from "../HeaderRightIcons/HeaderRightIcons";
import { useState } from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
import SearchBoxM from "../../utils/components/SearchBox/SearchBoxM";
import { Link, useNavigate } from "react-router-dom";

const Header= () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };


  const handleUserClick = () => {
    // cuando hay una funcionalidad pendiente es recomendable poner TODO
    // TODO
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };
  const handleCartClick = () => {
    // usemos un enum
    navigate("/cart"); 
  };
  const eventHandlers = {
    user: handleUserClick,
    search: handleSearchClick,
    cart: handleCartClick,
  };

  // por qu'e el hook est'a negado? el hook solo debe ejecutar y retornar un valor
  const isDesktop = !useIsDesktop();
  return (
    <>
      <header className={styles.header}>
        {/* Icono del menú */}
        {isDesktop && <Icon name="bx-menu" onClick={toggleMenu} />}

        {/* Logo */}
        <Link to="/" className={styles.header__logo}>
          <img
            src={logo}
            alt="Logo de TAM"
            className={styles.header__logo_img}/>
          </Link>

        {/* Lista de navegación */}
        <Nav isMenuActive={isMenuActive} />

        {/* Íconos a la derecha */}
        <HeaderRightIcons events={eventHandlers} />

        {/* Caja de búsqueda */}
        <SearchBoxM isSearchActive={isSearchActive} />
      </header>
      {/* Overlay (invisible por defecto) */}
      {/* por accesibilidad si queremos que un div sea bot'on usemos role */}
      <div
        className={`${styles.overlay} ${isMenuActive ? styles.active : ""}`}
        role="button"
        onClick={closeMenu}
      ></div>
    </>
  );
};
export default Header;
