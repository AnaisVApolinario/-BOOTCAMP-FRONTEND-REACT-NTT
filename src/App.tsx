import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./utils/layout/MainLayout";
import { ModuleRoutes } from "./router/routes";
import LoginPage from "./pages/Login/LoginPage";
import withAuth from "./HOC/withAuth";
import Home from "./pages/Home/HomePage";
import Form from "./pages/Envio/EnvioPage";
import Cart from "./pages/Cart/CartPage";

const HomeWithAuth = withAuth(Home);
const FormWithAuth = withAuth(Form);
const CartWithAuth = withAuth(Cart);
function App() {
  return (
    <Routes>
      <Route path={ModuleRoutes.HOME} element={<MainLayout />}>
        <Route index element={<HomeWithAuth />} />
        <Route path={ModuleRoutes.CART} element={<CartWithAuth />} />
        <Route path={ModuleRoutes.FORM} element={<FormWithAuth />} />
      </Route>
      <Route path={ModuleRoutes.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
