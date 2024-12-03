import { useNavigate } from "react-router-dom";
import { ModuleRoutes } from "../router/routes";
import { useVisibilityContext } from "../context/VisibilityContext";

export const useIconEventHandle= () => {
  const {toggle } = useVisibilityContext();
  const navigate = useNavigate();

  const handleUserClick = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("firstname");
    navigate(ModuleRoutes.LOGIN);
  };
  const handleCartClick = () => navigate(ModuleRoutes.CART);
  const handleSearchToggle = () => toggle("search");

  return {
    user: handleUserClick,
    cart: handleCartClick,
    search: handleSearchToggle,
  };
};