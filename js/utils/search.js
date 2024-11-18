export const handlerSearch = (listProducts, renderElement) => {
  const searchInput = document.querySelector("#search-input");
  searchInput.addEventListener("input", (text) => {
    const searchText = text.target.value.toLowerCase();
    const filteredProducts = listProducts.filter((product) =>
      product.title.toLowerCase().startsWith(searchText)
    );
    if (filteredProducts.length === 0) {
      const footer = document.querySelector(".footer");
      footer.classList.add("no-content");
    } else {
      const footer = document.querySelector(".footer");
      footer.classList.remove("no-content");
    }

    renderElement(filteredProducts);
  });
};
