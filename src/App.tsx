// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import { SearchProvider } from "./context/searchContext";
import { CartProvider } from "./context/CartContext";
import { CategoryProvider } from "./context/CategoryContext";
import { VisibilityProvider } from "./context/VisibilityContext";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./utils/layout/MainLayout";
import EnvioPage from "./pages/Envio/EnvioPage";

function App() {
  return (
    <>
      <VisibilityProvider>
        <CartProvider>
          <SearchProvider>
            <CategoryProvider>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  {/* usemos enum para evitar escribir directamente */}
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/form" element={<EnvioPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </CategoryProvider>
          </SearchProvider>
        </CartProvider>
      </VisibilityProvider>
    </>
  );
}

export default App;
