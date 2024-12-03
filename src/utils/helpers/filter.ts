import IProducts from "../../domain/IProducts";

const filterProducts = (
  products: IProducts[],
  selectedCategory: string,
  searchQuery: string
): IProducts[] => {
  let filtered = products;

  if (selectedCategory) {
    filtered = filtered.filter(
      (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  if (searchQuery) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }

  return filtered;
};

export default filterProducts;