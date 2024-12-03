import { createContext, ReactNode, useContext, useState } from "react";

interface IVisibilityContext {
  toggles: Record<string, boolean>; 
  toggle: (key: string) => void; 
  setActive: (key: string, value: boolean) => void;
}

const VisibilityContext = createContext<IVisibilityContext | undefined>(undefined);

export const VisibilityProvider: React.FC<{ children: ReactNode }> = ({ children })=> {
  const [toggles, setToggles] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const setActive = (key: string, value: boolean) => {
    setToggles((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <VisibilityContext.Provider value={{ toggles, toggle, setActive }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibilityContext = (): IVisibilityContext => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error("useToggleContext must be used within a ToggleProvider");
  }
  return context;
};

