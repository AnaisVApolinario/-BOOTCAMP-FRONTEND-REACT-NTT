import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";
import { useVisibilityContext } from "../../context/VisibilityContext";

const HomePage = () => {
 
  const {isBannerVisible}= useVisibilityContext();
  return (
    <>
       {isBannerVisible && <Banner />}
      <ProductList />
    </>
  );
};

export default HomePage;
