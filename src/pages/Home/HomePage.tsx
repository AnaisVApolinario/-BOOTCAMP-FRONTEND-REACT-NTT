import { useVisibilityContext } from "../../context/VisibilityContext";
import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {

  const { toggles } = useVisibilityContext();
  const isBannerActive = toggles["banner"] ?? true; 

  return (
    <>
       {isBannerActive && <Banner />}
      <ProductList />
    </>
  );
};

export default HomePage;
