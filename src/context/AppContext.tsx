import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  cartQuantity: number;
  setCartQuantity: (quantity: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isBannerVisible: boolean;
  setIsBannerVisible: (visible: boolean) => void;
  isFooterEmpty: boolean;
  setIsFooterEmpty: (empty: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);
  const [isFooterEmpty, setIsFooterEmpty] = useState(false);

  return (
    <AppContext.Provider value={{
      cartQuantity,
      setCartQuantity,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      isBannerVisible,
      setIsBannerVisible,
      isFooterEmpty,
      setIsFooterEmpty
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un AppProvider');
  }
  return context;
};