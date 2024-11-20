export interface CategoryResponse {
  slug: string;
  name: string;
  url:  string;
}
export interface Category {
  nameCategory: string,
}

// esto deber'ia estar en otra carpeta llamado mappers
export const mapperApiCategory = (apiCategory: CategoryResponse): Category => ({
  nameCategory: apiCategory.name,
});