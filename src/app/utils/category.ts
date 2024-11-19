import { ProductI } from "../interface/productInterface";

export const handlerCategories=( 
  listProducts: ProductI[], 
  renderElement: (products: ProductI[]) => void
):void =>{

    const categoryLink = document.querySelectorAll<HTMLAnchorElement>(".nav__submenu-link");
    categoryLink.forEach((category) => {
      category.addEventListener("click", (categoryElement) => {
        const target = categoryElement.target as HTMLAnchorElement;
        filterProductsByCategory(target.textContent || "");
      });
    });
  
  const filterProductsByCategory = (categoryName:string) => {
    try {
      const listFilteredProducts = listProducts.filter((product) => {
        return product.category === categoryName.toLowerCase();
      });
  
      // Modificando la vista
      const banner = document.querySelector(".banner") as HTMLDivElement;
      banner.style.display = "none";
      const productTitle = document.querySelector(".products__title") as HTMLHeadingElement;
      const footer = document.querySelector(".footer") as HTMLElement;
      productTitle.textContent = `Categoría - ${categoryName}`;
      if (listFilteredProducts.length === 0) {
        footer.classList.add("no-content");
      } else {
        footer.classList.remove("no-content");
      }
  
      return renderElement(listFilteredProducts);
    } catch (error) {
      console.error("Error al filtrar productos:", error);
    }
  };
}