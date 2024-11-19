export interface ProductI {
  products: ProductsResponse[];
  // otras propiedades que pueda incluir la respuesta
}
interface ProductsResponse {
  id:                   number;
  title:                string;
  description:          string;
  category:             string;
  price:                number;
  discountPercentage:   number;
  rating:               number;
  stock:                number;
  tags:                 string[];
  brand:                string;
  sku:                  string;
  weight:               number;
  dimensions:           Dimensions;
  warrantyInformation:  string;
  shippingInformation:  string;
  availabilityStatus:   string;
  reviews:              Review[];
  returnPolicy:         string;
  minimumOrderQuantity: number;
  meta:                 Meta;
  images:               string[];
  thumbnail:            string;
}

interface Dimensions {
  width:  number;
  height: number;
  depth:  number;
}

interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode:   string;
  qrCode:    string;
}

interface Review {
  rating:        number;
  comment:       string;
  date:          Date;
  reviewerName:  string;
  reviewerEmail: string;
}
/*Mapper */
export interface Product {
  nameProduct: string,
  descriptionProduct: string,
  descriptionBrand: string,
  priceProduct: number,
  imageProduct: string,
  category:string
}

export const mapperApiProduct = (apiProduct: ProductsResponse): Product => ({
  nameProduct: apiProduct.title,
  descriptionProduct: apiProduct.description,
  descriptionBrand: apiProduct.brand,
  priceProduct: apiProduct.price,
  imageProduct: apiProduct.thumbnail,
  category: apiProduct.category
});