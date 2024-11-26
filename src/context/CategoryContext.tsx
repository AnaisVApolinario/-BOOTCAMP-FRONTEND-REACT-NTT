import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CategoryContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: { name: string }[];
  setCategories: (categories: { name: string }[]) => void;
}

 const CategoryContext = createContext<CategoryContextType | undefined>(undefined);
export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<{ name: string }[]>([]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories,selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext debe ser usado dentro de un CategoryProvider');
  }
  return context;
};