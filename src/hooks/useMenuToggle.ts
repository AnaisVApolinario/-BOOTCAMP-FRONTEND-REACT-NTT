import { useVisibilityContext } from "../context/VisibilityContext";

export const useMenuToggle = () => {
  const { toggles, toggle, setActive } = useVisibilityContext();
  const isMenuActive = toggles["menu"] || false;
  const isSearchActive = toggles['search']||false;
  const handleMenuToggle = () => toggle("menu");
  const handleCloseMenu = () => setActive("menu", false);

  return { isMenuActive,isSearchActive, handleMenuToggle, handleCloseMenu };
};