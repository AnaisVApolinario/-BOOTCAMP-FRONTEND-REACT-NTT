
export const handlerCategories=(listProducts, renderElement) =>{

    const categoryLink = document.querySelectorAll(".nav__submenu-link");
    categoryLink.forEach((category) => {
      category.addEventListener("click", (categoryElement) => {
        filterProductsByCategory(categoryElement.target.textContent);
      });
    });
  
  const filterProductsByCategory = (categoryName) => {
    try {
      const listFilteredProducts = listProducts.filter((product) => {
        return product.category === categoryName.toLowerCase();
      });
  
      // Modificando la vista
      const banner = document.querySelector(".banner");
      banner.style.display = "none";
      const productTitle = document.querySelector(".products__title");
      productTitle.textContent = `Categoría - ${categoryName}`;
      if (listFilteredProducts.length === 0) {
        const footer = document.querySelector(".footer");
        footer.classList.add("no-content");
      } else {
        const footer = document.querySelector(".footer");
        footer.classList.remove("no-content");
      }
  
      return renderElement(listFilteredProducts);
    } catch (error) {
      console.error("Error al filtrar productos:", error);
    }
  };
}