import { header } from "./components/header.js";
import { getProducts } from "./services/productsApi.js";
import { getCategories } from "./services/categoriesApi.js";

document.addEventListener("DOMContentLoaded", () => {
  header();
  products();
  categories();
});

// Products
const products = async () => {
  try {
    const dataProduct = await getProducts();
    renderProducts(dataProduct.products);
  } catch (error) {
    console.error(error);
  }
};

const renderProducts = (products) => {
  const productsContainer = document.querySelector(".products");

  while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.firstChild);
  }
  const convertToProductInterface = (product) => ({
    nameProduct: product.title,
    descriptionProduct: product.description,
    descriptionBrand: product.brand,
    priceProduct: product.price,
    imageProduct: product.thumbnail,
  });

  products.forEach((product) => {
    const productInterface = convertToProductInterface(product);
    const {
      nameProduct,
      descriptionProduct,
      descriptionBrand,
      priceProduct,
      imageProduct,
    } = productInterface;

    //Agrego el contenedor y le agrego su estilo.
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // Agrego la parte superior del producto
    const productTop = document.createElement("div");
    productTop.classList.add("product__top");

    const productImage = document.createElement("div");
    productImage.classList.add("product__image");
    const img = document.createElement("img");
    img.src = imageProduct;
    img.alt = nameProduct;
    productImage.appendChild(img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product__info");

    const name = document.createElement("p");
    name.classList.add("product__name");
    name.textContent = nameProduct;

    const description = document.createElement("p");
    description.classList.add("product__description");
    description.textContent = descriptionProduct;

    const weight = document.createElement("p");
    weight.classList.add("product__weight");
    weight.textContent = descriptionBrand ? `Marca: ${descriptionBrand}` : "";

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
    price.textContent = `S/.${priceProduct}`;

    // Agrego el contenedor de la cantidad
    const productQuantity = document.createElement("div");
    productQuantity.classList.add("product__quantity");

    const quantityValue = document.createElement("p");
    quantityValue.classList.add("product__quantity-value");
    quantityValue.textContent = "1";

    const decreaseButton = document.createElement("button");
    decreaseButton.classList.add("product__quantity-button");
    decreaseButton.textContent = "-";

    const increaseButton = document.createElement("button");
    increaseButton.classList.add("product__quantity-button");
    increaseButton.textContent = "+";

    // Agrego interactividad a los botones de cantidad
    decreaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityValue.textContent, 10);
      if (quantity > 1) {
        quantityValue.textContent = quantity - 1;
      }
    });

    increaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityValue.textContent, 10);
      quantityValue.textContent = quantity + 1;
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
      const cartIcon = document.querySelector(".bx-cart span");
      let count = parseInt(cartIcon.textContent, 10) || 0;
      cartIcon.textContent = count + parseInt(quantityValue.textContent, 10);
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
    renderCategories(dataCategory);
  } catch (error) {
    console.error(error);
  }
};

const renderCategories = (categories) => {
  const categoriesDropdown = document.querySelector(".nav__submenu");
  while (categoriesDropdown.firstChild) {
    categoriesDropdown.removeChild(categoriesDropdown.firstChild);
  }

  categories.forEach((category) => {
    const listItem = document.createElement("li");

    const categoryLink = document.createElement("a");
    // categoryLink.href = "#"; 
    categoryLink.classList.add("nav__submenu-link");
    categoryLink.textContent = category.name; 

    listItem.appendChild(categoryLink);
    categoriesDropdown.appendChild(listItem);
  });
};
