import styles from "./Nav.module.css";
import { NavItem } from "../NavItem/NavItem";
import Icon from "../Icon/Icon";
import useIsDesktop from "../../hooks/useIsDesktop";
import { IconName } from "../../domain/IconName";
import { useVisibilityContext } from "../../context/VisibilityContext";
import { useSearchContext } from "@/context/searchContext";
import { useCategoryContext } from "@/context/CategoryContext";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { useNavigate } from "react-router-dom";
import { ModuleRoutes } from "@/router/routes";
interface INav {
  isMenuActive?: boolean;
}

const Nav: React.FC<INav> = ({ isMenuActive }) => {
  const { setActive } = useVisibilityContext();
  const { setSearchQuery } = useSearchContext();
  const { setSelectedCategory } = useCategoryContext();
  const { products } = useFetchProducts();
  const newProducts = useFilteredProducts(products);
  const navigate = useNavigate();
  // deber'ia leer del contexto no del storage de lo contrario cualquiera podr'ia modificarlo
  const firstname = sessionStorage.getItem("firstname");
  const handleHomeClick = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setActive("menu", false);
    setActive("banner", true);
    newProducts;
  };
  const handleCloseMenu = () => {
    setActive("menu", false);
  };
  const handleLogout = () => {
    // usar un util
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("firstname");
    navigate(ModuleRoutes.LOGIN);
  };

  const isDesktop = useIsDesktop();
  return (
    <nav className={`${styles["nav"]} ${isMenuActive ? styles["active"] : ""}`}>
      {!isDesktop && (
        <div className={styles["nav__header"]}>
          <div className={styles["session__container"]}>
            <p className={styles["session__title"]}>Hola {firstname}</p>
            <Icon iconName={IconName.User} onClick={handleLogout}  />
          </div>
          <Icon iconName={IconName.Close} onClick={handleCloseMenu} />
        </div>
      )}

      <ul className={styles["nav__list"]}>
        <NavItem name="Inicio" path="/" onClick={handleHomeClick} />
        <NavItem name="Categorias" isDropdown={true} />
      </ul>
    </nav>
  );
};

export default Nav;
