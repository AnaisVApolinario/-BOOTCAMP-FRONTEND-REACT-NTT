import styles from "./header.module.css";
import Nav from "../Nav/Nav";
import Icon  from "../Icon/Icon";
import HeaderRightIcons from "../HeaderRightIcons/HeaderRightIcons";
import useIsDesktop from "../../hooks/useIsDesktop";
import SearchBoxM from "../SearchBox/SearchBoxM";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../../router/routes";
import { IconName } from "../../domain/IconName";
import { useIconEventHandle } from "../../hooks/useIconEventHandle";
import { useMenuToggle } from "../../hooks/useMenuToggle";
import Logo from "../Logo/Logo";

const Header= () => {

  const eventHandlers = useIconEventHandle();
  const { isMenuActive,isSearchActive, handleMenuToggle, handleCloseMenu } = useMenuToggle();
  const isDesktop = useIsDesktop();


  return (
    <>
      <header className={styles['header']}>
 
        {!isDesktop && <Icon iconName={IconName.Menu} onClick={handleMenuToggle} />}

        <Link to={ModuleRoutes.HOME} className={styles['header__logo']}>
         <Logo/>
          </Link>

        <Nav isMenuActive={isMenuActive}/>

        <HeaderRightIcons events={eventHandlers} />

        <SearchBoxM isSearchActive={isSearchActive} />
      </header>

      <div
        className={`${styles['overlay']} ${isMenuActive ? styles['active'] : ""}`}
        role="button"
        onClick={handleCloseMenu}
      ></div>
    </>
  );
};
export default Header;
