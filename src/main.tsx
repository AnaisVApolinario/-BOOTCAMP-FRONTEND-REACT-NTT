import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import { SearchProvider } from "./context/searchContext.tsx";
import { CategoryProvider } from "./context/CategoryContext.tsx";
import { VisibilityProvider } from "./context/VisibilityContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <CategoryProvider>
            <VisibilityProvider>
              <App />
            </VisibilityProvider>
          </CategoryProvider>
        </SearchProvider>
      </CartProvider>
  </BrowserRouter>
);
