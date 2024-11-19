import { header } from "./app/components/header.ts";
import { getProducts } from "./app/services/productsApi.ts";
import { getCategories } from "./app/services/categoriesApi.ts";
import { handlerSearch } from "./app/utils/search.ts";
import { handlerCategories } from "./app/utils/category.ts";
import { mapperApiProduct, Product} from "./app/interface/productInterface.ts"
import { mapperApiCategory, Category } from "./app/interface/categoryInterface.ts";

document.addEventListener("DOMContentLoaded", () => {
  header();
  products();
  categories();
});

// Products
const products = async (): Promise<void>  => {
  try {
    const dataProduct = await getProducts();
    const mapperProducts = dataProduct.products.map(mapperApiProduct);
    renderProducts(mapperProducts);
    handlerSearch(mapperProducts, renderProducts);
    handlerCategories(mapperProducts, renderProducts);
  } catch (error) {
    console.error(error);
  }
};

const renderProducts = (mapperProducts:Product[]): void => {
  const productsContainer = document.querySelector(".products") as HTMLDivElement;

  while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.firstChild);
  }
   // Mostrar mensaje cuando no hay productos
   if (mapperProducts.length === 0) {
    const noProductsMessage = document.createElement("h3") as HTMLHeadingElement;
    noProductsMessage.classList.add("empty__message");
    noProductsMessage.textContent = "No hay productos disponibles en esta categoría.";
    productsContainer.appendChild(noProductsMessage);
  }


  mapperProducts.forEach((product) => {
    //Agrego el contenedor y le agrego su estilo.
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // Agrego la parte superior del producto
    const productTop = document.createElement("div");
    productTop.classList.add("product__top");

    const productImage = document.createElement("div");
    productImage.classList.add("product__image");
    const img = document.createElement("img");
    img.src = product.imageProduct;
    img.alt = product.nameProduct;
    productImage.appendChild(img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product__info");

    const name = document.createElement("p");
    name.classList.add("product__name");
    name.textContent = product.nameProduct;

    const description = document.createElement("p");
    description.classList.add("product__description");
    description.textContent = product.descriptionProduct;

    const weight = document.createElement("p");
    weight.classList.add("product__weight");
    weight.textContent = product.descriptionBrand ? `Marca: ${product.descriptionBrand}` : "";

    // Añado los elementos
    productInfo.appendChild(name);
    productInfo.appendChild(description);
    productInfo.appendChild(weight);

    // Añado elementos al productTop
    productTop.appendChild(productImage);
    productTop.appendChild(productInfo);

    // Parte inferior del producto
    const productBottom = document.createElement("div");
    productBottom.classList.add("product__bottom");

    const price = document.createElement("p");
    price.classList.add("product__price");
    price.textContent = `S/.${product.priceProduct}`;

    // Agrego el contenedor de la cantidad
    const productQuantity = document.createElement("div");
    productQuantity.classList.add("product__quantity");

    const quantityValue = document.createElement("p") as HTMLParagraphElement;
    quantityValue.classList.add("product__quantity-value");
    quantityValue.textContent = "1";

    const decreaseButton = document.createElement("button") as HTMLButtonElement;
    decreaseButton.classList.add("product__quantity-button");
    decreaseButton.textContent = "-";

    const increaseButton = document.createElement("button") as HTMLButtonElement;
    increaseButton.classList.add("product__quantity-button");
    increaseButton.textContent = "+";

    // Agrego interactividad a los botones de cantidad
    decreaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityValue.textContent || "0", 10);
      if (quantity > 1) {
        quantityValue.textContent = (quantity - 1).toString(); // convierto el número a string;
      }
    });

    increaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityValue.textContent || "0", 10);
      quantityValue.textContent = (quantity + 1).toString(); // convierto el número a string;
    });

    // Añado botones y cantidad al contenedor de cantidad
    productQuantity.appendChild(decreaseButton);
    productQuantity.appendChild(quantityValue);
    productQuantity.appendChild(increaseButton);

    const addButton = document.createElement("button");
    addButton.classList.add("product__add");
    addButton.textContent = "Agregar";

    // Añado eventos al botón agregar al carrito
    addButton.addEventListener("click", () => {
      const cartIcon = document.querySelector(".bx-cart span") as HTMLSpanElement;
      let count = parseInt(cartIcon.textContent || "0", 10); // valor numérico inicial
      let quantity = parseInt(quantityValue.textContent || "0", 10); // quantityValue también CON VALOR NUMERICO
      cartIcon.textContent = (count + quantity).toString();
    });

    // Añado elementos a productBottom
    productBottom.appendChild(price);
    productBottom.appendChild(productQuantity);
    productBottom.appendChild(addButton);

    // Añado las partes superior e inferior al producto
    productElement.appendChild(productTop);
    productElement.appendChild(productBottom);

    // Agrego el producto al contenedor
    productsContainer.appendChild(productElement);
  });
};
//Categorias
const categories = async () => {
  try {
    const dataCategory = await getCategories();
    const mapperCategory = dataCategory.map(mapperApiCategory);
    renderCategories(mapperCategory);
  } catch (error) {
    console.error(error);
  }
};

const renderCategories = (categories:Category[]) => {
  const categoriesDropdown = document.querySelector(".nav__submenu") as HTMLUListElement;
  while (categoriesDropdown.firstChild) {
    categoriesDropdown.removeChild(categoriesDropdown.firstChild);
  }

  categories.forEach((category) => {
    const listItem = document.createElement("li");

    const categoryLink = document.createElement("a");
    // categoryLink.href = "#"; 
    categoryLink.classList.add("nav__submenu-link");
    categoryLink.textContent = category.nameCategory; 

    listItem.appendChild(categoryLink);
    categoriesDropdown.appendChild(listItem);
  });
};
