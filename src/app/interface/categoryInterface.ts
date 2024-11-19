export interface CategoryResponse {
  slug: string;
  name: string;
  url:  string;
}
export interface Category {
  nameCategory: string,
}

export const mapperApiCategory = (apiCategory: CategoryResponse): Category => ({
  nameCategory: apiCategory.name,
});