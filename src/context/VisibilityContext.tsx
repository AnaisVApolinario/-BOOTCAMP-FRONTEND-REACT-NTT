import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
interface VisibilityContextType {
  isFooterEmpty: boolean;
  setIsFooterEmpty: React.Dispatch<React.SetStateAction<boolean>>; // Tipo del setter
  isBannerVisible: boolean;
  setIsBannerVisible: React.Dispatch<React.SetStateAction<boolean>>; // Tipo del setter
}
const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

// Crear un provider para envolver tu aplicación y compartir el estado
interface  VisibilityProviderProps {
  children: React.ReactNode;
}

export const VisibilityProvider: React.FC<VisibilityProviderProps> = ({ children }) => {
  const [isFooterEmpty, setIsFooterEmpty] = useState<boolean>(false);
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);

  return (
    <VisibilityContext.Provider value={{ isFooterEmpty, setIsFooterEmpty, isBannerVisible, setIsBannerVisible }}>
      {children}
    </VisibilityContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useVisibilityContext = () => {
  const context = useContext(VisibilityContext);
  if (context === undefined) {
    throw new Error("useVisibility debe ser usado dentro de un VisibilityProvider");
  }
  return context;
};