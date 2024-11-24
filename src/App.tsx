import { useState } from 'react'
import './App.css'
import Banner from './app/components/Banner/Banner'
import Header from './app/components/Header/Header'
import ProductList from './app/components/ProductList/ProductList'
import Footer from './app/components/Footer/Footer'


function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = (quantity: number) => {
    setCartQuantity(prevQuantity => prevQuantity + quantity); // Actualizamos la cantidad total
  };
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);  // Estado para controlar la visibilidad del banner

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
     // Ocultar el banner cuando se seleccione una categoría
     if (category !== '') {
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);  // Mostrar el banner si no hay filtro
    }
  };

  return (
    <>
      <Header onCategoryChange={handleCategoryChange}  cartQuantity={cartQuantity}/>
      {isBannerVisible && <Banner />}  {/* Solo renderiza el Banner si isBannerVisible es true */}
      <ProductList category={selectedCategory}  handleAddToCart={handleAddToCart}/>
      <Footer />
    </>
  )
}

export default App
